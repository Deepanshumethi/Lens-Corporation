import './App.css'
// import './promo_video.mp4'
// import  'vectorAi_laptop.webp'
import React from 'react'
import Transparent_btn from './Transparent_btn'
function True_ai() {
    return (
        <>
            <div className='True_ai_main'>
                <div className='True_ai_main_img true'>
                    <img src='vectorAi_laptop.webp' />
                </div>
                <div className='True_ai_main_text true'>
                    <div className='true_ai_heading'>
                        Meet<div className='true_ai_heading_colorful'>True-AI
                            <img src='https://www.lenscorp.ai/_next/static/media/underline.27e9f7f7.svg' /></div>
                    </div>
                    <div className='true_ai_key_feature'>
                        Design. Create. Deploy.
                    </div>
                    <div className='true_ai_detail_colorful'>
                        the Future of AI | Power to EDIT
                    </div>
                    <div className='true_ai_description'>
                        Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website
                    </div>
                    <div>
                        <button className='transparent_btn_white'>
                            Learn More
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
                <div className='True_ai_main_vid true'>
                    <video autoPlay muted loop>
                        <source src='promo_video.mp4' type='video/mp4'></source>
                    </video>
                </div>
            </div>
        </>
    )
}

export default True_ai