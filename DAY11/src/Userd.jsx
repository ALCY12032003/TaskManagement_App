import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Userd() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/show')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="homebutton">
        <Link to="/Adminhome">&#8592;Back</Link>
      </div>
      <table className="gen">
        <div className="container128">
          <thead>
            <tr className="form-title">
              <th className="header-cell">User ID</th>
              <th className="header-cell">User Name</th>
              <th className="header-cell">User Email</th>
              <th className="header-cell">User Number</th>
              <th className="header-cell">User Password</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default Userd;