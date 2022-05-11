from django.contrib import admin
from .models import DietTypes, DietTable, FoodTable, MealTable, MealFoodTable, DayOfTheWeek, UserDietsTable
from django.contrib import admin

# Register your models here.

admin.site.register(DietTypes)
admin.site.register(DietTable)
admin.site.register(FoodTable)
admin.site.register(MealTable)
admin.site.register(MealFoodTable)
admin.site.register(DayOfTheWeek)
admin.site.register(UserDietsTable)
