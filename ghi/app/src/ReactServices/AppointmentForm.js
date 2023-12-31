import React, {useState, useEffect} from 'react'


function AppointmentForm(){

    const [technicians, setTechnicians] = useState([]);
    const [technician, setSelectedTechnician] = useState('');
    const [automobileVin, setAutomobileVin] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [customer, setCustomer] = useState('');
    const [stateReason, setStateReason] = useState('');
    const [selectTime, setSelectTime] = useState('');


 const selectTechnician = async () => {
  const url = "http://localhost:8080/api/technicians/"
   const response = await fetch(url)
   if (response.ok){
       const data = await response.json();
       setTechnicians(data.technician)
   }else{
    console.log("ERROR While Fetching")

   }
 };


    async function formSubmit(event){
        event.preventDefault()
        const data = {}
        data.technician = technician
        data.vin = automobileVin
        data.date_time = dateTime + 'T' + selectTime + ':00'
        data.customer = customer
        data.reason = stateReason

       let  url = "http://localhost:8080/api/appointments/"
       const fetchData = {
        method:'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
       };

       const response = await fetch(url, fetchData)
       if (response.ok){
           setAutomobileVin('')
           setCustomer('')
           setDateTime('')
           setStateReason('')
           setSelectTime('')
           setTechnicians([])
       }
    };

   const  handleVinChange = (event) => {
       let value = event.target.value
        setAutomobileVin(value)

    };
    const handleDateChange = (event) => {
       let value = event.target.value
        setDateTime(value)
    };
    const handleCustomerChange = (event) => {
       let value = event.target.value
        setCustomer(value)
    };
    const handleTechnician = (event) => {
       let value = event.target.value
       setSelectedTechnician(value)
    };
    const handleReasonChange = (event) => {
      let  value = event.target.value
        setStateReason(value)
    };
    const handleTimeChange = (event) => {
        let  value = event.target.value
          setSelectTime(value)
      };

    useEffect(() =>{
        selectTechnician()
    }, [])

    if(technicians === undefined){
        return null
    };

    return(
        <div className="row">
            <div className="offset-3 col">
                <div className=" shadow mt-4 p-4">
                    <h1>Create a Service Appointment </h1>
                    <form onSubmit={formSubmit}>

                         <div className="mb-4">
                            <label className="form-label" htmlFor="vin">Automobile VIN</label>
                            <input value={automobileVin} onChange={handleVinChange} required  id="vin" name="vin" className="form-control" type="text"></input>
                          </div>

                          <div className="mb-4">
                             <label className="form-label" htmlFor="customer">Customer</label>
                             <input value={customer} onChange={handleCustomerChange} required  id="customer" name="customer" className="form-control"></input>
                          </div>

                           <div className="mb-4">
                               <label className="form-label" htmlFor="date_time">Date</label>
                                <input value={dateTime} onChange={handleDateChange} required  id="date_time" name="date_time" className="form-control" type="date"></input>
                           </div>

                            <div className="mb-4">
                               <label className="form-label" htmlFor="date_time">Time</label>
                                 <input value={selectTime}  onChange={handleTimeChange} required  id="date_time" name="date_time" className="form-control" type="time"></input>
                            </div>

                            <div>
                              <label className="form-label" htmlFor="technician">Technician</label>
                              <select onChange={handleTechnician} value={technician}  className="form-select" id="technician" name="technician">
                                    <option value="">Choose a technician</option>
                                     {technicians.map(technician =>{
                                        return (
                                           <option key={technician.id} value={technician.id}>{technician.first_name} {technician.last_name}</option>
                                        )})}
                                  </select>
                               </div>

                            <div className="mb-4">
                                 <label className="form-label" htmlFor="reason">Reason</label>
                                <input value={stateReason} onChange={handleReasonChange} required  id="reason" name="reason" className="form-control" ></input>
                             </div>
                        <button type="submit" className="btn-primary form-control" >Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AppointmentForm;
