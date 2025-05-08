import React from 'react'
import {Link} from "react-router-dom"
import './teacherpage.css'

// Hardcoded data for students' attendance
// This data would be fetch from a server or database
const students = [
  { name: "Aniket",
    "Mathematics": 92,
    "Physics": 75,
    "Chemistry": 58,
    "computerScience": 88,
    "English": 90
  },
  { name: "Aryan",
    "Mathematics": 85,
    "Physics": 80,
    "Chemistry": 70,
    "computerScience": 90,
    "English": 95
  },
  { name: "Harshita" ,
    "Mathematics": 78,
    "Physics": 65,
    "Chemistry": 80,
    "computerScience": 75,
    "English": 85
  },
  { name: "Kanan" ,
    "Mathematics": 60,
    "Physics": 70,
    "Chemistry": 55,
    "computerScience": 65,
    "English": 75
  },
  { name: "Nitin" ,
    "Mathematics": 95,
    "Physics": 90,
    "Chemistry": 85,
    "computerScience": 92,
    "English": 88
  },
  { name: "Preeti",
    "Mathematics": 92,
    "Physics": 75,
    "Chemistry": 58,
    "computerScience": 88,
    "English": 90
  },
  { name: "Shagun",
    "Mathematics": 85,
    "Physics": 80,
    "Chemistry": 70,
    "computerScience": 90,
    "English": 95
  },
  { name: "Shamak" ,
    "Mathematics": 78,
    "Physics": 65,
    "Chemistry": 80,
    "computerScience": 75,
    "English": 85
  },
  { name: "Shreya" ,
    "Mathematics": 60,
    "Physics": 70,
    "Chemistry": 55,
    "computerScience": 65,
    "English": 75
  },
  { name: "Suryansh" ,
    "Mathematics": 95,
    "Physics": 90,
    "Chemistry": 85,
    "computerScience": 92,
    "English": 88
  }
]

function getAttendanceClass(percent) {
  if (percent >= 80) return 'good';
  if (percent >= 60) return 'average';
  return 'low';
}

function Teacherpage() {

  return (
    <>  
  <div className="teacher-page">
  <h1>Teacher's Attendance Dashboard</h1>
  <table className="attendance-table">
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Mathematics</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Computer Science</th>
        <th>English</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <tr key={index}>
          <td>{student.name}</td>
          <td className={getAttendanceClass(student.Mathematics)}>{student.Mathematics}%</td>
          <td className={getAttendanceClass(student.Physics)}>{student.Physics}%</td>
          <td className={getAttendanceClass(student.Chemistry)}>{student.Chemistry}%</td>
          <td className={getAttendanceClass(student.computerScience)}>{student.computerScience}%</td>
          <td className={getAttendanceClass(student.English)}>{student.English}%</td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="logout-button">
      <Link to="/" ><button>Log out </button></Link>
    </div>
</div>
  
  
      </>
    )
  };

export default Teacherpage