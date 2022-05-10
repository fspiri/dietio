from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from main import views

urlpatterns = [
    path('', views.loadmain, name='main_view'),
]
