from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from gastaruback.api.serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Lancamento
from .serializers import LancamentoSerializer
from rest_framework import status



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
    #lookup_field = 'owner'
    serializer_class = LancamentoSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def create(self, request):
        user_id = request.user.id
        user_instance = User.objects.filter(id=user_id).first()
        #print(user_instance)
        #request.data['owner'] = user_instance
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            print (serializer.errors)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer.save(owner=user_instance)
        data = serializer.validated_data
        #print (Lancamento.objects.get(owner=User.objects.get(id=user_id)))
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request):
        lancamentos = Lancamento.objects.filter(owner=request.user)
        serializer = LancamentoSerializer(lancamentos, many=True)
        #print(serializer.data)
        return Response(serializer.data)

    def retrieve(self, request):
        lancamentos = Lancamento.objects.filter(owner=request.user)
        serializer = LancamentoSerializer(lancamentos, many=True)
        #print(serializer.data)
        return Response(serializer.data)