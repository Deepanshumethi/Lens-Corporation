import React from 'react'
import './App.css'
// import BlackButton from './BlackButton'
import Transparent_btn from './Transparent_btn'
function About_us_card() {
  return (
  <div className='About_us_card'>
    <div className='About_us_card_text'>
        <h1>
        Welcome To LENS
        </h1>
        <p>
        We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.
        </p>
        <div className='About_us_card_btn'>
        <Transparent_btn data="Learn More"/>
        </div>
    </div>

    <div className='About_us_card_img'>
        <div className='About_us_card_image'>

        </div>
    </div>
  </div>
  )
}

export default About_us_card