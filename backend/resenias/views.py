from urllib.request import urlopen, Request
import json
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from .serializers import *
from .models import *


class GLoginView(APIView):
    def post(self, request, format=None):
        # obtener access token
        access_token = request.data.get('token')
        url = "https://www.googleapis.com/oauth2/v2/userinfo"
        # creo el request
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Accept": "application/json",
        }
        request = Request(url, headers=headers or {})
        response = urlopen(request)
        # storing the JSON response 
        # from url in data
        data_json = json.loads(response.read())
        user_email = data_json.get('email')
        print(user_email)


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
