import React, { useState, useEffect } from 'react';


function SalesList({ sales, salesPeople }){
    // console.log(sales, "this is sales")

    const [ salesPerson, setSalesPerson ] = useState('');
    function handleSalesPersonChange(event){
        const {value} = event.target;
        setSalesPerson(value);
    }

    // console.log(salesPerson);
    // console.log(sales)
    let salesPersonSales = [];
    if (salesPerson){
        salesPersonSales = sales.filter(sale => sale.sales_person.id == salesPerson);
    }
    else{
        salesPersonSales = sales;
    }
    // console.log(salesPersonSales);


    return(
    <>
    <h1>Sales</h1>
    <div className="mb-3">
        <select value={salesPerson} onChange={handleSalesPersonChange} name="salesPerson" id="salesPerson" className='form-select' required>
            <option value="">Choose Sales Person</option>
            {salesPeople.map(salesPerson => {
            return (
                <option key={salesPerson.id} value={salesPerson.id}>{salesPerson.first_name} { salesPerson.last_name }</option>
            )
            })}
        </select>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Person Employee Id</th>
          <th>Sales Person Name</th>
          <th>Customer</th>
          <th>Vin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {salesPersonSales.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.sales_person["employee_id"] }</td>
              <td>{ sale.sales_person["first_name"] } { sale.sales_person["last_name"] }</td>
              <td>{ sale.customer["first_name"] } { sale.customer["last_name"] }</td>
              <td>{ sale.auto_mobile["vin"] }</td>
              <td>{ sale.price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    )
}

export default SalesList;
