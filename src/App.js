import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import LoginForm from "./login";
import Front from "./intro";
import Header1 from "./header1";
import Footer1 from "./footer1";
import { Provider } from 'react-redux';
import store from "./store.js";
import SubmitIssueForm from "./SubmitIssueForm.js";
import AnotherPage from "./new.js";
import AdminDashboard from "./admin.js";
import AddUser from "./Adduser.js";
import Manage from "./manage_issue.js";
import IssueForm from "./issueForm.js";
import IssueTable from "./details.js";
import UserList from "./UserList.js";
import Header2 from "./header2.js";
import AboutUs from "./about.js";
import IssueTable1 from "./detailed.js";

function App() {
  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Front /><Footer/></>} />
          {/* <Route path="/forget" element={<><Header /><ForgotPassword /><Footer1/></>} /> */}
          <Route path="/SubmitIssueForm" element={<><Header1 /><Provider store={store}><SubmitIssueForm /></Provider></>} />
          <Route path="/new" element={<><Header1 /><Provider store={store}><AnotherPage /></Provider><Footer1/></>} />
          <Route path="/login" element={<><Header /><Provider store={store}><LoginForm /></Provider><Footer /></>} />
          <Route path="/body" element={<><Provider store={store}><Header1 /><Body /></Provider><Footer /></>} />
          <Route path="/admin" element={<><Header2/><AdminDashboard /></>} />
          <Route path="/manage_issue" element={<><Header2/><Provider store={store}><Manage /></Provider></>} />
          <Route path="/Adduser" element={<><Header2 /><Provider store={store}><AddUser /></Provider></>} />
          <Route path="/issueForm" element={<><Header2/><Provider store={store}><IssueForm/></Provider></>} />
          <Route path="/details" element={<><Header2/><Provider store={store}><IssueTable/></Provider><Footer1/></>}/>
          <Route path="/detailed" element={<><Header1/><Provider store={store}><IssueTable1/></Provider><Footer1/></>}/>
          <Route path="/UserList" element={<><Header2/><Provider store={store}><UserList/></Provider></>}/>
          <Route path="/about" element={<><Header/><Provider store={store}><AboutUs/></Provider><Footer/></>}/>
        </Routes>
      </Router>
      
    </>
  );
}
export default App;
