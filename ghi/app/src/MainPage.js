import { Link } from 'react-router-dom';
function MainPage() {
  return (
    <>
    <div className="body-color">
    <div className="px-4 py-5 text-center"  >
      <h1 className="display-5 fw-bold"  >WheelWorks</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>

    <div className="row">
        <div className="col-md-6">
          <Link to="sales" className="card-link remove-decoration ">
            <div className="card">
              <div className="card-body text-center">
                <h2 className="card-title">Sales</h2>
                <img src="https://media.istockphoto.com/id/824187230/video/seller-gives-a-keys-to-a-buyer-in-car-showroom.jpg?s=640x640&k=20&c=XBT7xGt-dJUThSLLKY4UJSHxjkkP96rfM7ViCOwFbUc="
                alt="Sales Image"
                className="card-img-top"
                style={{ height: '400px', width: '500px', objectFit: 'cover' }} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="appointmentList" className="card-link remove-decoration">
            <div className="card">
              <div className="card-body text-center">
                <h2 className="card-title">Appointments</h2>
                <img src="https://www.carcility.com/blog/wp-content/uploads/2022/02/Your-Car-Service-Checklist.jpg"
                alt="Appointment Image"
                className="card-img-top"
                style={{ height: '400px', width: '500px', objectFit: 'cover' }} />
              </div>
            </div>
          </Link>
        </div>
      </div>


    </div>




    </>





  );
}

export default MainPage;
