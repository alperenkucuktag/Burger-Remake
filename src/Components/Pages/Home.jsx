import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Assets/banner.jpg'

const Home = () => {
  return (
    <div data-aos="fade-down"data-aos-duration="1500" className='Home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='Header-Container'>
            <h1 data-aos="fade-down"data-aos-duration="1500">Burger <span>Remake</span></h1>
            <p data-aos="fade-right"data-aos-duration="1500">Harika Hamburgerler ile <br/> mükemmel soslar </p>
            <Link to="menu"><button>Sipariş Ver</button></Link>

        </div>
    </div>
  )
}

export default Home