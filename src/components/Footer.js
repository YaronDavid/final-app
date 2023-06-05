import React from 'react'
import logoF from '../images/logoFooter.png'
import './Footer.css'

const items = [
  { title: "Contact",
    texts: ["Contact us", "Pay methods", "Devolutions", "Promos", "FQ"]
  },
  { title: "Social Media",
    texts: ["Facebook", "Twitter", "Instagram"]
  },
  { title: "Home",
    texts: ["About us", "Our personal", "Get Job"]
  }
]

function CardComponent(props){
  return (
    <div>
      <h3>{props.title}</h3>
      {props.content.map((texts, index)=>(
        <p key={index}>
          {texts}
        </p>
      ))}
    </div>

  )
}

export default function Footer() {
  return (
    <footer id="footer">
      <hr/>
      <div className='flexF'>
        <img src={logoF} className='imgF'/>
        <div className='grid gridF'>
          {
            items.map((item, index) => (
              <CardComponent key={index} title={item.title} content={item.texts}/>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
