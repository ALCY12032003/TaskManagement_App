import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FeedbackView() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/showdetails')
      .then((response) => {
        setFeedbackData(response.data);
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
        <div className="container188">
          <thead>
            <tr className="form-title">
              <th className="header-cell">Feedback ID</th>
              <th className="header-cell">First Name</th>
              <th className="header-cell">Last Name</th>
              <th className="header-cell">Email</th>
              <th className="header-cell">Phone Number</th>
              <th className="header-cell">Query</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.firstname}</td>
                <td>{feedback.lastname}</td>
                <td>{feedback.email}</td>
                <td>{feedback.phone}</td>
                <td>{feedback.query}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default FeedbackView;
