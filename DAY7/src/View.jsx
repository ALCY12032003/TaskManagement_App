import React from 'react';
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';

function View() {
  return (
<div>
      <div class="homebutton">
      <Link to="/Home">&#8592;Back</Link>
</div>
      <table className='gen'>
        <div className="container12">
          <thead>
            <tr className="form-title">
            <th className="header-cell">Task ID</th>
            <th className="header-cell">Task Type</th>
              <th className="header-cell">Task Name</th>
              <th className="header-cell">Task Description</th>
              <th className="header-cell">Category</th>
              <th className="header-cell">Status</th>
              <th className="header-cell">Start Date</th>
              <th className="header-cell">End Date</th>
              <th className="header-cell">Priority</th>
              <th className="header-cell">Notification</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;
