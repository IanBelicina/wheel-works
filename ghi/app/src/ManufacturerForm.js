import React, { useState, useEffect } from 'react';

function ManufacturerForm({ getManufacturers }){

    const [ name, setName ] = useState('');

    function handleNameChange(event){
        const { value } = event.target;
        setName(value);
    }

    async function handleSubmit(event){
        event.preventDefault();

        const data = {};
        data.name = name;

        const url = "http://localhost:8100/api/manufacturers/"
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newManufacturer = await response.json();

            setName('');
            getManufacturers();
        }


    }

    return(
        // <p> this is a manufacturer form</p>
    <div className="my-5 container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="create-customer-form">
                <h1 className="card-title">Create a manufacturer!</h1>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={name} onChange={handleNameChange} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                <button className="btn btn-lg btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}


export default ManufacturerForm;
