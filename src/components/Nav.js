import React, { Component } from 'react';
import logo from "../images/logo.svg"
import "./Nav.css"

export default class Nav extends Component {
  render() {
    return (
        <nav id="nav" className='flex'>
          <img id="logoNav" src={logo}/>
          <div className="list flex">
            <a className="navItem noDecoration" href="/">Presentation</a>
            <a className='navItem noDecoration' href="#main">Order</a>
            <a className='navItem noDecoration' href="#footer">Contact us</a>
          </div>
          <div className='login flex'>
            <button className="loginB">Login</button>
          </div>
        </nav>
    )
  }
}

