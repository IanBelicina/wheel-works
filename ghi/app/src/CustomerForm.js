import React, { useState, useEffect } from 'react';

function CustomerForm({ getCustomers }){


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    async function handSubmit(event){
        event.preventDefault();

        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address;
        data.phone_number = phoneNumber;

        const url = "http://localhost:8090/api/customers/"
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newCustomer = await response.json();

            setFirstName('');
            setLastName('');
            setAddress('');
            setPhoneNumber('');

            getCustomers();
        }

    }

    function handleFirstNameChange(event){
        const { value } = event.target;
        setFirstName(value);
    }

    function handleLastNameChange(event){
        const { value } = event.target;
        setLastName(value);
    }

    function handleAddressChange(event){
        const { value } = event.target;
        setAddress(value);
    }
    function handlePhoneNumberChange(event){
        const { value } = event.target;
        setPhoneNumber(value);
    }

    return(

    <div className="my-5 container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handSubmit} id="create-customer-form">
                <h1 className="card-title">Add a customer!</h1>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={firstName} onChange={handleFirstNameChange} required placeholder="First Name" type="text" id="First Name" name="First Name" className="form-control" />
                      <label htmlFor="First Name">First Name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={lastName} onChange={handleLastNameChange} required placeholder="Your Last Name" type="text" id="Last Name" name="Last Name" className="form-control" />
                      <label htmlFor="Last Name">Last Name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={address} onChange={handleAddressChange} required placeholder="Address" type="text" id="Address" name="Address" className="form-control" />
                      <label htmlFor="Address">Address</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={phoneNumber} onChange={handlePhoneNumberChange} required placeholder="Phone Number" type="text" id="Phone Number" name="Phone Number" className="form-control" />
                      <label htmlFor="Phone Number">Phone Number</label>
                    </div>
                  </div>

                <button className="btn btn-lg btn-primary">Add a Customer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}


export default CustomerForm;
