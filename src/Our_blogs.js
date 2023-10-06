import React from 'react'
import Headings from './Headings'
import BlogCard from './BlogCard'

function Our_blogs() {
  return (
    <div className='our_blogs_main'>

    <div>
        <Headings heading="Our Blogs"/>
        <h1 className='blog_subheading'>
        Inhouse Mindscape
        </h1>
    </div>
        
        <div className='blog_cards'>
        <BlogCard id="yellow_card" colorcard="yellowcard"/>
        <BlogCard id="blue_card" colorcard="bluecard"/>
        </div>
        
    </div>
  )
}

export default Our_blogs