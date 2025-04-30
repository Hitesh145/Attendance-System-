import React from 'react'
import Button from './Button'
import './hero.css'

function Herosection() {
  return (
    <section className="hero-section" id="home">
        <div id="hero">
        <h1 className='hero-heading'>FaceCheck – Attendance Viewer</h1>
        <p>
          Say goodbye to manual errors and proxy attendance. Our AI-powered solution ensures secure, real-time attendance with facial recognition technology.
          The project includes a dedicated website named FaceCheck – Attendance Viewer, developed using React to provide an easy-to-use interface for checking attendance records. The website is designed to display data collected through the face recognition system in a clean, organized, and user-friendly format. 
        </p>
        <div className="cta-buttons">
          <Button buttonStyle="btn--outline" buttonSize="btn--medium">Get Started</Button>
          {/* <Button buttonStyle="btn--primary" buttonSize="btn--medium">Watch Video</Button> */}
        </div>
        <p className="tech-stack">Built with Python · OpenCV · Dlib · DeepFace</p>
      </div>
      <div></div>
    </section>
  )
}

export default Herosection