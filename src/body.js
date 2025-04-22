/* eslint-disable jsx-a11y/anchor-is-valid */
import './body.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import a1 from './IMAGES/The_56_Prettiest_College_Campuses_in_America-transformed.jpeg';
import a2 from './IMAGES/student.jpg';
import a3 from './IMAGES/Patrick Henry Community College will hold virtual graduation ceremony.jpg';
import a4 from './IMAGES/Sage University, Indore_ Courses, Fees, Placements.jpg';

export default function Body(){
    return(
        <>
      <div className="container-fluid">
        <img 
          className="img-fluid" 
          src={a1} 
          alt="banner" 
        />
      </div>
      <div className="jumbotron">
        <h1 className="display-3">Find solutions to all your issues</h1>
        <p className="lead">That make your confidence increase.</p>
        <hr className="my-4" />
        <p>Explore our features and report any issues you encounter.</p>
        <div id="ff" style={{ display: 'flex', justifyContent: 'space-evenly' }}>            
          <Link to="/new"><a className="btn btn-warning btn-lg" role="button">Report Issue</a>
          </Link>
          <Link to="/detailed"><a className="btn btn-danger btn-lg" href="view_issue.html" role="button">Issue Status</a></Link>
        </div>
      </div>

      <div className="container feature">
        <div className="row">
          <div className="col-md-6">
            <img 
              src={a2} 
              alt="Student" 
              className="img-responsive" 
            />
          </div>
          <div className="col-md-6 my-auto">
            <h2 className="display-4">Issue Management</h2>
            <p>Manage issues across students with one platform so your students and staff quickly get the help they need. Making a collaborative environment in the college centralizes reporting of issues, allowing for quicker identification and resolution of problems by the relevant departments or staff. Facilitates clear and structured communication between students.</p>
          </div>
        </div>
      </div>

      <div className="container feature bg-light">
        <div className="row">
          <div className="col-md-6 my-auto">
            <h2 className="display-4">Make Issue Transparent</h2>
            <p>Track issues across the institution through an open, collaborative platform. Link issues across the college and other tools, and have the context you need to rapidly respond when incidents occur.</p>
          </div>
          <div className="col-md-6">
            <img 
              src={a3} 
              alt="College" 
              className="img-responsive" 
            />
          </div>
        </div>
      </div>

      <div className="container feature">
        <div className="row">
        <div className="col-md-6">
            <img 
              src={a4} 
              alt="Issue" 
              className="img-responsive" 
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-4">New Issue</h2>
            <p>By addressing issues promptly and effectively, the system can lead to higher satisfaction levels among students and staff, contributing to a more positive college environment.</p>
          </div>
          
        </div>
      </div>
    </>
    );
}