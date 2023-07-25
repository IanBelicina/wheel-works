# CarCar

Team:

* Munti Kehase - service microservice?
* Ian Belicina - Sales microservice!!!

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

# Notes:
- Write Models And RestFul Api For each Microservices
- Implement RESTful API, poller, and React components For each Microservices
- Write react component for Inventory API

# 1. services/api
        - install django app in the project setting
        - add the app to the project urls
        - Create urls.py inside the app

   ***ADD models.py***
   - Technician
   - AutomobileVO
   - Appointment

   ***Views.py***

    * Technician
      - Create Encoder with ModelEncoder
      - Create  RESTFUL API Views function that "GET" and "POST" and "DELETE"
    * Appointments
     - Create Encoder with ModelEncoder
     - Create  RESTFUL API Views function that "GET" and "POST" and "DELETE" "PUT/cancel" and "PUT/finish"

   ***urls.py***

         - Configure the view in a URLs for each function in the views

# 2. Automobile Poller
    -  update status  AutomobileVO every 60 seconds with updated VINs from your Inventory service. VIN is a unique automobile identifier with 17#
# 3. FRONT END REACT

  ***ServiceForms.js***
       * technician Form
        - You need to create a form that allows a person to enter an automobile technician's name and employee ID
      * Create Appointment Form
        - You need to create a link in the navbar to get to the Add a technician form.

 ***ServiceList.js***
        *List all technicians
        - You need to create a page that lists all technicians showing each technician's employee ID and name.
        - You need to create a link in the navbar to get to the Technicians page.

# 4. TEST HTTP Request - ON Insomnia
  - create, list, show and delete Technician
  - create, list , show, update/cancel, update/finish, delete Appointment


## Sales microservice

Explain your models and integration with the inventory
microservice, here.

******Best Practice Steps*********
1. git checkout -b my-branch
    A. Write Codes
    B. Execute git
       - git add .
       - git commit -m "useful message"
       - git push

2. git checkout main
    - git pull
    - git merge branchName
    - git push

3. git checkout my-branch
