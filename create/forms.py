from django import forms
from django.forms import ModelForm

from dal import autocomplete

from diets.models import DietTable, FoodTable, DaysOfTheWeek, UserDietsTable, GroupMealTable, SingleMealRowTable


class DietForm(ModelForm):
    class Meta:
        model = DietTable
        fields = (
            'dietName',
            'dayLength',
            'dietType',
        )

        widgets = {
            'dietName': forms.TextInput(
                attrs={'class': 'form-control text-center', 'placeholder': 'diet name'
                       }),
            'dayLength': forms.NumberInput(
                attrs={'class': 'form-control text-center', 'placeholder': 'length of the diet in days'}
            ),
            'dietType': forms.Select(
                attrs={'class': 'form-select form-select-lg mb3 text-center', 'initial': 'select diet type'},
            )
        }

        labels = {
            'dietName': "",
            'dayLength': "",
            'dietType': "select your diet scope",
        }
