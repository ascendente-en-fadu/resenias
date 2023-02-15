"""Validators para los models fields de la aplicacion resenias"""
import datetime
from django.core.exceptions import ValidationError
ANIO_MINIMO = 2000


def validar_anio(value):
    """Valida que el anio este entre 2000 y el anio actual (incluidos)."""
    if value > datetime.date.today().year:
        raise ValidationError(
            message="No puede ingresar un año que aún no haya transcurrido"
        )
    elif value < ANIO_MINIMO:
        raise ValidationError(
            message=f'El año debe ser superior a {ANIO_MINIMO}'
        )