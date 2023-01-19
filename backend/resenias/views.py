from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *


class CarreraView(viewsets.ModelViewSet):
    serializer_class = CarreraSerializer
    queryset = Carrera.objects.all()


class MateriaView(viewsets.ModelViewSet):
    serializer_class = MateriaSerializer
    queryset = Materia.objects.all()


class CatedraView(viewsets.ModelViewSet):
    serializer_class = CatedraSerializer
    queryset = Catedra.objects.all()


class ReseniaView(viewsets.ModelViewSet):
    serializer_class = ReseniaSerializer
    queryset = Resenia.objects.all()