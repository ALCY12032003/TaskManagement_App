

import React from 'react';
import './Home.css';
import img from './assets/log.png';
import { Link } from "react-router-dom";
import Feedback from './Feedback';

function Home() {
  return (
    <div>
      <div className="wrapper">
        <nav className="navbar">
          <img className="logoimg" src={img} alt="Logo"/>
          <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><Link to="/Feedback">Feedback</Link></li>
            <li className="dropdown">
              <button className="dropbtn">Profile</button>
              <div className="dropdown-content">
                <a href="#">View</a>
                <a href="#">Edit</a>
                <a href="#">Logout</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="center">
          <h1>Welcome Back!</h1>
          <h2>Streamline Your Workflow...</h2>
          <div className="buttons">
            <button className="btn2">Create Task</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="row">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <a href="https://www.facebook.com/" target="blank" class="fa fa-facebook"></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" target="blank" class="fa fa-twitter"></a>
          <a href="https://www.google.com/" target="blank" class="fa fa-google"></a>
          <a href="https://www.linkedin.com/" target="blank" class="fa fa-linkedin"></a>
          <a href="https://www.youtube.com/" target="blank" class="fa fa-youtube"></a>
          <a href="https://www.instagram.com/" target="blank" class="fa fa-instagram"></a>      
          </div>

          <div className="row">
            <ul>
            <li><a href="mailto:almithadency@example.com"> Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="https://termify.io/generate-privacy-policy">Terms & Conditions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="row">
            TO-DO SPRINT Copyright © 2023 ALMITHA DENCY -
            All rights reserved || Designed By: ALCY
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
