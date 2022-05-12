from django.shortcuts import render

from diets.models import DietTable

# Create your views here.
user = None


def usr_diet(request):
    return render(request, 'main/main.html')


def load_main(request):
    diet_list = DietTable.objects.all()

    return render(request, 'main/main.html',
                  {
                      'diet_list': diet_list,
                      'user': request.user.username,
                  })


def setUser(user_name):
    global user
    user = user_name
