from django.urls import path
from api.views import *


urlpatterns = [
    path('sensors/batch/', SensorBatchView.as_view(), name='sensor-batch'),
    path('sensors/json/', SensorJsonView.as_view(), name='sensor-json'),
]
