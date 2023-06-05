import React, { Component } from 'react';
import logo from "../images/logo.svg"
import "./Nav.css"

export default class Nav extends Component {
  render() {
    return (
        <nav id="nav" className='flex'>
          <img id="logoNav" src={logo}/>
          <div className="list flex">
            <a href="#header">Presentation</a>
            <a href="#main">Order</a>
            <a href="#footer">Contact us</a>
          </div>
          <div className='login flex'>
            <button class="loginB">Login</button>
          </div>
        </nav>
    )
  }
}

