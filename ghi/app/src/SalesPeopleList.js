function SalesPeopleList({salesPeople}){
    // console.log(salesPeople, "in salespeoplelist function");


    return(

    <>
    <h1>Sales People</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {salesPeople.map(salesPerson => {
          return (
            <tr key={salesPerson.id}>
              <td>{ salesPerson.employee_id }</td>
              <td>{ salesPerson.first_name }</td>
              <td>{ salesPerson.last_name }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    );
}


export default SalesPeopleList
