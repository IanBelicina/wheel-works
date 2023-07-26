import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPeopleList from './SalesPeopleList';
import { useEffect, useState } from 'react';
import SalesPersonForm from './SalesPersonForm';
import CustomersList from './ListCustomers';
import CustomerForm from './CustomerForm';
import SalesList from './SalesList';
import SaleForm from './SaleForm';
import ListManufacturers from './ListManufacturers';
import ManufacturerForm from './ManufacturerForm';
import ListVehicleModels from './ListVehicleModels';
import VehicleModelForm from './VehicleModelForm';
import ListAutomobiles from './ListAutoMobiles';

function App() {

  const [ salesPeople, setSalesPeople ] = useState([]);
  const [ customers, setCustomers ] = useState([]);
  const [ sales, setSales ] = useState([]);
  const [ automobileVOs, setAutomobileVO ] = useState([]);
  const [ manufacturers, setManufacturers] = useState([]);
  const [ models, setModels ] = useState([]);
  const [ automobiles, setAutomobiles ] = useState([]);

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

  async function getSales(){
    const response = await fetch("http://localhost:8090/api/sales/");
    if (response.ok){
      const data = await response.json();
      // console.log(data,"this is data");
      // console.log(data.sales, "this is data.sales");
      setSales(data.sales);
      // console.log(sales, "this is sales");
    }
    else{
      console.log("An error occurred fetching sales");
    }
  }

  async function getAutomobileVO(){
    const response = await fetch("http://localhost:8090/api/automobiles/");
    if (response.ok){
      const data = await response.json();
      // console.log(data,"this is data");
      // console.log(data.auto_mobile, "this is data.automobile");
      setAutomobileVO(data.auto_mobile);
    }
    else{
      console.log("An error occurred fetching automobilevos");
    }
  }

  async function getManufacturers(){
    const response = await fetch("http://localhost:8100/api/manufacturers/");
    if (response.ok){
      const data = await response.json();
      // console.log(data,"this is data");
      // console.log(data.manufacturers, "this is data.manufacturers");
      setManufacturers(data.manufacturers);

    }
    else{
      console.log("An error occurred fetching automobilevos");
    }

  }

  async function getModels(){
    const response = await fetch("http://localhost:8100/api/models/");
    if (response.ok){
      const data = await response.json();
      // console.log(data,"this is data");
      // console.log(data.models, "this is data.models");
      setModels(data.models);

    }
    else{
      console.log("An error occurred fetching automobilevos");
    }
  }

  async function getAutomobiles(){
    const response = await fetch("	http://localhost:8100/api/automobiles/");
    if (response.ok){
      const data = await response.json();
      // console.log(data, "this is data");
      // console.log(data.autos, "this is data.autos");
      setAutomobiles(data.autos);
    }
  }



  useEffect(() => {
    getSalesPeople();
    getCustomers();
    getSales();
    getAutomobileVO();
    getManufacturers();
    getModels();
    getAutomobiles();
  },[]);

  if (salesPeople === undefined){
    return null;
  }

  if (customers === undefined){
    return null;
  }

  if (sales === undefined){
    return null;
  }

  if (automobileVOs === undefined){
    return null;
  }

  if (manufacturers === undefined){
    return null;
  }

  if (models === undefined){
    return null;
  }

  if (automobiles === undefined){
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
          <Route path="sales" element={<SalesList sales={sales} salesPeople={salesPeople}/>}/>
          <Route path="saleForm" element={<SaleForm salesPeople={salesPeople} getSales={getSales} automobileVOs={automobileVOs} sales={sales} customers={customers}/>}/>
          <Route path="manufacturers" element={<ListManufacturers manufacturers={manufacturers}/>}/>
          <Route path="manufacturerForm" element={<ManufacturerForm getManufacturers={getManufacturers}/>}/>
          <Route path="models" element={<ListVehicleModels models={models}/>}/>
          <Route path="modelForm" element={<VehicleModelForm getModels={getModels} manufacturers={manufacturers}/>}/>
          <Route path="automobiles" element={<ListAutomobiles automobiles={automobiles} sales={sales}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
