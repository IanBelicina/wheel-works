import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="salesPeople">Sales People</NavLink>
            </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="salesPersonForm">Add a Salesperson</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="customers">Customers</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="customerForm">Add a Customer</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="sales">Sales</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="saleForm">Add a Sale</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="manufacturers">Manufacturers</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="manufacturerForm">Create a Manufacturer</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="technicianForm">Create Technician</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="technicianList">Technician List</NavLink>
          </li>
          <li className="nac-item">
            <NavLink className="nav-link active" to="appointmentForm">Make Appointment</NavLink>
          </li>
          <li  className="nav-item">
            <NavLink className="nav-link active" to="appointmentList" >Appointment List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="serviceHistory">Service History</NavLink>
              <NavLink className="nav-link active" aria-current="page" to="models">Models</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="modelForm">Create a Model</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="automobiles">Automobiles</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="automobileForm">Create an Automobile</NavLink>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
