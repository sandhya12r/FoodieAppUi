import { signOut } from 'next-auth/react'
import React from 'react'
import Cart from './Cart'

function Header({session}) {
  function handleLogout(){
    signOut()
  }
  function toggleCart(){
    const cartParent = document.getElementById('cartParent')
    cartParent.classList.toggle('active')
  }
  
  return (
    <header className='flex-row align-items-center justify-content-between'>
        <h1 className='logo heading'>Foodies<span>.</span></h1>
        <div className='flex-row align-items-center gap-2 pointer '>
            {/* <button className="custom-btn pointer">Login</button> */}
            <i className="fi fi-rr-shopping-cart header-icons" onClick={toggleCart}></i>
            <i className="fi fi-rr-sign-out-alt header-icons" onClick={handleLogout}></i>
            <img className='profile-image' src={session.user.image} alt="image" />
        </div>
        <Cart session={session} toggleCart={toggleCart}/>
    </header>
  )
}

export default Header
