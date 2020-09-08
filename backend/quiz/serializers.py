from rest_framework import serializers
from .models import QuizInfo,AddNewQuizQuestion
from rest_framework.response import Response
class QuizInforSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizInfo
        fields = "__all__"



class AddQuizQuestionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = AddNewQuizQuestion
        fields = "__all__"
        

    