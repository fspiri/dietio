from django.urls import path, include

from main import views

urlpatterns = [
    path('', views.load_main, name='main_view'),
]
