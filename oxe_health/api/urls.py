from django.urls import path
from . import views

urlpatterns = [
    path(r"get-data", views.EventMetricAPI.as_view(), name="getData"),
]
