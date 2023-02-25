from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponseRedirect

from diets.models import DietTable
from diets.models import DietTypes, UserDietsTable
from .forms import DietForm

from dal import autocomplete
from main import views


# Create your views here.
# class CreateAutoComplete(autocomplete.Select2QuerySetView):
# def get_queryset(self):
# if not self.request.user.is_authenticated:
#   return DietTable.objects.none()

# qs = DietTable.objects.all()

# if self.q:
#    qs = qs.filter(dietName__isstartswith=self.q)

# return qs


def create(request):
    submitted = False
    diet_name = ""
    if request.method == 'POST':
        form = DietForm(request.POST)
        if form.is_valid():
            form.save()
            UserDietsTable.objects.create(user_id=request.user, diet_id=DietTable.objects.latest('diet_id'))
            # UserDietsTable.objects.create()
            return HttpResponseRedirect(
                '/create?submitted=True&diet_id=' + str(DietTable.objects.latest('diet_id').diet_id))
    else:
        form = DietForm
        if 'submitted' in request.GET:
            submitted = True
        if 'id' in request.GET:
            diet_name = DietTable.objects.latest('diet_id').diet_id
            print(diet_name)

    return render(request, "create/create.html",
                  {'form': form,
                   'types': DietTypes.objects.all(),
                   'submitted': submitted,
                   'diet_id': DietTable.objects.latest('diet_id').diet_id,
                   })


def edit_new(request):
    if 'diet_id' in request.GET:
        print(request.GET['diet_id'])
    return render(request, "edit/edit_mode.html", views.getValues(request))
