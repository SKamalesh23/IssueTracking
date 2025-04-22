import React from 'react';
import s3 from'./IMAGES/img3.jpg';
const AboutUs = () => {
    return (
        <div class="bk" style={{
            fontFamily: 'Arial, sans-serif',
            color: '#8c0c0c',
            margin: 0,
            padding: 0,
        }}><br/><br/><br/><br/><br/>
            <main style={{
                padding: '2em',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                margin: '20px auto',
                maxWidth: '800px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
            }}>
                <section>
                    <h2>About Us</h2>
                    <p>Welcome to the Issue Tracking System of the Engineering College. Our system is designed to help students, faculty, and staff report and manage issues efficiently. Whether it's a facility problem, a service issue, or an academic concern, our platform allows for quick and effective resolution.</p>
                    <p>Our mission is to ensure a smooth and productive environment for all members of the college community. By using our system, you contribute to maintaining the high standards of our institution.</p>
                    <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
                </section>
            </main>
            
        </div>
    );
};

export default AboutUs;
