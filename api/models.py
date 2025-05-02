from django.db import models

# Create your models here.
class SensorData(models.Model):
    timestamp    = models.DateTimeField()
    temperature  = models.FloatField()
    humidity     = models.FloatField()
    pressure     = models.FloatField()
