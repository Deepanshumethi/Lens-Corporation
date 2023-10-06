import React from 'react'

function Why_card(props) {
  return (
    
    <div id='whycard' className={props.color}>
    <div className='whycard_title'>
        <h1>{props.title}</h1>
    </div>
    <div className='whycard_img'>
        <img src={props.img}/>
    </div>
    <div className='whycard_detail'>
        <p>
            {props.detail}
        </p>
    </div>
    </div>

    
  )
}

export default Why_card