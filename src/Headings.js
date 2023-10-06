import React from 'react'

function Headings(props) {
  return (
    <div className='About_text'>
    <p>{props.heading}</p>
    <div className='line'></div>
</div>
  )
}

export default Headings