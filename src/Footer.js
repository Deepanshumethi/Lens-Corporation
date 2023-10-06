import React from 'react'
import './App.css'
function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='footer_part_1'>
                <img
                    src='nav.webp'
                />
                 <div>
            <h2>
            Tomorrow's Vision, Today!
            </h2>
            </div>
            <div>
                <ul>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
            </div>
            <div  className='footer_part_2'>
                <h2>
                    SITEMAP
                </h2>
                <ul>
                    <li>MakeMyWeb.</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Blogs</li>
                    <li>Life at LENS</li>
                </ul>
            </div>
            <div  className='footer_part_3'>
            <h2>
                    CONNECT
                </h2>
                <ul>
                    <li>+91-1234567890</li>
                    <li>+91-1234567890</li>
                    <li>deepanshumethi123@gmail.com</li>
                    
                </ul>
            </div>
        </div>

        
        
    </footer>
  )
}

export default Footer