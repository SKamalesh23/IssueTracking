/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function Footer(){
    return(
        <>
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4>Social Media</h4>
                    <div class="social-icons">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <div class="col-md-4">
                    <h4>Quick Links</h4>
                    <ul class="nav d-block">
                        <li class="nav-item"><a href="#" class="nav-link">News & Events</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Admission Procedure</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Fees Structure</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Circular/Minutes</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4>Contact Us</h4>
                    <ul class="nav">
                        <li class="nav-item">Government College Of Engineering - Thanjavur</li>
                        <li class="nav-item">Thanjavur, Tamilnadu-613402</li>
                        <li class="nav-item">Phone - 04362 221112, 221113</li>
                        <li class="nav-item">Fax - 04362 221112</li>
                        <li class="nav-item">Email: <a href="mailto:gcesengipatti@gmail.com">gcesengipatti@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>&copy; 2024 Kamalesh4024CSE | Developed by Kamalesh</p>
                </div>
            </div>
        </div>
    </footer>

        </>
    );
}