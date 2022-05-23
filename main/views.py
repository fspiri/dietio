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
        diet_list.append(list(DietTable.objects.filter(diet_id=element_id).values_list("dietName", "diet_id")))

    return diet_list


def getDaysList(diet_list):
    days_list = []
    for actual_diet_id in diet_list:
        days_list.append(list(DaysOfTheWeek.objects.filter(diet_id=actual_diet_id).values_list("diet_id",
                                                                                               "day_id",
                                                                                               "mealOfTheDay",
                                                                                               "mealFood_id")))

    return days_list


def getMealFoodList(diet_list):
    meal_food_list = []
    for element in diet_list:
        meal_food_list.append(list(GroupMealTable.objects.filter(diet_id=element).values_list(
            "diet_id",
            "mealNumber_id",
            "meal_id_1",
            "meal_id_2",
            "meal_id_3",
            "meal_id_4",
            "meal_id_5",
            "meal_id_6",
            "meal_id_7",
            "meal_id_8",
            "meal_id_9",
            "meal_id_10",
        )))
    return meal_food_list


# this is no bueno
def getMealsList(meals_list):
    meals_list = []
    for element in meals_list:
        meals_list.append(list(SingleMealRowTable.objects.values_list()))
    return meals_list


def getFoodList(food_id_list):
    food_list = []
    for element in food_id_list:
        food_list.append(list(FoodTable.objects.all().values_list()))
    return food_list


def getFoodIdList():
    food_id_list = []

    return food_id_list


def load_main(request):
    if request.method == 'POST':
        print()

    # list of the IDs of the current user's diets
    diets_id_list = UserDietsTable.objects.filter(user_id=request.user.id).values_list('diet_id', flat=True)
    diet_list = getDietList(diets_id_list)
    diet_list_json = json.dumps(list(diet_list), cls=DjangoJSONEncoder)
    days_list_json = json.dumps(list(getDaysList(diets_id_list)), cls=DjangoJSONEncoder)
    meal_food_list = json.dumps(list(getMealFoodList(diets_id_list)), cls=DjangoJSONEncoder)
    meals_list = json.dumps(list(getMealsList(meal_food_list)), cls=DjangoJSONEncoder)
    # food_list = json.dumps(list(getFoodList()), cls=DjangoJSONEncoder)

    return render(request, 'main/main.html',
                  {
                      'diets_id_list': diet_list_json,
                      'days_list': days_list_json,
                      'meal_food_list': meal_food_list,
                      # 'meals_list': meals_list,
                      # 'food_list': food_list,
                  })


def setUser(user_name):
    global user
    user = user_name
