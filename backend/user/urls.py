from django.urls import path,include
from rest_framework import routers
from .views import CustomObtainAuthToken,UserCreateViewSet


router = routers.DefaultRouter()
router.register('registration',UserCreateViewSet)




urlpatterns = [
    path('',include(router.urls)),
    path('authenticate/', CustomObtainAuthToken.as_view()),
    
]
