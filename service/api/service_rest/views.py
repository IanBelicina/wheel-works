from django.shortcuts import render
from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
# Create your views here.



class AutomobileVOListEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["id","vin", "sold"]


class TechnicianListEncoder(ModelEncoder):
    model  = Technician
    properties = [
       "id", "first_name", "last_name", "employee_id"
    ]

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["id","customer", "date_time", "reason", "status", "vin", "customer", "technician", "vip"]

    encoders = {
        "technician": TechnicianListEncoder(), "automobile": AutomobileVOListEncoder()
        }



@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse({"technician": technicians}, encoder=TechnicianListEncoder, safe=False)
    else:
        json_data = json.loads(request.body)
        technician = Technician.objects.create(**json_data)
        return JsonResponse({"technician": technician}, encoder=TechnicianListEncoder, safe=False)


@require_http_methods(["GET",  "DELETE"])
def api_show_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse({"technician": technician}, encoder=TechnicianListEncoder)
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        if count > 0:
            return JsonResponse({"message": "Successfully Deleted"})
        else:
            return JsonResponse({"Error":"Failed to delete technician"}, status=400)



@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.exclude(status__in=['cancel', 'Finish'])
        return JsonResponse({"appointments": appointments}, encoder=AppointmentListEncoder)
    else:
        json_data = json.loads(request.body)
        #Add Technician Data that will match the id
        try:
            technician = Technician.objects.get(id=json_data["technician"])
            json_data["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Invalid Technician Id"}, status=400)

        try:
            automobile =  AutomobileVO.objects.get(vin=json_data["vin"])
            if automobile.sold:
                json_data["vip"] = True
            else:
                json_data["vip"] = False
        except AutomobileVO.DoesNotExist:
            json_data["vip"] = False

        appointment = Appointment.objects.create(**json_data)
        return JsonResponse({"appointments":appointment}, encoder=AppointmentListEncoder, safe=False)


@require_http_methods(["GET","DELETE"])
def api_show_appointment(request,pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse({"appointment":appointment}, encoder=AppointmentListEncoder, safe=False)

    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()

        try:
             if count > 0:
                 return JsonResponse({"message": "Successfully Deleted"})
             else:
                 return JsonResponse({"message": "Failed To Delete"})

        except Appointment.DoesNotExist:
            return JsonResponse({"message": "appointment Detail Error"}, status=400)




@require_http_methods(["GET"])
def api_history_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse({"appointments": appointments}, encoder=AppointmentListEncoder)





@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    try:
        appointment = Appointment.objects.get(id=pk)
        appointment.status = "cancel"
        appointment.save()
        return JsonResponse({"message": "Appointment Canceled"})
    except Appointment.DoesNotExist:
        return JsonResponse({"Error": "Appointment Not Exist"}, status=404)


@require_http_methods(["PUT"])
def api_finish_appointment(request, pk):
    try:
        appointment = Appointment.objects.get(id=pk)
        appointment.status = "Finish"
        appointment.save()
        return JsonResponse({"message": "Appointment Finished"})
    except Appointment.DoesNotExist:
        return JsonResponse({"Error": "Appointment Not Exist"}, status=404)



@require_http_methods(["GET", "POST"])
def api_automobile_lists(request):
    if request.method == "GET":
        automobile = AutomobileVO.objects.all()
        return JsonResponse({"automobiles":automobile}, encoder=AutomobileVOListEncoder, safe=False)
    else:
        automobile_identity = json.loads(request.body)
        automobile = AutomobileVO.objects.create(**automobile_identity)
        return JsonResponse({"Automobile": automobile}, encoder=AutomobileVOListEncoder, safe=False)


 # try:
        #     automobile =  AutomobileVO.objects.get(vin=json_data["vin"])
        #     if automobile.sold:
        #         json_data["vip"] = True
        #     else:
        #         json_data["vip"] = False

        # except AutomobileVO.DoesNotExist:
        #     json_data["vip"] = False
