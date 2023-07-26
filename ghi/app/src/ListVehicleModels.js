function ListVehicleModels({ models }){

    return(

        <>
        <h1>Vehicle Models</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {models.map(model => {
              return (
                <tr key={model.id}>
                  <td>{ model.name }</td>
                  <td>{ model.manufacturer.name }</td>
                  <td>
                    <img src={ model.picture_url } style={{ maxWidth : '200px', maxHeight:'200px'}}/>
                    </td>

                </tr>
              );
            })}
          </tbody>
        </table>
        </>

    );
}


export default ListVehicleModels;
