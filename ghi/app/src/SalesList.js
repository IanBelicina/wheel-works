function SalesList({ sales }){
    // console.log(sales, "this is sales")
    return(
        // <p>This is a sales list</p>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales Person Employee Id</th>
          <th>Sales Person Name</th>
          <th>Customer</th>
          <th>Vin</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.sales_person["employee_id"] }</td>
              <td>{ sale.sales_person["first_name"] } { sale.sales_person["last_name"] }</td>
              <td>{ sale.customer["first_name"] } { sale.customer["last_name"] }</td>
              <td>{ sale.auto_mobile["vin"] }</td>
              <td>{ sale.price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    )
}

export default SalesList;
