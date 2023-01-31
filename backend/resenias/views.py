from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *


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
