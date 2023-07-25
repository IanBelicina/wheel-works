from django.urls import path

from .views import api_delete_sales_person, api_list_sales_person


urlpatterns = [
    path("salespeople/", api_list_sales_person, name="api_list_salespeople"),
    path("salespeople/<int:id>", api_delete_sales_person, name="api_delete_salesperson"),

]
