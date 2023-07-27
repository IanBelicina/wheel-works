import React, {useState, useEffect} from 'react'



function ServiceHistoryList({ selectTime }){

  const [appointmentHistory, setAppointmentHistory] = useState()
  const [searchTerm, setSearchTerm] = useState('');







//1. search

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchTerm);
  };


// 2. appointment list

    async function servicesList(){

       const  url =  "http://localhost:8080/api/appointments/history/"
       const response = await fetch(url)
       if(response.ok){
           const data = await response.json()
           console.log(data)


           setAppointmentHistory(data.appointments)






       }else{
           console.log("Error")
       }
    }

    useEffect(( ) =>{
        servicesList()

    }, [])
if(appointmentHistory === undefined){
    return null
}




    return (
       <div className="container">
         <h1>Service History</h1>


         <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search by VIN ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="input-group-append">
              <button style={{height: '2.5rem'}} className="btn btn-secondary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div></div>

  <table className="table">
         <thead>
           <tr>
           <th>Vin</th>
             <th>Is VIP?</th>
             <th>Customer</th>
             <th>Date</th>
             <th>Time</th>
             <th>Technician</th>
             <th>Reason</th>
             <th>Status</th>
           </tr>

         </thead>

         <tbody>

      {appointmentHistory.map(appointment =>{


            return (

             <tr key={appointment.id}>
             <td>{appointment.vin}</td>
             <td>'{'Yes' & 'No'}</td>
             <td>{appointment.customer} </td>
             <td>{new Date(appointment.date_time).toLocaleDateString('en-US')}</td>
                <td>{selectTime}</td>

              <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
              <td>{appointment.reason}</td>
             <td>{appointment.status}</td>
             </tr>
             )
        })}
         </tbody>
         </table>
       </div>
    )
}


export default ServiceHistoryList;
