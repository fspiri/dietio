from django.http import HttpResponse
from django.shortcuts import render
from bs4 import BeautifulSoup as bs
import os
import re

# Create your views here.
user = None


def loadmain(request):
    return render(request, 'main/main.html')


def setUser(userName):
    global user
    user = userName
