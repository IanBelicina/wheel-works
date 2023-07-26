from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.CharField(max_length=200)


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=10, unique=True)


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(Technician, related_name="appointments", on_delete=models.CASCADE)
