import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something
from service_rest.models import AutomobileVO


def auth_polling_status():

    url =  "http://project-beta-inventory-api-1:8000/api/automobiles/"
    response = requests.get(url)
    content = json.loads(response.content)

    for auto_data in content["autos"]:
        AutomobileVO.objects.update_or_create(
           vin =  auto_data["vin"],
           defaults = {
               "sold": auto_data["sold"]
           }
        )

def poll(repeat=True):
    while True:
        print('Service poller polling for data')
        try:
            # Write your polling logic, here
            # Do not copy entire file
            auth_polling_status()

        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
