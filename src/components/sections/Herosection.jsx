import React from 'react'
import Button from './Button'
import './hero.css'

function Herosection() {
  return (
    <section className="hero-section" id="home">
        <div id="hero">
        <h1 className='hero-heading'>Smart Attendance System Using Face Recognition</h1>
        <p>
          Say goodbye to manual errors and proxy attendance. Our AI-powered solution ensures secure, real-time attendance with facial recognition technology.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veritatis sapiente saepe consectetur numquam, error non neque, maiores omnis in necessitatibus? Natus accusantium, minus perferendis voluptates reiciendis fuga in enim?
        </p>
        <div className="cta-buttons">
          <Button buttonStyle="btn--outline" buttonSize="btn--medium">Get Started</Button>
          <Button buttonStyle="btn--primary" buttonSize="btn--medium">Watch Video</Button>
        </div>
        <p className="tech-stack">Built with Python · OpenCV · Dlib · DeepFace</p>
      </div>
      <div></div>
    </section>
  )
}

export default Herosection