from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from .serializers import UserCreateSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import viewsets
# Create your views here.
class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'id': token.user_id})


    
class UserCreateViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer