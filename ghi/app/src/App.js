import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPeopleList from './SalesPeopleList';
import { useEffect, useState } from 'react';
import SalesPersonForm from './SalesPersonForm';
import CustomersList from './ListCustomers';
import CustomerForm from './CustomerForm';

function App() {

  const [ salesPeople, setSalesPeople ] = useState([]);
  const [ customers, setCustomers ] = useState([]);

  async function getSalesPeople(){
    const response = await fetch("http://localhost:8090/api/salespeople/");
    if (response.ok){
      const data = await response.json();
      // console.log(data, "This is data")
      // console.log(data.sales_person, "this is data.sales_person")
      setSalesPeople(data.sales_person);
      // console.log(salesPeople, "this is sales people set in app.js")

    }
    else{
      console.log("An error occurred fetching sales peoepl");
    }
  }

  async function getCustomers(){
    const response = await fetch("http://localhost:8090/api/customers/");
    if (response.ok){
      const data = await response.json();
      // console.log(data);
      setCustomers(data.customer);
      // console.log(customers, "this is customers");
    }
    else{
      console.log("An error occurred fetching customers");
    }
  }

  useEffect(() => {
    getSalesPeople();
    getCustomers();
  },[]);

  if (salesPeople === undefined){
    return null;
  }

  if (customers === undefined){
    return null;
  }


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salesPeople" element={<SalesPeopleList salesPeople={salesPeople}/>}/>
          <Route path="salesPersonForm" element={<SalesPersonForm getSalesPeople={getSalesPeople}/>}/>
          <Route path="customers" element={<CustomersList customers={customers}/>}/>
          <Route path="customerForm" element={<CustomerForm getCustomers={getCustomers}/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
