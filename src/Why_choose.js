import React from 'react'
import Headings from './Headings'
import Why_card from './Why_card'
function Why_choose() {
    return (
        <div className='whycard_main'>
        <div className='why_choose'>
            <div className='why_choose_text'>
                <Headings heading="Why Choose Us" />
            </div>
            <h1 className='why_choose_detail'>
                AI-driven solutions backed by science
            </h1>
            <p className='why_choose_desc'>
                Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
            </p>

            <div className='why_lists'>
                <ul className='why_list'>
                    <li>State-of-the-art solutions</li>
                    <li>Fast & Efficient</li>
                    <li>No extra computation fee</li>
                    <li>No licensing fee</li>
                </ul>
                {/* <ul className='why_list'>
                    <li>Lifetime support & upgrades</li>
                    <li>Plug-and-Play</li>
                    <li>24x7 Progress Monitoring</li>
                    <li>Incremental Updates</li>
                </ul> */}
            </div>
        </div>
        <div className='why_cards'>
                <Why_card title="Exclusive Rights"
                    img="why1.webp" detail="Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you." color="green_"
                />
                <Why_card title="Exclusive Rights"
                    img="why2.webp" detail="Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you." color="blue_"
                />
                <Why_card title="Exclusive Rights"
                    img="why3.webp" detail="Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you." color="red_"
                />
                <Why_card title="Exclusive Rights"
                    img="why4.webp" detail="Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you." color="orange_"
                />

            </div>
        </div>
    )
}

export default Why_choose