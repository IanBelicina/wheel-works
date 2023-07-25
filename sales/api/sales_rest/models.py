from django.urls import reverse
from django.db import models


# Create your models here.
class SalesPerson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, unique=True)

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"id": self.id})

class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200, unique=True)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"id": self.id})

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_automobilevo", kwargs={"id": self.id})


class Sale(models.Model):
    auto_mobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile_vo",
        on_delete=models.CASCADE
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE
    )
    price = models.CharField(max_length=50)
