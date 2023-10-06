import React from 'react'
import './App.css'
import About_us_card from './About_us_card'
import Headings from './Headings'
function Second_About_us() {
  return (
    <>
        <div className='Second_About_us'>
            <div className='About_text'>
               <Headings heading="About Us"/>
            </div>
            <div>
                <About_us_card/>
            </div>
        </div>
    </>
  )
}

export default Second_About_us