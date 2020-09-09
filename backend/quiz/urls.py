from django.urls import path,include
from rest_framework import routers
from .views import QuizInfoViewSet,AddQuizQuestionViewSet,GetQuizFilter


router = routers.DefaultRouter()
router.register('quizinfo',QuizInfoViewSet)
router.register('addquizquestion',AddQuizQuestionViewSet)
router.register('getquizquestion',GetQuizFilter)





urlpatterns = [
    path('',include(router.urls)),
    #path('getquizquestion',search_quiz),
]
