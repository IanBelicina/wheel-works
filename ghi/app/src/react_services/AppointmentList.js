import React, {useState, useEffect} from 'react'
import './Style.css'

function AppointmentList ({selectTime}) {
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




// ################## INVENTORY VIP #############

const [inventory, setInventory] = useState([]); // Store the inventory data

const fetchInventory = async () => {
  const url = "http://localhost:8080/api/inventory"; // Replace with your actual API endpoint

  let response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    setInventory(data); // Set the inventory data
  } else {
    console.log("ERROR While Fetching Inventory");
  }
};





    useEffect(() => {
        appointmentsData()
        fetchInventory();

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





// ############################### Feature 1 VIP #########################












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

const isVIP = inventory.includes(appointment.vin) ? 'Yes' : 'No'; // Check if VIN exists in inventory


            const appointmentDate = new Date(appointment.date_time);
            const time = appointmentDate.toLocaleTimeString();
            return(
                <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{isVIP}</td>


                    <td>{appointment.customer}</td>
                     <td>{new Date(appointment.date_time).toLocaleDateString('en-US')}</td>
                     <td>{time} </td>
                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                    <td>{appointment.reason}</td>
                    <td>{selectTime}</td>
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

























// const VINInInventory = async (vin) =>{

//     const automobileUrl = "http://localhost:8100/api/automobiles/"
//     const response = await fetch(automobileUrl)
//     if(response.ok){
//         const vinData = await response.json()



//     // Check if the VIN exists in the list of automobiles
//     const isVINInInventory = automobiles.some((car) => car.vin === vin);

//     if (isVINInInventory) {
//       console.log("Yes");
//       return "Yes";
//     } else {
//       console.log("No");
//       return "No";
//     }
//   } else {
//     console.log("Error: Unable to fetch automobile data");
//     return "Error";
//   }

// }










 {/* <td>{appointment.status}</td> */}

                    {/* <td> */}
                  {/* {appointment.status} */}
                  {/* <button onClick={() => handleButtonClick(appointment.id, 'cancel')}>Cancel</button>
                  <button onClick={() => handleButtonClick(appointment.id, 'finish')}>Finish</button> */}
                {/* </td> */}
