import React from 'react'
import Button from './Button'
import './about.css'

function About() {
  return (
    <>
        <section id="about">

            <h2 className='about_heading'>About the Project</h2>
            <p className='intro'>Traditional attendance systems are prone to manipulation, inefficiencies, and errors. Our project aims to solve this using facial recognition for accurate, real-time attendance tracking. Leveraging AI, CNNs, and Dlib, the system reduces proxy attendance and provides a secure, automated approach to attendance management.</p>
                  <div className="card-container">

                    <div className="card">
                      <h2>Dataset & Methodology</h2>
                      <p>We captured 100 real-time webcam images per student in varying expressions and lighting using OpenCV. The system auto-sampled frames and stored 200x200 JPG images. Preprocessing included Haar Cascade detection, resizing, and RGB conversion. Encodings were stored in a secure folder using pickle.</p>
                      <h3>Steps:</h3>
                      <ol>
                        <li>Face detection using Haar Cascade</li>
                        <li>Standardization (200x200)</li>
                        <li>Color conversion to RGB</li>
                        <li>Encoding with face_recognition</li>
                      </ol>
                    </div>

                    <div className="card">
                      <h2>Technology & Implementation</h2>
                      <h3>Stack</h3>
                      <ul>
                        <li>Language  : Python</li>
                        <li>Libraries : OpenCV, Face_recognition, Dlib, DeepFace, Pandas, Pickle</li>
                      </ul>
                      <h3>Architecture</h3>
                      <p>Real-time image capture ➝ Face detection ➝ Preprocessing ➝ 128D Encoding ➝ Match using Euclidean Distance ➝ Anti-spoof ➝ Attendance Logging</p>
                      <h3>Security Features</h3>
                      <ul>
                        <li>Liveness Detection</li>
                        <li>AES-256 Encryption</li>
                        <li>Multi-Factor Authentication (optional)</li>
                      </ul>
                    </div>

                    <div className="card">
                      <h2>Results & Future Scope</h2>
                      <h3>Achievements</h3>
                      <ul>
                        <li>8000 face encodings generated</li>
                        <li>Encoding accuracy: High (based on 128D vector matching)</li>
                        <li>Live spoof detection using DeepFace</li>
                      </ul>
                      <h3>Challenges</h3>
                      <ul>
                        <li>Lighting and pose sensitivity</li>
                        <li>Privacy concerns with image storage</li>
                      </ul>
                      <h3>Future Scope</h3>
                      <ul>
                        <li>3D facial recognition with LiDAR</li>
                        <li>Cloud-based LMS integration</li>
                        <li>Mobile app support</li>
                        <li>Deepfake detection via AI</li>
                      </ul>
                    </div>

                  </div>
                  {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">Explore More</Button> */}

          </section>

    </>
  )
}

export default About    