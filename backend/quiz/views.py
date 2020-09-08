from django.shortcuts import render
from rest_framework import viewsets
from .models import QuizInfo,AddNewQuizQuestion
from .serializers import QuizInforSerializer,AddQuizQuestionSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.


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

    