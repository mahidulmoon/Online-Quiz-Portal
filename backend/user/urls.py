from django.urls import path,include
from rest_framework import routers
from .views import CustomObtainAuthToken,UserCreateViewSet,UserInfoViewSet


router = routers.DefaultRouter()
router.register('registration',UserCreateViewSet)
router.register('userinfo',UserInfoViewSet)




urlpatterns = [
    path('',include(router.urls)),
    path('authenticate/', CustomObtainAuthToken.as_view()),
    
]
