import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './login.css'

// localStorage.setItem("islogin", "false")
// Hardcoded data for students and teachers
// This data would be fetched from a server or database
const studentData = { "Nitin": "1234", "Aniket": "1234", "Kanan": "1234", "Suryansh": "1234", "Preeti": "1234" }

const teacherData = { "Rahul": "5678", "Aditi": "5678", "Meenakshi": "5678"}

function Login() {
    const [role, setRole] = useState('student');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Handle login form submission
    // This function will be called when the user submits the login form
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(`Logging in as ${role} with username: ${username} and password: ${password}`);
        
        // Here you can add your authentication logic
        if (role === 'student') {
            if (studentData[username] && studentData[username] === password) {
                localStorage.setItem("islogin", "true");
                console.log('Student login successful!');
                navigate('/Studentpage', { state: { username } ,replace: true });
            } else {
                alert('Invalid student credentials!');
                console.log('Invalid student credentials!');
            }
        } else if (role === 'teacher') {
            if (teacherData[username] && teacherData[username] === password) {
                localStorage.setItem("islogin","true")
                console.log('Teacher login successful!');
                navigate('/Teacherpage', { state: { username } ,replace: true });
            } else {
                alert('Invalid teacher credentials!');
                console.log('Invalid teacher credentials!');
            }
        } else {
            console.log('Invalid role selected!');
        }
        
        // Clear the input fields after login attempt
        setUsername('');
        setPassword('');
        console.log();

    };
  return (
    <>
        <Navbar />
        <section id="login">
            <div className="form-container">
            <h2>Login</h2>
            <div className="form"> 


                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    id="username" 
                    required 
                    value={username}
                    onChange={e => setUsername(e.target.value)} />

                    <label htmlFor="password">Password:</label>
                    <input type="password"
                    id="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                    

                    <label htmlFor="role">Login as:</label>
                    <select id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>

                    <button type="submit">Login</button>
                </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login    