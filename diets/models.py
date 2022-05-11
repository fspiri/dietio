from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class DietTypes(models.Model):
    dietType = models.CharField(max_length=10)

    def __str__(self):
        return self.dietType


class FoodTable(models.Model):
    food_id = models.AutoField(primary_key=True)
    foodName = models.CharField(max_length=20)
    calories = models.IntegerField()
    proteins = models.IntegerField()
    carbohydrates = models.IntegerField()
    fats = models.IntegerField()
    cost = models.FloatField()

    def __str__(self):
        return self.foodName


class MealTable(models.Model):
    meal_id = models.AutoField(primary_key=True)
    food_id = models.ForeignKey(FoodTable, on_delete=models.PROTECT)
    quantity = models.IntegerField()

    def __str__(self):
        return self.meal_id


class MealFoodTable(models.Model):
    mealFood_id = models.AutoField(primary_key=True)
    meal_id = models.ForeignKey(MealTable, on_delete=models.CASCADE)

    def __str__(self):
        return self.mealFood_id


class DayOfTheWeek(models.Model):
    day_id = models.IntegerField(primary_key=True)
    diet_id = models.ForeignKey("DietTable", on_delete=models.CASCADE)
    mealOfTheDay = models.IntegerField()
    mealFood_id = models.ForeignKey(MealFoodTable, on_delete=models.CASCADE)

    def __str__(self):
        return self.day_id


class DietTable(models.Model):
    diet_id = models.AutoField(primary_key=True)  # to not use the default 'id; given by django
    dietName = models.CharField(max_length=50)
    dietType = models.ForeignKey(DietTypes, on_delete=models.PROTECT)
    day_id = models.ForeignKey(DayOfTheWeek, on_delete=models.PROTECT)
    startDate = models.DateTimeField()
    dayLength = models.IntegerField()

    def __str__(self):
        return self.dietName


class UserDietsTable(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    diet_id = models.ForeignKey(DietTable, on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id
