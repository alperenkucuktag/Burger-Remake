import React from 'react'
import BannerImage from '../Assets/2blackbean.jpg'

const Contact = () => {
  return (
    <div className='Contact'data-aos="fade-down"data-aos-duration="1500">
        <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>İletişim</h1>
            <form id='form'>
                <label htmlFor="name">İsim/Soyisim</label>
                <input name="name"  placeholder='İsim/Soyisim Giriniz...' type='text' />
                <label htmlFor="name">E-mail</label>
                <input name="E-mail"  placeholder='E-mail...' type='email' />
                <label htmlFor="E-mail">Yorum</label>
                <textarea name="message"  placeholder='Mesaj Gönder...'> </textarea>
                <button type='submit'>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Contact