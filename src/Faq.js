import React, { useState } from 'react'
import Headings from './Headings'
import FaqQuestion from './FaqQuestion'
// import FaqQuestions from './FaqQuestions'
function Faq() {
    const [answer, setanswer] = useState(false)
    const show = () => {
        setanswer(!answer)
    }
    return (
        <div>
            <div>
                <Headings heading="GET TO KNOW US" />
            </div>
            <div>
                <h1 className='faq-text'>
                Frequently Asked Questions
                </h1>
            </div>
            <div className='box'>
                <div className='box-1'>
                    <FaqQuestion />
                    <FaqQuestion />
                    <FaqQuestion />
                </div>
                <div className='box-1'>
                    <FaqQuestion />
                    <FaqQuestion />
                    <FaqQuestion />
                </div>
            </div>

        </div>

    )
}

export default Faq;