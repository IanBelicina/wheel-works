import React, { useState, useEffect } from 'react'

function TechnicianList(){
   const  [technicianList, setTechnicianList] = useState([])

    async function loadTechnician(request){
        const response = await fetch("http://localhost:8080/api/technicians/")
        if(response.ok){
           const data = await  response.json()
           setTechnicianList(data.technician)

        }
    }
    useEffect(() => {
        loadTechnician()
    }, [])


    if (technicianList === undefined){
        return null;
      }

    return(
      <div className="container">
         <table className="table" >
             <thead>
            <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
                {technicianList.map(technician => {
                return(
                <tr key={technician.id}>
                <td>{technician.employee_id}</td>
                <td>{technician.first_name}</td>
                <td>{technician.last_name}</td>
                </tr>
                )
             })}
            </tbody>
        </table>
</div>
    )
}
export  default TechnicianList;
