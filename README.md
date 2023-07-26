# CarCar

An application to help automobile dealerships track their sales, service appointments, and inventory.

Team:

* Munti Kehase - service microservice?
* Ian Belicina - Sales microservice!!!


## How to Run this App
 -Required software
  -Git
  -Node.js
  -Docker

  1. Fork and clone this repository to your computer <https://gitlab.com/vancebelicina/project-beta>
  2. Build the project and run the project in docker using the following commands in the terminal
    - docker volume create beta-data
    - docker-compose build
    - docker-compose up
  3. Open Docker desktop to confirm all of your containers are running.
  4. View the react project at http://localhost:3000/
    - If your project does not load, stop the docker container for react.
    - Open a seperate terminal and navigate to the directory with pacakage.json.
    - Run the commands:
      - npm install
      - npm start
    - This will open a new window in your browser running the react application.



## Design

CarCar has three moicroservices that interact each have their front and back end built.

- Inventory microservice
- Sales microservice
- Services microservice

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



## Sales microservice ##

On the back end of the sales microservice it has four models. The sales microservice works with the inventory microservice by polling the automobiles data from the inventory microservice. This way there is a method to track which cars have been sold and which have not.

- SalesPerson: The person who makes the sale, identified uniquely by their employee_id.
- Customer: The person who buys the car, identified uniquely by their phone_number.
- AutomobileVO: The value object whos data is populated via polling from the inventory microservice. This is done so that we can have a field for automobiles in the Sale model which we will talk about next.
- Sale: Consisting of fields of foreign keys from the first three models with the addition to the price of the automobile that was sold. This model helps keep track of which autombiles have been sold so that they do not get sold again.

## Enpoints to POST, GET, and DELETE data via insomnia

## SalesPerson ##

Action | Method | URL
| ------ | ------ | ------ |
List Sales People | GET | http://localhost:8090/api/salespeople/
Create Sales Person | POST | http://localhost:8090/api/salespeople/
Delete Specific Sales Person | DELETE | http://localhost:8090/api/salespeople/<int:id>

# List Sales People:

Returns:
{
	"sales_person": [
		{
			"id": 7,
			"first_name": "Matt",
			"last_name": "Montenegro",
			"employee_id": "mmontenegro"
		},
		{
			"id": 8,
			"first_name": "Jiji",
			"last_name": "Montenegro",
			"employee_id": "jmontenegro"
		}
	]
}



# Create Sales Person example:

Send JSON body:

{
	"first_name": "Jiji",
	"last_name":"Montenegro",
	"employee_id":"jmontenegro5"
}

Returns:

{
	"id": 9,
	"first_name": "Jiji",
	"last_name": "Montenegro",
	"employee_id": "jmontenegro5"
}

# Delete Sales Person example:

Request this URL:

http://localhost:8090/api/salespeople/<int:id>

Returns:
{
	"deleted": true
}


## Customer ##

Action | Method | URL
| ------ | ------ | ------ |
List Customers | GET | http://localhost:8090/api/customers/
Create Customer | POST | http://localhost:8090/api/customers/
Delete Specific Customer | DELETE | http://localhost:8090/api/customers/<int:id>


# List Customers example:

Returns:

{
	"customer": [
		{
			"id": 1,
			"first_name": "John",
			"last_name": "Doe",
			"address": "1111 addy",
			"phone_number": "111-111-1111"
		},
		{
			"id": 2,
			"first_name": "Jane",
			"last_name": "Doe",
			"address": "2222 addy",
			"phone_number": "222-222-2222"
		},
		{
			"id": 4,
			"first_name": "Kakashi",
			"last_name": "Hatake",
			"address": "444 addy",
			"phone_number": "444-444-4444"
		}
	]
}

# Create Customer example:

Send this JSON Body:

{
	"first_name":"John",
	"last_name":"Doe",
	"address":"444 addy",
	"phone_number":"544-444-4444"
}

Returns:

{
	"id": 5,
	"first_name": "John",
	"last_name": "Doe",
	"address": "444 addy",
	"phone_number": "544-444-4444"
}

# Delete Customer example"

Request to this URL:

http://localhost:8090/api/customers/<int:id>

Returns:

{
	"deleted": true
}

## Sale ##

Action | Method | URL
| ------ | ------ | ------ |
List Sales | GET | http://localhost:8090/api/sales/
Create Sale | POST | http://localhost:8090/api/sales/
Delete Specific Customer | DELETE | http://localhost:8090/api/sales/15

# List Sales example:

Returns:

{
	"sales": [
		{
			"id": 11,
			"auto_mobile": {
				"id": 1,
				"vin": "1C3CC5FB2AN120174",
				"sold": true
			},
			"sales_person": {
				"id": 4,
				"first_name": "Goku",
				"last_name": "Doe",
				"employee_id": "gdoe"
			},
			"customer": {
				"id": 1,
				"first_name": "Vegeta",
				"last_name": "Doe",
				"address": "1111 addy",
				"phone_number": "111-111-1111"
			},
			"price": "$75,000"
		}
	]
}

# Create Sale example:

Send JSON body:

{
	"price":"$15,000",
	"auto_mobile":"2", <--- automobilevo id
	"sales_person":"5", <---salesperson id
	"customer":"4" <--- customer id

}

Returns:
{
	"id": 15,
	"auto_mobile": {
		"id": 2,
		"vin": "testingvin",
		"sold": true
	},
	"sales_person": {
		"id": 5,
		"first_name": "Goku",
		"last_name": "Doe",
		"employee_id": "jdoe"
	},
	"customer": {
		"id": 4,
		"first_name": "Vegeta",
		"last_name": "Doe",
		"address": "444 addy",
		"phone_number": "444-444-4444"
	},
	"price": "$15,000"
}


