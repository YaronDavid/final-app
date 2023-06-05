import React, { Component } from 'react'
import food from '../images/bruchetta.svg';
import restaurant from '../images/restaurant.jpg';
import chef from '../images/restaurantChef.jpg'
import LoremIpsum from 'react-lorem-ipsum'
import './Main.css'

const cards = [
  {
    image: food,
    title: "Our food",
    description: 1
  },
  {
    image: restaurant,
    title: "Our place",
    description: 1
  },
  {
    image: chef,
    title: "Our team",
    description: 1
  }
]

const CardContent = (props) =>{
  return (
  <div className='item'>
    <div className='flex imageBanner'>
    <img src={props.img} class="imageM"/>
    </div>
    
    <h2>{props.title}</h2>
    <p><LoremIpsum p={props.description}/></p>
  </div>
  )
}

export default class Main extends Component {
  render() {
    return (
      <main id="main">
        <div className="flex">
          <h1 className='flexOne title'>
            Specials
          </h1>
          <div className='flexEmpty'></div>
          <div className='flexButton flex'>
            <button className='btn'>
             Order online
            </button>
          </div>
        </div>
        <div className='grid'>
          {cards.map((card) => 
            <CardContent img={card.image} title={card.title} description={card.description}/>
          )}
        </div>
      </main>
    )
  }
}
