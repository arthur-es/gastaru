from django.contrib.auth.models import User
from django.db import models

class Lancamento(models.Model):
    tipo = models.CharField(max_length=30)
    nome = models.CharField(max_length=30)
    valor = models.DecimalField(max_digits=9, decimal_places=2)
    data = models.CharField(max_length=30)
    categoria = models.IntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
    objects = models.Manager()