import React from 'react'

function In_touch() {
  return (
   <div className='In_touch_main'>
    <div className='In_touch_textandform'>
        <h1>Get in touch with us</h1>
        <h4>
        Send your enquiry now!
        </h4>
        <form className='form'>
            <input  placeholder='Enter email address'></input>
            <button className='req-btn'>Request Demo</button>
        </form>
    </div>
    <div className='map_img'>
        <img src='map.webp'/>
    </div>
   </div>
  )
}

export default In_touch