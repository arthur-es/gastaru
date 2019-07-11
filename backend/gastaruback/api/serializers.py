from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Lancamento

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password' : {'write_only' : True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class LancamentoSerializer (serializers.ModelSerializer):
    owner = UserSerializer(required=False, read_only=True)
    class Meta:
        model = Lancamento
        fields = ('tipo', 'nome', 'valor', 'data', 'categoria', 'owner')
        extra_kwargs = {'owner' : {'allow_null': True, 'required': False}}


