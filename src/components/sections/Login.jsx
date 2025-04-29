import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

// Hardcoded data for students and teachers
// This data would be fetched from a server or database
const studentData = { "Hitesh": "1234", "Karan": "1234", "Aditi": "1234", "Ravi": "1234", "Priya": "1234" }

const teacherData = { "Sharma": "5678", "Gupta": "5678", "Verma": "5678", "Mehta": "5678", "Singh": "5678" }

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
                console.log('Student login successful!');
                navigate('/Studentpage', { state: { username } });
            } else {
                alert('Invalid student credentials!');
                console.log('Invalid student credentials!');
            }
        } else if (role === 'teacher') {
            if (teacherData[username] && teacherData[username] === password) {
                console.log('Teacher login successful!');
                navigate('/Teacherpage', { state: { username } });
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
        <section id="login">
            <h2>Login</h2>
            <div className="form-container">
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
        </section>
    </>
  )
}

export default Login    