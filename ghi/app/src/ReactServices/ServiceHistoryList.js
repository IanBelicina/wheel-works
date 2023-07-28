import React, {useState, useEffect} from 'react'


const ServiceHistoryList = () => {

  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const [searchedAppointments, setSearchedAppointments] = useState([]);

  async function fetchAppointments() {
    const url = "http://localhost:8080/api/appointments/history/"
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointmentHistory(data.appointments);
    } else {
      console.log("Error");
    }
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleSearch = () => {
    const filtered = appointmentHistory.filter((appointment) =>
      appointment.vin.toLowerCase() === searchBar.toLowerCase()
    );
    setSearchedAppointments(filtered);
  };


  const handleSearchChange = (event) =>{
    let value = event.target.value
    setSearchBar(value)

  }

  return (
    <div className="container">
      <div className="row col-md-12">
        <div className="col-md-12 offset-md mt-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control"  placeholder="Enter VIN..." value={searchBar} onChange={handleSearchChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
          <h2>Service History</h2>
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {(searchBar.trim() === '' ? appointmentHistory : searchedAppointments).map((appointment) => {
                  const [date, time] = appointment.date_time.split("T");
                  const [time_p1] = time.split("+");
              return (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip ? 'Yes' : 'No'}</td>
                  <td>{appointment.customer}</td>
                  <td>{new Date(date).toLocaleDateString('en-US')}</td>
                  <td>{time_p1}</td>
                  <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.status}</td>
                </tr>

              )})}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ServiceHistoryList;
