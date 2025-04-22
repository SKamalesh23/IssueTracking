import React from "react";
import { Link } from "react-router-dom";
import './styl.css';
import 'bootstrap/dist/css/bootstrap.css';
import s5 from './IMAGES/img2.jpg';

function Main() {
//   function Footer1() {
//     return (
//       <footer style={{position:'fixed',bottom:0,marginRight:"10px"}}>
//         <p>&copy; 2024 Engineering College. All rights reserved.</p>
//       </footer>
//     );
//   }
  return (
    <div className="int"><br/><br/><br/>
      {/* <Header/>  */}
      <main class="mt-5">
        <section>
          <h2>Welcome to the Engineering College Issue Tracking System</h2>
          <p>This system allows students, faculty, and staff to submit and track issues related to the college facilities, services, and academic matters.</p>
        </section>
        <section>
          <h3>Key Features</h3>
          <ul>
            <li>Submit new issues with detailed descriptions and attachments.</li>
            <li>Track the status of your submitted issues.</li>
            <li>View all reported issues and their resolutions.</li>
            <li>Receive notifications about issue updates.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Main;
