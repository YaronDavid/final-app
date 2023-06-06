import React from 'react'
import logoF from '../images/logoFooter.png'
import LoremIpsum from 'react-lorem-ipsum'
import './Footer.css'

const items = [
  { 
    title: "Contact",
    contents: [
      {
        text: "Contact us", 
        link: "",
        target: ""
      },
      {
        text: "Pay methods", 
        link:"",
        target: ""
      },
      {
        text:"Devolutions", 
        link:"",
        target: ""
      },
      {
        text:"Promos", 
        link:"",
        target: ""
      },
      {
        text:"FQ",
        link:"",
        target: ""
      }
    ]
  },
  { title: "Social Media",
    contents: [
      {
        text:"Facebook", 
        link: "https://es-la.facebook.com/",
        target: "_blank"
      },
      {
        text:"Twitter",
        link: "https://twitter.com/?lang=es",
        target: "_blank"
      },
      {
        text:"Instagram",
        link:"https://www.instagram.com/",
        target: "_blank"
      }]
  },
  { title: "Home",
    contents: [
      {
        text:"About us",
        link:"#header",
        target: ""
      }, 
      {
        text:"Our personal",
        link:"#main",
        target: ""
      }, 
      {
        text: "Get Job",
        link:"",
        target: ""
      },
      {
        text: "Valorations",
        link:"",
        target: ""
      }
    ]
  }
]

function CardComponent(props){
  return (
    <div className='gridF'>
      <h3>{props.title}</h3>
      {props.contents.map((value, index)=>(
        <p key={index}>
          <a className='noColor noDecoration' target={value.target} href={value.link}>{value.text}</a>
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
        <div className='grid'>
          {
            items.map((item, index) => (
              <CardComponent key={index} title={item.title} contents={item.contents}/>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
