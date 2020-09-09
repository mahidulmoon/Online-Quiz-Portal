from django.shortcuts import render
from rest_framework import viewsets
from .models import QuizInfo,AddNewQuizQuestion
from .serializers import QuizInforSerializer,AddQuizQuestionSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from django_filters import rest_framework as filters
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend



class QuizInfoViewSet(viewsets.ModelViewSet):
    queryset = QuizInfo.objects.all()
    serializer_class = QuizInforSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )


class AddQuizQuestionViewSet(viewsets.ModelViewSet):
    queryset = AddNewQuizQuestion.objects.all()
    serializer_class = AddQuizQuestionSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    


class GetQuizFilter(viewsets.ModelViewSet):
    queryset = AddNewQuizQuestion.objects.all()
    serializer_class = AddQuizQuestionSerializer
    filter_backends = (DjangoFilterBackend,SearchFilter)
    filter_fields = ('id','quizcode')
    search_fields = ('id','quizcode')