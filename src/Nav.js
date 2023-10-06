import React, { useState } from 'react'
import './App.css'
import HamNav from './HamNav';
function Nav() {

    let[visible,setVisible]=useState(false);

    const Show=()=>{
        setVisible(!visible)
    //    alert("hellio")
    // console.log(visible);
    }


    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    // console.log(window.pageYOffset)
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    
  } else {
    document.getElementById("navbar").style.top = "-90px";
    // document.getElementById("HamNav").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}
    return (
        <>
            <header id='navbar'>
                <nav>
                    <div className='navLeft'>
                        <img src='nav.webp' />
                    </div>
                    <div className='hamber' onClick={()=>{
                            Show()
                    }}>
                        <div className='line_hamber'></div>
                        <div className='line_hamber'></div>
                        <div className='line_hamber'></div>
                    </div>
                    <div className='navRight'>
                        <ul>
                            <li>MakeMyWeb.</li>
                            <li>Home</li>
                            <li>Company</li>
                            <li>Blogs</li>
                           
                        </ul>
                    </div>
                </nav>
                {
                    (visible ? <HamNav/>:" ")
                }
            </header>
        </>
    )
}

export default Nav;