import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder

from .models import AutomobileVO, Customer, Sale, SalesPerson




class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]

class SalesListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "auto_mobile",
        "sales_person",
        "customer",
        "price",
    ]
    encoders = {
        "auto_mobile":AutomobileVOEncoder(),
        "sales_person":SalesPersonListEncoder(),
        "customer":CustomerListEncoder(),

    }

# Create your views here.


@require_http_methods(["GET","POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person" : sales_person},
            encoder=SalesPersonListEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonListEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def api_delete_sales_person(request,id):
    if request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            sales_person.delete()
            return JsonResponse(
                {"deleted":True},
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message":"SalesPerson does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET","POST"])
def api_list_customers(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer":customer},
            encoder=CustomerListEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder = CustomerListEncoder,
            safe = False
        )


@require_http_methods(["DELETE"])
def api_delete_customer(request,id):
    if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                {"deleted":True},
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message":"Customer does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET","POST"])
def api_list_sales(request):
    if request.method == "GET":
        sale = Sale.objects.all()
        return JsonResponse(
            {"sale":sale},
            encoder = SalesListEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            print(content)

            automobile_id = content["auto_mobile"]
            automobile = AutomobileVO.objects.get(id=automobile_id)
            content["auto_mobile"] = automobile

            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person

            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer



            sale = Sale.objects.create(**content)

            return JsonResponse(
                sale,
                encoder=SalesListEncoder,
                safe=False
            )
        except AutomobileVO.DoesNotExist:
            response = JsonResponse({"message":"AutomobileVO does not exist"})
            response.status_code = 404
            return response

        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message":"SalesPerson does not exist"})
            response.status_code = 404
            return response

        except Customer.DoesNotExist:
            response = JsonResponse({"message":"Customer does not exist"})
            response.status_code = 404
            return response



@require_http_methods(["DELETE"])
def api_delete_sale(request,id):
    if request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                {"deleted":True},
                safe=False
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message":"Sale does not exist"})
            response.status_code = 404
            return response
