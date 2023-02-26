from decouple import config
import json
from cryptography.fernet import Fernet
from urllib.request import urlopen, Request
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *


class GLoginView(APIView):
    def post(self, request, format=None):
        google_access_token = request.data.get('token')
        user_data_url = "https://www.googleapis.com/oauth2/v2/userinfo"
        request_headers = {
            "Authorization": f"Bearer {google_access_token}",
            "Accept": "application/json",
        }
        user_data_request = Request(url=user_data_url, headers=request_headers)
        user_data_response = urlopen(user_data_request)
        user_data_json = json.loads(user_data_response.read())
        user_email = user_data_json.get('email')
        encryption_key = config('FERNET_KEY')
        fernet = Fernet(encryption_key)
        encrypted_email = fernet.encrypt(user_email.encode())
        str_encypted_email = encrypted_email.decode()
        return Response({"session_id": str_encypted_email})


class CarreraView(viewsets.ReadOnlyModelViewSet):
    serializer_class = CarreraSerializer
    queryset = Carrera.objects.all()


class MateriaView(viewsets.ReadOnlyModelViewSet):
    serializer_class = MateriaSerializer

    def get_queryset(self):
        """
        Si se especifica de que carrera deben ser
        las materias las filtra con este criterio.
        """
        queryset = Materia.objects.all()
        carrera = self.request.query_params.get('carrera')
        if carrera is not None:
            queryset = queryset.filter(carrera=carrera)
        return queryset


class CatedraView(viewsets.ReadOnlyModelViewSet):
    serializer_class = CatedraSerializer

    def get_queryset(self):
        """
        Si se especifica de que materia deben ser
        las catedras las filtra con este criterio.
        """
        queryset = Catedra.objects.all()
        materia = self.request.query_params.get('materia')
        if materia is not None:
            queryset = queryset.filter(materia=materia)
        return queryset


class ReseniaView(viewsets.ModelViewSet):
    serializer_class = ReseniaSerializer

    def get_queryset(self):
        """
        Si se especifica de que catedra deben ser
        las resenias las filtra con este criterio.
        """
        queryset = Resenia.objects.all()
        catedra = self.request.query_params.get('catedra')
        if catedra is not None:
            queryset = queryset.filter(catedra=catedra)
        return queryset

    def perform_create(self, serializer):
        encryption_key = config('FERNET_KEY')
        fernet = Fernet(encryption_key)
        encrypted_email = self.request.data.get('session_id')
        if encrypted_email:
            email = fernet.decrypt(encrypted_email).decode()
            serializer.save(autor=email)


class ReseniaPropiaView(generics.RetrieveAPIView):
    serializer_class = ReseniaSerializer

    def get_object(self):
        # autor
        encryption_key = config('FERNET_KEY')
        fernet = Fernet(encryption_key)
        encrypted_email = self.request.META.get('HTTP_SESSION_ID')
        email = fernet.decrypt(encrypted_email).decode()
        # catedra
        catedra = self.request.query_params.get('catedra')
        try:
            obj = Resenia.objects.get(autor=email, catedra=catedra)
        except ObjectDoesNotExist:
            return None
        return obj

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        if not instance:
            return Response(None)
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
