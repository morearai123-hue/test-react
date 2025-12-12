import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [studentId, setStudentId] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Student Login Details:", { studentId, course, password });
    alert("Login Successful (Demo)");
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <h4>Software Courses Portal</h4>

      <form className="login-form" onSubmit={handleLogin}>
        {/* Student ID */}
        <label>Student ID</label>
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />

        {/* Course Selection */}
        <label>Select Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">-- Choose Course --</option>
          <option value="react-js">React JS</option>
          <option value="node-js">Node JS</option>
          <option value="java-fullstack">Java Full Stack</option>
          <option value="python-django">Python Django</option>
          <option value="devops">DevOps</option>
        </select>

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
