import React, { Component } from 'react';
import logo from "../images/logo.svg"

export default class Nav extends Component {
  render() {
    return (
        <nav>
          <img src={logo}/>
          <ul>
            <li><a href="#header">Presentation</a></li>
            <li><a href="#main">Order</a></li>
            <li><a href="#footer">Contact us</a></li>
          </ul>
        </nav>
    )
  }
}

