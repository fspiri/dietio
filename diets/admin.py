from django.contrib import admin
from .models import DietTypes, DietTable, FoodTable, SingleMealRowTable, GroupMealTable, DaysOfTheWeek, UserDietsTable
from django.contrib import admin

# Register your models here.

admin.site.register(DietTypes)
admin.site.register(DietTable)
admin.site.register(FoodTable)
admin.site.register(SingleMealRowTable)
admin.site.register(GroupMealTable)
admin.site.register(DaysOfTheWeek)
admin.site.register(UserDietsTable)
