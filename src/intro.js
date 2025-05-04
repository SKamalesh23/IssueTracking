import React, { useEffect } from "react";
import './styl.css';
import 'bootstrap/dist/css/bootstrap.css';

function Main() {

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
