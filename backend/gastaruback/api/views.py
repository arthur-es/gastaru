from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from gastaruback.api.serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from models import Lancamento
from serializers import LancamentoSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #authentication_classes = (TokenAuthentication,)
    #permission_classes = (IsAuthenticated,)

class LancamentoViewSet(viewsets.ModelViewSet):
    queryset = Lancamento.objects.all()
    serializer_class = LancamentoSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def list(self, request, *args, **kwargs):
        lancamentos = Lancamento.objects.all()
        serializer = LancamentoSerializer(lancamentos, many=True)
        return Response(serializer.data)
