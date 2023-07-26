function ListAutomobiles({automobiles, sales}){

    const getSoldStatuses = (automobiles, sales) =>{
        const updateAutomobiles = automobiles.map(automobile => {
            const soldStatus = sales.some(sale => sale.auto_mobile.vin === automobile.vin);
            return {...automobile, sold:soldStatus}
        });
        return updateAutomobiles;
    }


    const updatedAutomobiles = getSoldStatuses(automobiles,sales);





    return(

        <>
    <h1>Automobiles</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Color</th>
          <th>Year</th>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        {updatedAutomobiles.map(automobile => {
          return (
            <tr key={automobile.id}>
              <td>{ automobile.vin }</td>
              <td>{ automobile.color }</td>
              <td>{ automobile.year }</td>
              <td>{ automobile.model.name }</td>
              <td>{ automobile.model.manufacturer.name }</td>
              <td>{ automobile.sold ? "Yes":"No"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
    );
}

export default ListAutomobiles;
