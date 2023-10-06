import React from 'react'
import { useState } from 'react'


function ServiceCard(props) {
  return (
   <div id='service_card' className={props.color} >
    <div className='card_top'>
        <h1 className='number static'>0</h1>
        <h1 className='over number ' >{props.number}</h1>
        <h1 className='service_title'>{props.title}</h1>
    </div>
    <div className='service_data'>
        <p>
            {props.data}
        </p>
    </div>
   </div>
  )
}

export default ServiceCard