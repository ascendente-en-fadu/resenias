from django.contrib import admin
from .models import *


class CarreraAdmin(admin.ModelAdmin):
    list_display = ('nombre',)


class MateriaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'carrera')


class CatedraAdmin(admin.ModelAdmin):
    list_display = (
        'nombre', 'materia', 'turno_maniana', 'turno_tarde', 'turno_noche'
    )


class ReseniaAdmin(admin.ModelAdmin):
    list_display = ('catedra', 'calificacion', 'anio', 'created', 'updated')


# Register your models here.
admin.site.register(Carrera, CarreraAdmin)
admin.site.register(Materia, MateriaAdmin)
admin.site.register(Catedra, CatedraAdmin)
admin.site.register(Resenia, ReseniaAdmin)