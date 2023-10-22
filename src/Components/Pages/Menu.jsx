import React from 'react'
import MenuList from '../Helper/MenuList'

const Menu = () => {
  return (
    <div className='Menu'>
        <h1 className='MenuTitle' data-aos="fade-down"data-aos-duration="1500">Menülerimiz</h1>
        <div className='MenuList'data-aos="fade-down"data-aos-duration="1500">
            {MenuList.map((menuItem,keys)=>{
                       return <div className='menuItem'>
                        <div><img src={menuItem.image} alt="" /></div>
                        <h3>{menuItem.name}</h3>
                        <p>{menuItem.price} TL</p>
                       </div>

            })}
        </div>
    </div>
  )
}

export default Menu