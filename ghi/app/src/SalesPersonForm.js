import React, { useState, useEffect } from 'react';

function SalesPersonForm({ getSalesPeople }){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');


    async function handleSubmit(event){
        event.preventDefault();

        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;


        const url = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newSalesPerson = await response.json();

            setFirstName('');
            setLastName('');
            setEmployeeId('');

            getSalesPeople();
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

    function handleEmployeeIdChange(event){
        const { value } = event.target;
        setEmployeeId(value);
    }

    return(
    <div className="my-5 container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="create-salesperson-form">
                <h1 className="card-title">Add a sales person!</h1>
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
                      <input value={employeeId} onChange={handleEmployeeIdChange} required placeholder="Your EmployeeId" type="text" id="EmployeeId" name="EmployeeIde" className="form-control" />
                      <label htmlFor="EmployeeId">Employee Id</label>
                    </div>
                  </div>

                <button className="btn btn-lg btn-primary">Add Sales Person</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default SalesPersonForm;
