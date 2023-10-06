import React from 'react'
import Headings from './Headings'

function Get_to_know() {
    
        const show=(id)=>{
            // console.log(typeof(id))
            document.getElementsByClassName(id).style.opacity="1";
        }
    
  return (

    <div>
        <div>
        <Headings heading="Get To Know Us"/>
        </div>
        <div>
            <div>
                <h2>
                    <button onClick={()=>show("one")}>Do i need to sign a contract</button>
                </h2>
                <div class="one">We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.</div>
            </div>
        </div>
    </div>
  )
}

export default Get_to_know