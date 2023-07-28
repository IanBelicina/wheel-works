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

![Microservice Diagram](https://gitlab.com/vancebelicina/project-beta/-/raw/sales/images/finaldiagram.png?ref_type=heads)

## Service microservice

Service Microservice handles appointment services for automobiles. The back end consists  Technician - AutomobileVO - Appointment, which we defined in our models.

 - Technician: this model manages the person in charge providing a service to the reserved automobile that assigned. The form enables to create first and last name and employee id.

 - AutomobileVO keeps track sold or unsold cars and enable to identify customers as VIP or not based on the automobile vin number.

 - Appointment: creates appointment in-order to  service automobile, the form takes vin#, customer name, reason, technician option selection.

**INSOMNIA TEST**
  - Technician -  create(POST), list(GET), show(GET) and delete(DELETE).
  - Appointment - create(POST), list(GET) , show(GET), update/cancel(PUT), update/finish(PUT), delete(DELETE)
  - AutomobileVO - Create(POST) , list(GET)

# | Action | Method | URL
| ----------- | ----------- | ----------- |
| Create  Technician | POST |

http://localhost:8080/api/technicians/

{
	"first_name": "Michael",
	"last_name": "James",
	"employee_id": "AJH39S20AK"
}


**RESPONSE**

{
	"technician": {
		"id": 27,
		"first_name": "Michael",
		"last_name": "James",
		"employee_id": "AJH39S20AK"
	}
}

***| List of Technician | Get |***

- http://localhost:8080/api/technicians/

"technician": [

{
			"id": 12,
			"first_name": "Tweek ",
			"last_name": " Taki",
			"employee_id": "DKS23DJ52"
		},
		{
			"id": 13,
			"first_name": "Helen ",
			"last_name": " Keler",
			"employee_id": "DJHSH282KS"
		},

    ]
}

***| Get Specific  Technician | Get |***

http://localhost:8080/api/technicians/23/

{
	"technician": {
		"id": 23,
		"first_name": "SAM",
		"last_name": "TES",
		"employee_id": "KLNSD29FDJ"
	}
}

***| Delete Specific  Technician | Delete |***

http://localhost:8080/api/technicians/3/


{
	"message": "Successfully Deleted"
}


# | Action | Method | URL
| ----------- | ----------- | ----------- |
| Create  Appointment | POST |

{
  "date_time": "2023-07-31T13:45:09",
  "reason": "Battery Change",
	"vin": "OAIDFOI22SHN",
  "customer": "Samuel Vapper",
	"technician": 27,
	"vip": 15
}

**Response**
{
	"appointments": {
		"id": 60,
		"vin": "OAIDFOI22SHN",
		"customer": "Samuel Vapper",
		"date_time": "2023-07-31T13:45:09",
		"reason": "Battery Change",
		"status": "created",
		"technician": {
			"id": 27,
			"first_name": "Michael",
			"last_name": "James",
			"employee_id": "AJH39S20AK"
		},
		"vip": true
	}
}


***Get List  Appointments | Get |***

http://localhost:8080/api/appointments/
{
	"appointments": [
		{
			"id": 38,
			"vin": "24S3048FDG",
			"customer": "David Vilo",
			"date_time": "2023-07-28T00:00:00+00:00",
			"reason": "Tire Change",
			"technician": {
				"id": 15,
				"first_name": "VIP",
				"last_name": " ONE",
				"employee_id": "DFHJSKJHDF"
			},
			"vip": false
		},
		{
			"id": 39,
			"vin": "DIOJDOSJ9282",
			"customer": "Sami Dave",
			"date_time": "2023-07-29T00:00:00+00:00",
			"reason": "Tire Change",
			"technician": {
				"id": 12,
				"first_name": "Tweek ",
				"last_name": " Taki",
				"employee_id": "DKS23DJ52"
			},
			"vip": false
		},


| Get Specific  Appointments | Get |
http://localhost:8080/api/appointments/46/
{
	"appointment": {
		"id": 46,
		"vin": "SDKGDJGNE309",
		"customer": "Daniel K",
		"date_time": "2023-07-28T17:50:00+00:00",
		"reason": "Tire Change",
		"status": "created",
		"technician": {
			"id": 22,
			"first_name": "Elite",
			"last_name": "Care",
			"employee_id": "AJDSDJOSJ"
		},
		"vip": false
	}
}


***Delete Specific  Appointments | Delete |***

http://localhost:8080/api/appointments/43/
{
	"message": "Successfully Deleted"
}


***Update Appointments to Cancel | PUT |***
http://localhost:8080/api/appointments/1/cancel/

{
	"message": "Appointment Canceled"
}


| Update Appointments to Finish | PUT |

http://localhost:8080/api/appointments/3/finish/

{
	"message": "Appointment Finished"
}


# | Action | Method | URL | Automobile
| ----------- | ----------- | ----------- |
| Create  | POST |


***Create AutomobileVO | POST |***

http://localhost:8080/api/automobiles/


{
	"vin": "OAIDFOI22SHN",
	"sold": "True"

}

**Response**
{
	"Automobile": {
		"id": 15,
		"vin": "OAIDFOI22SHN",
		"sold": "True"
	}
}


***List AutomobileVO  | PUT |***


http://localhost:8080/api/automobiles/


	{
			"id": 12,
			"vin": "SDKJ238NSDHF",
			"sold": true
		},
		{
			"id": 4,
			"vin": "1C3CC5FB2AN120174",
			"sold": false
		},
		{
			"id": 5,
			"vin": "ADJHF3872987DBD",
			"sold": false
		},


******Git Best Practice Steps*********
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
Delete Specific Customer | DELETE | http://localhost:8090/api/sales/<int:id>

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
