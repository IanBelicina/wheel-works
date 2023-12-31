import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something

from sales_rest.models import AutomobileVO


def getAutomobiles():
    print("in function")
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
    # print("response.content ", response.content)
    content = json.loads(response.content)
    # print("content ",content)


    for automobile in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin = automobile["vin"],
            defaults = {"sold":automobile["sold"]}
        )





def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            # Do not copy entire file
            getAutomobiles()
            print("got automobiles")

            pass
        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(1)


if __name__ == "__main__":
    poll()
