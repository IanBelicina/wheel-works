import React, { useState, useEffect } from 'react';

function AutomobileForm({ models, getAutomobiles }){

    const [ color, setColor ] = useState('');
    const [ year, setYear] = useState('');
    const [ vin, setVin] = useState('');
    const [ model, setModel] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = model;

        const url = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newAutomobile = await response.json();

            setColor('');
            setYear('');
            setVin('');
            setModel('');

            getAutomobiles();
        }

    }

    function handleColorChange(event){
        const {value} = event.target;
        setColor(value);
    }

    function handleYearChange(event){
        const {value} = event.target;
        setYear(value);
    }

    function handleVinChange(event){
        const {value} = event.target;
        setVin(value);
    }

    function handleModelChange(event){
        const {value} = event.target;
        setModel(value);
    }


    return(

    <div className="my-5 container">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} id="create-automobile-form">
                <h1 className="card-title">Create an automobile!</h1>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={color} onChange={handleColorChange} required placeholder="Color" type="text" id="color" name="color" className="form-control" />
                      <label htmlFor="color">Color</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={year} onChange={handleYearChange} required placeholder="Year" type="text" id="year" name="year" className="form-control" />
                      <label htmlFor="year">Year</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={vin} onChange={handleVinChange} required placeholder="vin" type="text" id="vin" name="vin" className="form-control" />
                      <label htmlFor="vin">Vin</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <select value={model} onChange={handleModelChange} name="model" id="model" className='form-select' required>
                      <option value="">Choose Model</option>
                      {models.map(model => {
                        return (
                          <option key={model.id} value={model.id}>{model.name}</option>
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


export default AutomobileForm;
