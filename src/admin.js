/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
// src/AdminDashboard.js
import React from 'react';
import './admin.css'; // Import the CSS file
import s1 from './IMAGES/img1.jpg' 
import s2 from './IMAGES/img2.jpg' 
import s3 from './IMAGES/img3.jpg' 
import { Link } from 'react-router-dom';
import Footer from './footer';
const AdminDashboard = () => {
    return (
        <div>
            <br/><br/>
            <main>
                <section>
                    <h2>Admin Dashboard</h2>
                    <blockquote>"The best way to predict the future is to create it." - Peter Drucker</blockquote>
                    <nav className="admin-nav" >
                        <ul style={{justifyContent:"center",color:'white'}}>
                           <Link style={{color:"white"}} to="/UserList"> <li><a>Manage Users</a></li></Link>
                            <Link style={{color:"white"}} to="/manage_issue"><li><a >Manage Issues</a></li></Link>
                            <Link style={{color:"white"}} to="/details"><li><a>Reports</a></li></Link>
                        </ul>
                    </nav>
                    <div className="admin-content">
                        <h3>Welcome, Admin!</h3>
                        <p>Use the navigation above to manage users, issues, and view reports.</p>
                        <div className="images">
                            <img src={s1} alt="Admin Image 1" />
                            <img src={s2} alt="Admin Image 2" />
                            <img src={s3} alt="Admin Image 3" />
                        </div>
                    </div>
                </section>
            </main>
            <br /><br /><br />
            <Footer/>
        </div>
    );
};

export default AdminDashboard;
