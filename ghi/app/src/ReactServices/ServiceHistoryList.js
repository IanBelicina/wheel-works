import React, {useState, useEffect} from 'react'


const ServiceHistoryList = () => {
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);

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
      appointment.vin.toLowerCase() === searchTerm.toLowerCase()
    );
    setFilteredAppointments(filtered);
  };

  return (
    <div className="container">
      <div className="row col-md-12">
        <div className="col-md-12 offset-md mt-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control"  placeholder="Enter VIN..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
          <h2>Service Appointments</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>VIN</th>
                <th>VIP Status</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician Name</th>
                <th>Reason for Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {(searchTerm.trim() === '' ? appointmentHistory : filteredAppointments).map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.vin}</td>
                  <td>{appointment.vip ? 'Yes' : 'No'}</td>
                  <td>{appointment.customer}</td>
                  <td>{new Date(appointment.date_time).toLocaleDateString('en-US')}</td>
                  <td>{new Date(appointment.date_time).toLocaleTimeString('en-US')}</td>
                  <td>{`${appointment.technician.first_name} ${appointment.technician.last_name}`}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    </div>
  );
};

export default ServiceHistoryList;
