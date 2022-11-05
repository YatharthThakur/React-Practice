import React from 'react'
import './Navbar-style.scss'
import './Products'
import FormBind from './Products'
export default function Navbar() {
  return (
    <header>
      <div className='nav-bar'>
          <div className='logo-container'>
            <img src = "./assets_cart/logo-img.jpg" alt="logo-img"></img>
          </div>
          <div className='input-box-container'>
            <input className="search-text" type="text" placeholder='Enter product name, category'></input>
            <input className="search-btn" type="image" src="./assets_cart/search-button.png" alt="search"/>
          </div>
          <div className='cart-container'>
            <h5>Cart</h5>
            <h6>0</h6>
          </div>
      </div>      
    </header>
  )
}