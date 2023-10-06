import React from 'react'
import './App.css'
import Headings from './Headings'
import ServiceCard from './ServiceCard'
import Services from './Services_list'
function Third_services() {
  return (
    <>
      <div className='heading_text'>
        <Headings heading="Services" />
      </div>
      <div className='Third_about_us'>


        <h1 className='service_text'>
          We provide Artificial Intelligence Services
        </h1>
        <div className='service_cards'>
          <div className='service_card_two_set'>
          <ServiceCard number="1" title="Biometrics" data="Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection." color="green"/>
          <ServiceCard number="2" title="Image Analysis" data="Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection." color="blue"/>
          </div>
          <div className='service_card_two_set'>
          <ServiceCard number="3" title="Cross-Media Translation" data="Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection." color="red"/>
          <ServiceCard number="4" title="3D Modelling and Design." data="Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection." color="orange"/>
          </div>
           
        </div>
        {/* <div className='servicecards'>
          {
            Services.map((service) => {
             <ServiceCard/>
            })
          }
        </div> */}
      </div>
    </>
  )
}

export default Third_services