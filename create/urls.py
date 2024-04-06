from django.template.defaulttags import url
from django.urls import path
from . import views

# from create.views import CreateAutoComplete

urlpatterns = [
    path('', views.create, name='custom'),
]
