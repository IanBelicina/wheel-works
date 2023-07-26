import React, { useState, useEffect } from 'react';

function SaleForm({automobileVOs, sales, getSales, customers,salesPeople}){



    const unsoldAutomobiles = automobileVOs.filter((automobile) => {
        return !sales.some((sale) => sale.auto_mobile.vin === automobile.vin);
      });


    const [ automobileVo, setAutomobileVo] = useState('');
    const [ salesPerson, setSalesPerson] = useState('');
    const [ customer, setCustomer ] = useState('');
    const [ price, setPrice ] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const data = {};
        data.auto_mobile = automobileVo;
        data.sales_person = salesPerson;
        data.customer = customer;
        data.price = price;


        const url = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newSale = await response.json();


            setAutomobileVo('');
            setSalesPerson('');
            setCustomer('');
            setPrice('');

            getSales();
        }

    }

    function handleAutomobileVoChange(event){
        const {value} = event.target;
        setAutomobileVo(value);
    }

    function handleSalesPersonChange(event){
        const {value} = event.target;
        setSalesPerson(value);
    }

    function handleCustomerChange(event){
        const {value} = event.target;
        setCustomer(value);
    }

    function handlePriceChange(event){
        const {value} = event.target;
        setPrice(value);
    }




    return(

    <div className="my-5 container">
        <div className="row">

          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit} id="create-sale-form">

                  <h1 className="card-title">Add a Sale! </h1>



                  <div className="mb-3">
                    <select value={automobileVo} onChange={handleAutomobileVoChange} name="automobileVO" id="automobileVO" className='form-select' required>
                      <option value="">Choose Automobile VIN</option>
                      {unsoldAutomobiles.map(automobile => {
                        return (
                          <option key={automobile.id} value={automobile.id}>{automobile.vin}</option>
                        )
                      })}
                    </select>
                  </div>

                  <div className="mb-3">
                    <select value={salesPerson} onChange={handleSalesPersonChange} name="salesPerson" id="salesPerson" className='form-select' required>
                      <option value="">Sales Person</option>
                      {salesPeople.map(salesPerson => {
                        return (
                          <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.employee_id}</option>
                        )
                      })}
                    </select>
                  </div>


                  <div className="mb-3">
                    <select value={customer} onChange={handleCustomerChange} name="customer" id="customer" className='form-select' required>
                      <option value="">Customer</option>
                      {customers.map(customer => {
                        return (
                          <option key={customer.id} value={customer.id}>{customer.first_name} {customer.last_name}</option>
                        )
                      })}
                    </select>
                  </div>


                    <div className="col">
                      <div className="form-floating mb-3">
                        <input value={price} onChange={handlePriceChange} required placeholder="price" type="text" id="price" name="price" className="form-control" />
                        <label htmlFor="price">Price</label>
                      </div>
                    </div>

                  <button className="btn btn-lg btn-primary">Add Sale</button>
                </form>


              </div>
            </div>
          </div>

        </div>
      </div>
    );
}

export default SaleForm;
