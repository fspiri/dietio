from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class DietTypes(models.Model):
    dietType = models.CharField(max_length=10)

    def __str__(self):
        return str(self.dietType)


class FoodTable(models.Model):
    food_id = models.AutoField(primary_key=True)
    foodName = models.CharField(max_length=20)
    calories = models.FloatField(null=True, blank=True)
    proteins = models.FloatField(null=True, blank=True)
    carbohydrates = models.FloatField(null=True, blank=True)
    fats = models.FloatField(null=True, blank=True)
    cost = models.FloatField(null=True, blank=True)

    def __str__(self):
        return str(self.foodName)


class SingleMealRowTable(models.Model):
    meal_id = models.AutoField(primary_key=True)
    food_id = models.ForeignKey(FoodTable, on_delete=models.PROTECT)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.meal_id)


class GroupMealTable(models.Model):
    mealFood_id = models.AutoField(primary_key=True)
    diet_id = models.ForeignKey("DietTable", on_delete=models.CASCADE, null=True, blank=True)
    mealNumberOfTheDay = models.IntegerField(null=False, default=-1)
    meal_id_1 = models.ForeignKey(SingleMealRowTable, on_delete=models.CASCADE)
    meal_id_2 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_2',
                                  on_delete=models.CASCADE)
    meal_id_3 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_3',
                                  on_delete=models.CASCADE)
    meal_id_4 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_4',
                                  on_delete=models.CASCADE)
    meal_id_5 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_5',
                                  on_delete=models.CASCADE)
    meal_id_6 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_6',
                                  on_delete=models.CASCADE)
    meal_id_7 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_7',
                                  on_delete=models.CASCADE)
    meal_id_8 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_8',
                                  on_delete=models.CASCADE)
    meal_id_9 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_9',
                                  on_delete=models.CASCADE)
    meal_id_10 = models.ForeignKey(SingleMealRowTable, blank=True, null=True, related_name='%(class)s_requests_10',
                                   on_delete=models.CASCADE)

    def __str__(self):
        return str(self.mealFood_id)


class DaysOfTheWeek(models.Model):
    day_id = models.IntegerField(null=True, default='')
    diet_id = models.ForeignKey("DietTable", on_delete=models.CASCADE, null=True, blank=True)
    mealFood_one = models.ForeignKey(GroupMealTable, on_delete=models.CASCADE)
    mealFood_two = models.ForeignKey(GroupMealTable, on_delete=models.CASCADE, null=True, blank=True,
                                     related_name='%(class)s_requests_2')
    mealFood_three = models.ForeignKey(GroupMealTable, on_delete=models.CASCADE, null=True, blank=True,
                                       related_name='%(class)s_requests_3')
    mealFood_four = models.ForeignKey(GroupMealTable, on_delete=models.CASCADE, null=True, blank=True,
                                      related_name='%(class)s_requests_4')
    mealFood_five = models.ForeignKey(GroupMealTable, on_delete=models.CASCADE, null=True, blank=True,
                                      related_name='%(class)s_requests_5')

    def __str__(self):
        return str("diet: " + str(self.diet_id) + " - day: " + str(self.day_id))


class DietTable(models.Model):
    diet_id = models.AutoField(primary_key=True)  # to not use the default 'id; given by django
    dietName = models.CharField(max_length=50)
    dietType = models.ForeignKey(DietTypes, on_delete=models.PROTECT)
    startDate = models.DateTimeField(auto_now_add=True)
    dayLength = models.IntegerField()

    def __str__(self):
        return str(str(self.dietName) + "(" + str(self.dayLength) + ")")


class UserDietsTable(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    diet_id = models.ForeignKey(DietTable, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user_id)
