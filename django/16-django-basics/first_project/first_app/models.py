from django.db import models

# Create your models here.


class Topic(models.Model):
    top_name = models.CharField(max_length=264, unique=True)

    def __str__(self) -> models.CharField:
        return self.top_name


class Webpage(models.Model):
    # align with Topic table
    topic = models.ForeignKey(Topic)
    name = models.CharField(max_length=264, unique=True)
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name


class AccessRecord(models.Model):
    # align with Webpage table
    name = models.ForeignKey(Webpage)
    date = models.DateField()

    def __str__(self) -> str:
        return str(self.date)
