import React from 'react'

function BlogCard(props) {
  return (
   <div id={props.id} className='blogcard'>
        <div className='slide'>
        <div className='new'>
            New!
        </div>
        <div>
            <h2 className='blogcard_title'>Positive Change Through Co-operative Gaming</h2>
        </div>
        <div  id={props.colorcard} className='blogcard_discription'>
        Cooperative gaming refers to a style of gameplay where two or more players work together to achieve a common goal or complete a shared objective. Unlike competitive gaming, where players face off against each other, cooperative gaming...
        </div>
       
        </div>
        <div className='blodcard_readmore'>
            Read More >>
        </div>
   </div>
  )
}

export default BlogCard