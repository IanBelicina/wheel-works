import React, {useState, useEffect} from 'react'
import './Style.css'

function AppointmentList () {
const [appointmentList, setAppointments] = useState()


    const appointmentsData = async( ) =>{
       const  url = "http://localhost:8080/api/appointments/"
       let response = await fetch(url)
       if(response.ok){
           const data = await response.json()
           console.log(data.appointments)
           setAppointments(data.appointments)
       }else{
           console.log("ERROR While Fetching")
       }
    }

    useEffect(() => {
        appointmentsData()

      }, []);

if(appointmentList === undefined){
    return null
}


//################################### CANCEL AND FINISH BUTTON ##############################

const cancelAppointment = async (id) => {
  const url = `http://localhost:8080/api/appointments/${id}/cancel/`;

  try {
    const response = await fetch(url, { method: 'PUT' });

    if (response.ok) {
      // Update the status of the appointment in the local state to 'cancel'
      const updatedAppointments = appointmentList.map(app =>
        app.id === id ? {...app, status: 'cancel'} : app
      );

      // Filter out the canceled appointment from the local state
      setAppointments(updatedAppointments.filter(appointment => appointment.id !== id));
    } else {
      console.error('Error while canceling', response.status);
    }
  } catch (err) {
    console.error("ERROR while canceling", err);
  }
};

const finishAppointment = async (id) => {
  const url = `http://localhost:8080/api/appointments/${id}/finish/`;

  try {
    const response = await fetch(url, { method: 'PUT' });

    if (response.ok) {
      // Update the status of the appointment in the local state to 'finish'
      const updatedAppointments = appointmentList.map(app =>
        app.id === id ? {...app, status: 'finish'} : app
      );

      // Filter out the finished appointment from the local state
      setAppointments(updatedAppointments.filter(app => app.id !== id));
    } else {
      console.error('Error while finishing', response.status);
    }
  } catch (err) {
    console.error("ERROR while finishing", err);
  }
};


    return (
        <div className="container">
              <h1>Service Appointments</h1>
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
       {appointmentList.map(appointment =>{
         console.log(appointment.date_time)

  const dateTime = new Date(appointment.date_time);
    const date = dateTime.toLocaleDateString('en-US');
    const time = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
            return(
                <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vip ? 'Yes': 'No'}</td>
                    <td>{appointment.customer}</td>
                     <td>{date}</td>
                     <td>{time}</td>
                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                    <td>{appointment.reason}</td>
                    <td>
                  <button className="btn btn-danger cancel"  onClick={() => cancelAppointment(appointment.id)}>Cancel </button>
                  <button className="btn btn-success finish" onClick={() => finishAppointment(appointment.id)}>Finish</button>
                </td>
                </tr>
            )
        })}
</tbody>
</table>
</div>
 )
}

export default AppointmentList;