import React from 'react'

import { Component } from 'react'

import {Link} from "react-router-dom"

import "./index.css"


class NavigationBar extends Component
{
    render()
    {
        const NavigationBarGoingToWebPage=
            <div className="wpc-1-container">
      
      {/* Top Info Row */}
      <div className="wpc-1-phone-mail-container">
        
        {/* Left Section */}
        <div className="contact-section">
          <div className="contact-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
              alt="phone"
              className="icon"
            />
            <p className="text">7780418770</p>
          </div>

          <div className="contact-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="mail"
              className="icon"
            />
            <p className="text">saketh3199@gmail.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="location-section">
          <div className="location-item">
            <p className="text">Hyderabad</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="city"
              className="icon"
            />
          </div>

          <div className="location-item">
            <p className="text">Telangana</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
              alt="state"
              className="icon"
            />
          </div>

          <div className="location-item">
            <p className="text">India</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197419.png"
              alt="country"
              className="icon"
            />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="divider" />


      {/* Second Row */}
      <div className="wpc-1-second-row">

        {/* Logo / Name */}
        <div className="wpc-container-1-name-logo-container">
          <div className="logo-box">
            <span className="logo-dark">SAKETH</span>
            <span className="logo-light">NARWA</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="wpc-container-1-navlinks-container">
          <Link to="/"><p className="nav-link">HOME</p></Link>
          <Link to="/portfolio/childhood"><p className="nav-link">CHILDHOOD</p></Link>
          <Link to="/portfolio/education"><p className="nav-link">EDUCATION</p></Link>
          <Link to="/portfolio/message"><p className="nav-link">MESSAGEFROMME</p></Link>
          <Link to="/portfolio/contact-me"><p className="nav-link">CONTACT-ME</p></Link>
        </div>

      </div>
            </div>

        return NavigationBarGoingToWebPage
    }
}


export default NavigationBar