import React, { useState, useEffect } from 'react';

function VehicleModelForm({ getModels, manufacturers}){


    const [ modelName, setModelName ] = useState('');
    const [ pictureUrl, setPictureUrl ] = useState('');
    const [ manufacturer, setManufacturer ] =useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const data = {};
        data.name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;

        console.log(data, "this is data");
        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newModel = await response.json();

            setModelName('');
            setPictureUrl('');
            setManufacturer('');

            getModels();
        }


    }

    function handleModelNameChange(event){
        const {value} = event.target;
        setModelName(value);

    }

    function handlePictureUrlChange(event){
        const {value} = event.target;
        setPictureUrl(value);
    }

    function handleManufacturerChange(event){
        const {value} = event.target;
        setManufacturer(value);
    }

    return(

    <div className="my-5 container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="create-vehicle-form">
                <h1 className="card-title">Create a vehicle model!</h1>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={modelName} onChange={handleModelNameChange} required placeholder="Name" type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={pictureUrl} onChange={handlePictureUrlChange} required placeholder="Url" type="text" id="Url" name="Url" className="form-control" />
                      <label htmlFor="name">Picture Url</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <select value={manufacturer} onChange={handleManufacturerChange} name="manufacturer" id="manufacturer" className='form-select' required>
                      <option value="">Choose manufacturer</option>
                      {manufacturers.map(manufacturer => {
                        return (
                          <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                        )
                      })}
                    </select>
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

export default VehicleModelForm;
