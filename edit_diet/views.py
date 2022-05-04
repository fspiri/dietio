from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def custom(request):
    return render(request, "edit/create_mode.html")
    # return HttpResponse("Hello, world. You're at the edit index.")
