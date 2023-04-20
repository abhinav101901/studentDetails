import React, { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber]=useState('')
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('N/A');
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = {
      name: name,
      rollNumber:rollNumber,
      age: age,
      gender: gender,
      email: email
    };
    setStudents([...students, student]);
    setName('');
    setRollNumber('');
    setAge('');
    setGender('');
    setEmail('');
  };

  return (
    <div className="student-form">
      <h1>STUDENT DETAILS</h1><hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student-Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="rollNumber">Roll-Name</label>
          <input type="text" id="rollNumber" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label for="gender">Gender:</label>
          <select name="gender" id="gender" value={gender} onc={(e) => setGender(e.target.value)}>
            <option value="N/A">select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      {students.length > 0 && (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll-Number</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
