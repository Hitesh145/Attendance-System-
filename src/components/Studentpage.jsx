import React from 'react'
import './studentpage.css'
import { useLocation , Link } from 'react-router-dom'

//hardcoded data for students and their marks
//This data would be fetched from a server or database.
const Data = {
  "Aniket": {
    "Mathematics": 92,
    "Physics": 75,
    "Chemistry": 58,
    "computerScience": 88,
    "English": 90
  },"Kanan": { 
    "Mathematics": 85,
    "Physics": 80,
    "Chemistry": 70,
    "computerScience": 90,
    "English": 95
  },
  "Nitin": {
    "Mathematics": 78,
    "Physics": 65,
    "Chemistry": 80,
    "computerScience": 75,
    "English": 85
  },"Suryansh": {
    "Mathematics": 60,
    "Physics": 70,
    "Chemistry": 55,
    "computerScience": 65,
    "English": 75
  },"Preeti": {
    "Mathematics": 95,
    "Physics": 90,
    "Chemistry": 85,
    "computerScience": 92,
    "English": 88
  }
}
function getAttendanceClass(percent) {
  if (percent >= 85) return 'good';
  if (percent >= 70) return 'average';
  return 'low';
}


function Studentpage() {
  const location = useLocation();
  const { username } = location.state || {}; // Get the username from the state passed by the Login component
  return (
    <>

  <h1>Welcome : {username}</h1>

  <div className="grid-container">
    <div className="subject-block">
      <div className="subject-name">Mathematics</div>
      <div className={`attendance ${getAttendanceClass(Data[username].Mathematics)}`}> {Data[username].Mathematics}%  </div>
    </div>
    <div className="subject-block">
      <div className="subject-name">Physics</div>
      <div className={`attendance ${getAttendanceClass(Data[username].Physics)}`}> {Data[username].Physics}%  </div>
    </div>
    <div className="subject-block">
      <div className="subject-name">Chemistry</div>
      <div className={`attendance ${getAttendanceClass(Data[username].Chemistry)}`}> {Data[username].Chemistry}%  </div>
    </div>
    <div className="subject-block">
      <div className="subject-name">Computer Science</div>
      <div className={`attendance ${getAttendanceClass(Data[username].computerScience)}`}>{Data[username].computerScience}%  </div>
    </div>
    <div className="subject-block">
      <div className="subject-name">English</div>
      <div className={`attendance ${getAttendanceClass(Data[username].English)}`}>{Data[username].English}%  </div>
    </div>
    <div className="logout-button">
      <Link to="/" ><button>Log out </button></Link>
    </div>
  </div>
  


    </>
  )
}

export default Studentpage  