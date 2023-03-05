from django.db import models
from resenias.field_validators import validar_anio


# Create your models here.
class Carrera(models.Model):
    nombre = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.nombre


class Materia(models.Model):
    nombre = models.CharField(max_length=255)
    carrera = models.ForeignKey(
        Carrera, on_delete=models.PROTECT,
        related_name="materias", related_query_name="materia",
    )

    def __str__(self) -> str:
        return f'{self.nombre} ({self.carrera.nombre})'


class Catedra(models.Model):
    nombre = models.CharField(max_length=255)
    materia = models.ForeignKey(
        Materia, on_delete=models.PROTECT,
        related_name="catedras", related_query_name="catedra",
    )
    turno_maniana = models.BooleanField(
        verbose_name="turno mañana",
        help_text="Se imparte en el turno mañana."
    )
    turno_tarde = models.BooleanField(
        help_text="Se imparte en el turno tarde."
    )
    turno_noche = models.BooleanField(
        help_text="Se imparte en el turno noche."
    )

    def __str__(self) -> str:
        return self.nombre


class Resenia(models.Model):
    BAJO_NIVEL = 0
    NIVEL = 100000
    SOBRE_NIVEL = 200000

    CALIFICACION_CHOICES = (
        (BAJO_NIVEL, 'Bajo nivel'),
        (NIVEL, 'Nivel'),
        (SOBRE_NIVEL, 'Sobre nivel'),
    )

    catedra = models.ForeignKey(
        Catedra, on_delete=models.PROTECT,
        related_name="resenias", related_query_name="resenia",
    )

    autor = models.EmailField()
    calificacion = models.PositiveIntegerField(
        verbose_name="calificación", choices=CALIFICACION_CHOICES,
        blank=True, null=True,
    )
    contenido = models.TextField(help_text="Escriba su reseña en este campo.")
    anio = models.PositiveIntegerField(
        verbose_name="año de cursada", validators=[validar_anio]
    )
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "reseña"
