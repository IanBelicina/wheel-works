from django.db import models


# Create your models here.
class SalesPerson(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, unique=True)

class Customer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_numer = models.CharField(max_length=200, unique=True)

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200,unique=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


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
