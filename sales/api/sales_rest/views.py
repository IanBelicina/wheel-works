import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder

from .models import AutomobileVO, Sale, SalesPerson

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id",
    ]

# Create your views here.


@require_http_methods(["GET","POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person" : sales_person},
            encoder=SalesPersonListEncoder,
        )
    else:
        content = json.loads(request.body)



        first_name = content["first_name"]
        last_name = content["last_name"]
        employee_id = content["employee_id"]

        sales_person = SalesPerson.objects.create(
            first_name = first_name,
            last_name = last_name,
            employee_id = employee_id
        )
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
