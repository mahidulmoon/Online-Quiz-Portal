from django.contrib import admin
from .models import QuizInfo,AddNewQuizQuestion
# Register your models here.

class CustomeAddQuiz(admin.ModelAdmin):
    list_display = ["quizcode","question","quiztype"]

admin.site.register(QuizInfo)
admin.site.register(AddNewQuizQuestion,CustomeAddQuiz)