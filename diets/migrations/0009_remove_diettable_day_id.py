# Generated by Django 4.0.4 on 2022-05-12 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('diets', '0008_groupmealtable_meal_id_10_groupmealtable_meal_id_4_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='diettable',
            name='day_id',
        ),
    ]
