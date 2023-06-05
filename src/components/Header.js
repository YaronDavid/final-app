import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import logoH from '../images/logoHeader.png'
import './Header.css';

export default function header() {
  return (
    <header id="header" className='flex'>
        <div className='text'>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p><LoremIpsum p={1}/></p>
          <button>Reserve a table</button>
        </div>
        <div className='flex'>
          <img id="logoH" src={logoH}/>
        </div>
    </header>
  )
}
