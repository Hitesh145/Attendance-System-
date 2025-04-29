import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
        <footer id='contacts' class="footer-section">
                <div>

                    <h2>Contact & Credits</h2>
                    <p><strong>👨‍🏫 Project Guide:</strong> Er. Rahul Pal Singh</p>
                    <p><strong>🏛 Institution:</strong> JNGEC Sundernagar, Mandi (H.P.)</p>
                    <ul className='contact-links'>
                        <li><a href="https://www.facebook.com/Official.Jngecsnr/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
                        <li><a href="https://x.com/JngecOfficial" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter" ></i> Twitter</a></li>
                        <li></li>
                    </ul>
                </div>

                <div>
                    
                    <h3>👨‍💻 Team Members</h3>
                    <div class="team-list">
                        <ul>
                            <li>Aryan Sharma</li>
                            <li>Priya Thakur</li>
                            <li>Kunal Verma</li>
                            <li>Neha Gupta</li>
                            <li>Rohit Rana</li>
                        </ul>
                        <ul>
                            <li>Simran Sood</li>
                            <li>Aditya Sharma</li>
                            <li>Ritika Chauhan</li>
                            <li>Sahil Dogra</li>
                            <li>Muskan Thakur</li>
                        </ul>
                    </div>
                </div>
                <p class="footer-note">© 2025 JNGEC CSE Project Group</p>
        </footer>
    </>
  )
}

export default Footer