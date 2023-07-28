import React, {useState, useEffect} from 'react'
import '../styles.css'

function AppointmentList () {
const [appointmentList, setAppointmentList] = useState([]);

    const appointmentsData = async() =>{
       const  url = "http://localhost:8080/api/appointments/"
       let response = await fetch(url)
       if(response.ok){
           const data = await response.json()
           setAppointmentList(data.appointments)
       }else{
           console.log("ERROR While Fetching")
       }
    };

 useEffect(() => {
      appointmentsData()

  }, []);

if(appointmentList === undefined){
    return null
};


const cancelAppointment = async (id) => {
  const url = `http://localhost:8080/api/appointments/${id}/cancel/`;

  try {
    const response = await fetch(url, { method: 'PUT' });
    if (response.ok) {
      const updatedAppointments = appointmentList.map(appointment =>{
        if(appointment.id === id){
          return {...appointment, status: 'cancel'}
        }else{
          return appointment
           }
        });
        setAppointmentList(updatedAppointments.filter(appointment => appointment.id !== id));
    } else {
      console.error('Error response', response.status);
    }
  } catch (error) {
    console.error("ERROR while canceling", error);
  }
};

const finishAppointment = async (id) => {
  const url = `http://localhost:8080/api/appointments/${id}/finish/`;
  try {
    const response = await fetch(url, { method: 'PUT' });

    if (response.ok) {
      const updatedAppointments = appointmentList.map(appointment => {
        if(appointment.id == id){
          return {...appointment, status: 'finish'}
        }else{
          return  appointment
        }
    });
    setAppointmentList(updatedAppointments.filter(appointment => appointment.id !== id));
    } else {
      console.error('Error while  finishing', response.status);
    }
  } catch (error) {
    console.error("ERROR while updating finish", error);
  }
};
  return (
    <div className="container">
              <h1>Service Appointments</h1>
      <table className="table table-responsive table-striped">
          <thead>
                    <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    </tr>
            </thead>
            <tbody>
                 {appointmentList.map(appointment =>{
                    const [date, time] = appointment.date_time.split("T");
                    const [time_p1] = time.split("+");
              return(
                <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip ? 'Yes': 'No'}</td>
                    <td>{appointment.customer}</td>
                    <td>{new Date(date).toLocaleDateString('en-US')}</td>
                    <td>{time_p1}</td>
                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                    <td>{appointment.reason}</td>
                    <td>
                      <button className="btn btn-danger cancel"  onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                      <button className="btn btn-success finish" onClick={() => finishAppointment(appointment.id)}>Finish</button>
                   </td>
                </tr>
             )
        })}
        </tbody>
   </table>
</div>
 )
};
export default AppointmentList;