# Delete Sale example:

Request to this URL:

http://localhost:8090/api/sales/<int:id>

Returns:

{
	"deleted": true
}


## Inventory microservice ##

On the back end of the inventory microservice it has four models. The sales microservice polls the automobile data from the inventory microserve to keep track of which automobiles are still available to be sold.

- Manufacturer - Consists of the name of which manufacturer made the car.
- VehicleModel - Consists of the name of the vehicle model, picture_url and manufacturer name of who made the car.
- Automobile - Consists of the color, year, vin (Unique identifier), sold status (boolean value), and model(foreign key from above vehicle model).


## Enpoints to POST, GET, and DELETE data via insomnia

# Manufacturer

Action | Method | URL
| ------ | ------ | ------ |
List Manufacturer | GET | http://localhost:8100/api/manufacturers/
Create Manufacturer | POST | 	http://localhost:8100/api/manufacturers/
Delete Specific Manufacturer | DELETE | http://localhost:8100/api/manufacturers/<int:id>/
Update a Specific Manufacturer | PUT | http://localhost:8100/api/manufacturers/<int:id>/

# List Manufacturers example:

Returns:

{
	"manufacturers": [
		{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Tesla"
		},
		{
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "BMW"
		},
		{
			"href": "/api/manufacturers/3/",
			"id": 3,
			"name": "Toyota"
		},
		{
			"href": "/api/manufacturers/4/",
			"id": 4,
			"name": "Rivian"
		}
	]
}

# Create new manufacturer example:

Send JSON body:

{
	"name":"BMW"
}


Returns:

{
	"href": "/api/manufacturers/2/",
	"id": 2,
	"name": "BMW"
}


# Delete specfic manufacturer:

Request to this URL:

	http://localhost:8100/api/manufacturers/<int:id>/


Returns:

{
	"id": null,
	"name": "Toyota"
}

# VehicleModel

Action | Method | URL
| ------ | ------ | ------ |
List VehicleModels | GET | 	http://localhost:8100/api/models/
Create VehicleModel | POST | 		http://localhost:8100/api/models/
Delete Specific VehicleModel | DELETE | http://localhost:8100/api/models/<int:id>/
Update a Specific VehicleModel | PUT | http://localhost:8100/api/models/<int:id>/

# List Vehicle Models example:

Returns:

{
	"models": [
		{
			"href": "/api/models/1/",
			"id": 1,
			"name": "Model Y",
			"picture_url": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/AWD_hero-portrait%402-jpg",
			"manufacturer": {
				"href": "/api/manufacturers/1/",
				"id": 1,
				"name": "Tesla"
			}
		},
		{
			"href": "/api/models/2/",
			"id": 2,
			"name": "i8",
			"picture_url": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-02-media-hd.jpg?imwidth=1280",
			"manufacturer": {
				"href": "/api/manufacturers/2/",
				"id": 2,
				"name": "BMW"
			}
		}
	]
}

# Create Vehicle Model example:

Send JSON body:

{
	"name":"i8",
	"picture_url":"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-02-media-hd.jpg?imwidth=1280",
	"manufacturer_id":"2"
}

Returns:

{
	"href": "/api/models/2/",
	"id": 2,
	"name": "i8",
	"picture_url": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-02-media-hd.jpg?imwidth=1280",
	"manufacturer": {
		"href": "/api/manufacturers/2/",
		"id": 2,
		"name": "BMW"
	}
}

# Automobile

Action | Method | URL
| ------ | ------ | ------ |
List Automobiles | GET | http://localhost:8100/api/automobiles/
Create Automobile | POST | http://localhost:8100/api/automobiles/
Delete Specific Automobile | DELETE | http://localhost:8100/api/automobiles/<vin>/
Update a Specific Automobile | PUT | http://localhost:8100/api/automobiles/<vin>/


# List Automobiles example:

Returns:

{
	"autos": [
		{
			"href": "/api/automobiles/1C3CC5FB2AN120174/",
			"id": 1,
			"color": "red",
			"year": 2022,
			"vin": "1C3CC5FB2AN120174",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "Model Y",
				"picture_url": "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/AWD_hero-portrait%402-jpg",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "Tesla"
				}
			},
			"sold": false
		},
		{
			"href": "/api/automobiles/testingvin/",
			"id": 2,
			"color": "silver",
			"year": 2022,
			"vin": "testingvin",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "i8",
				"picture_url": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-02-media-hd.jpg?imwidth=1280",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "BMW"
				}
			},
			"sold": false
		},
		{
			"href": "/api/automobiles/vinvinvin/",
			"id": 3,
			"color": "silver",
			"year": 2022,
			"vin": "vinvinvin",
			"model": {
				"href": "/api/models/2/",
				"id": 2,
				"name": "i8",
				"picture_url": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-02-media-hd.jpg?imwidth=1280",
				"manufacturer": {
					"href": "/api/manufacturers/2/",
					"id": 2,
					"name": "BMW"
				}
			},
			"sold": false
		}
	]
}


# Create Automobile example:

Send JSON body:

{
  "color": "silver",
  "year": 2022,
  "vin": "vinvinvin",
  "model_id": 2 <--- vehicle model id
}

Returns:

{
	"href": "/api/automobiles/vinvinvin/",
	"id": 3,
	"color": "silver",
	"year": 2022,
	"vin": "vinvinvin",
	"model": {
		"href": "/api/models/2/",
		"id": 2,
		"name": "i8",
		"picture_url": "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/si8/i8-02-media-hd.jpg?imwidth=1280",
		"manufacturer": {
			"href": "/api/manufacturers/2/",
			"id": 2,
			"name": "BMW"
		}
	},
	"sold": false
}
