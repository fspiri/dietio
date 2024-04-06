from django.template.defaulttags import url
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.custom, name='custom'),
    # url(r'^(?P<id>\d)/$', views.edit_new, name='person_detail'),
    # path('?/<int:diet_id>', views.edit_new, name='custom'),
]
