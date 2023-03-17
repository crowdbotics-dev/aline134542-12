from django.conf import settings
from django.db import models
class Country(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    abbrev = models.CharField(max_length=3,)
    population = models.IntegerField()
    area = models.IntegerField()
    gdp = models.FloatField()
