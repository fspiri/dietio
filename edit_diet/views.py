from django.shortcuts import render
from django.core.serializers.json import DjangoJSONEncoder

from diets.models import DietTable, FoodTable, DaysOfTheWeek, UserDietsTable, GroupMealTable, SingleMealRowTable
from main import views
import json

# Create your views here.
from django.http import HttpResponse


def custom(request):
    diet_id = request.GET.get('diet_id', '-1')
    print(diet_id)
    if (diet_id == -1):
        return render(request, "main/main.html", views.getValues(request))

    return render(request, "edit/edit_mode.html", views.getValues(request))
