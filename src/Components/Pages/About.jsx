import React from 'react'
import BannerImage from '../Assets/1beef.jpg'

const About = () => {
  return (
    <div className='About'>
        <div data-aos="fade-down"data-aos-duration="1500" className='AboutTop'style={{backgroundImage:`url(${BannerImage})`}}></div>
            <div className='AboutBottom' data-aos="fade-down"data-aos-duration="2000">
                <h1>Hakkımızda</h1>
                <p>Lorem ipsum dolor simi us cupiditatuatur earum officiis repudiandae quisquam id ab, blanditiis a optio, vel ad modi!</p>
            </div>
        
    </div>
  )
}

export default About