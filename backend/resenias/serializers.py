from rest_framework import serializers
from .models import *


class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = ('id', 'nombre')


class MateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materia
        fields = ('id', 'nombre', 'carrera')


class CatedraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catedra
        fields = (
            'id', 'nombre', 'materia',
            'turno_maniana', 'turno_tarde', 'turno_noche'
        )


class ReseniaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resenia
        fields = ('id', 'catedra', 'calificacion', 'contenido', 'anio')