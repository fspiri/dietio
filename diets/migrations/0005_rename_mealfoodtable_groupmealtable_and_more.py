# Generated by Django 4.0.4 on 2022-05-12 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('diets', '0004_remove_mealtable_mealnumber_id_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='MealFoodTable',
            new_name='GroupMealTable',
        ),
        migrations.RenameModel(
            old_name='MealTable',
            new_name='SingleMealRowTable',
        ),
    ]
