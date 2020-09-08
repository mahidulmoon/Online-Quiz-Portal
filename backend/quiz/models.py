from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class QuizInfo(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    quizcode = models.CharField(max_length=30)
    topic = models.CharField(max_length=50,blank=False)
    time = models.CharField(max_length=5,blank=False)

    def __str__(self):
        return self.quizcode



class AddNewQuizQuestion(models.Model):
    quizcode = models.CharField(max_length=30)
    question = models.CharField(max_length=100,blank=True)
    option1 = models.CharField(max_length=30,blank=True)
    option2 = models.CharField(max_length=30,blank=True)
    option3 = models.CharField(max_length=30,blank=True)
    option4 = models.CharField(max_length=30,blank=True)
    answer = models.CharField(max_length=30,blank=True)
    quiztype = models.CharField(max_length=30)
    