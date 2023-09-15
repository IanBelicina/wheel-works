import React, {useState} from 'react'

function TechnicianForm(){
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [employeeId, setEmployeeId] = useState('')


    async function formSubmit(event){

        const data = {}
            data.first_name = firstName
            data.last_name = lastName
            data.employee_id = employeeId

        const url = "http://localhost:8080/api/technicians/"
        const fetchData = {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await fetch(url, fetchData)
        if(response.ok){
            setFirstName('')
            setLastName('')
            setEmployeeId('')
        }
       };


    function handleFirstNameChange(event){
        let  value = event.target.value
        setFirstName(value)
    }
    function handleLastNameChange(event){
        let value = event.target.value
        setLastName(value)
    }
    function handleEmployeeId(event){
        let value = event.target.value
        setEmployeeId(value)
    }

    return (
            <div className="row g-3">
                <div className="offset-3 col-6">
                    <div className=" card-body shadow p-4 mt-4">
                        <h1 className='card-title'>Add a Technician</h1>
                        <form onSubmit={formSubmit} id="create-technician-form" >
                            <div className="mb-4">
                            <label htmlFor="first_name" className="form-label"></label>
                            <input onChange={handleFirstNameChange} placeholder="First name..." className="form-control" required  name="first_name" id="first_name" />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="last_name" className="form-label"></label>
                            <input onChange={handleLastNameChange} placeholder="Last name..." className="form-control" required  name="last_name" id="last_name" />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="employee_id" className="form-label"></label>
                            <input onChange={handleEmployeeId} placeholder="Employee ID..." className="form-control"  required  name="employee_id" id="employee_id" />
                            </div>
                            <button className="btn-primary form-control">Create</button>
                        </form>
                    </div>
                </div>
            </div>
     )
}
export default TechnicianForm;
