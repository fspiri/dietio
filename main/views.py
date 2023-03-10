import json
from django.shortcuts import render
from django.core.serializers.json import DjangoJSONEncoder

from diets.models import DietTable, FoodTable, DaysOfTheWeek, UserDietsTable, GroupMealTable, SingleMealRowTable

# Create your views here.
user = None


def usr_diet(request):
    return render(request, 'main/main.html')


def getDietList(diet_id_list):
    diet_list = []
    for element_id in diet_id_list:
        diet_list.append(
            list(DietTable.objects.filter(diet_id=element_id).values_list("dietName", "diet_id", "dayLength")))

    return diet_list


def getDaysList(diet_list):
    days_list = []
    for actual_diet_id in diet_list:
        days_list.append(list(DaysOfTheWeek.objects.filter(diet_id=actual_diet_id).values_list()))

    return days_list


def getMealFoodList(diet_list):
    meal_food_list = []
    for element in diet_list:
        meal_food_list.append(list(GroupMealTable.objects.filter(diet_id=element).values_list()))
    return meal_food_list


# this is no bueno
def getMealsList():
    meals_list = []
    meals = list(SingleMealRowTable.objects.filter().values_list())
    for element in meals:
        meals_list.append(list(element))
    return meals_list


def getFoodList():
    food_list = []
    food = list(FoodTable.objects.filter().values_list())
    for element in food:
        food_list.append(list(element))
        # print(list(element))
    # print("finished")
    # for element in food:
    #    food_list.append(list(FoodTable.objects.all().values_list()))
    return food_list


def getValues(request):
    diets_id_list = UserDietsTable.objects.filter(user_id=request.user.id).values_list('diet_id', flat=True)
    diet_list = getDietList(diets_id_list)
    diet_list_json = json.dumps(list(diet_list), cls=DjangoJSONEncoder)
    days_list_json = json.dumps(list(getDaysList(diets_id_list)), cls=DjangoJSONEncoder)
    meal_food_list = json.dumps(list(getMealFoodList(diets_id_list)), cls=DjangoJSONEncoder)
    meals_list = json.dumps(list(getMealsList()), cls=DjangoJSONEncoder)
    food_list = json.dumps(list(getFoodList()), cls=DjangoJSONEncoder)

    complete_list = {
        'diets_id_list': diet_list_json,
        'days_list': days_list_json,
        'meal_food_list': meal_food_list,
        'meals_list': meals_list,
        'food_list': food_list,
    }

    return complete_list


def load_main(request):
    if request.method == 'POST':
        print()

    # list of the IDs of the current user's diets

    return render(request, 'main/main.html', getValues(request))


def setUser(user_name):
    global user
    user = user_name
