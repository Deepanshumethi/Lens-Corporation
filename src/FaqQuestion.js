import React from 'react'
import { useState } from 'react'
function FaqQuestion() {
    const [answer, setanswer] = useState(false)
    const show = () => {
         setanswer(!answer)
    }
  return (
    <div>
        <div className='single-question-box' >
                    <div className='question' onClick={() => {
                        show()
                    }}>
                        <p>Do i need to sign a contact ?</p>
                        <p><i class="fa-solid fa-angles-down"></i></p>
                    </div>
                    <div>
                    {
                        (answer ? <div className='answer'>
                            We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                        </div> : " ")
                    }
                    </div>
                </div>
    </div>
  )
}

export default FaqQuestion