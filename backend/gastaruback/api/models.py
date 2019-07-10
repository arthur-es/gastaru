from django.db import models

class Lancamento(models.Model):
    nome = models.CharField(max_length=30)
    categoria = models.CharField(max_length=30, blank=True)
    valor = models.DecimalField(max_digits=9, decimal_places=2)
    data = models.DateField()

    objects = models.Manager()