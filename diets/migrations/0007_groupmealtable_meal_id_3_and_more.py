# Generated by Django 4.0.4 on 2022-05-12 11:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('diets', '0006_rename_meal_id_groupmealtable_meal_id_1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='groupmealtable',
            name='meal_id_3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_requests_3', to='diets.singlemealrowtable'),
        ),
        migrations.AlterField(
            model_name='groupmealtable',
            name='meal_id_2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='%(class)s_requests_2', to='diets.singlemealrowtable'),
        ),
    ]
