import React from 'react'

function CartItem({session, cart}) {
  let total = cart.price*cart.inCart
  return (
    <div className='flex-row align-items-center gap-2 w-100'>
      <img className='cart-img' src={cart.photo} alt="" />
      <p className='cart-name'>{cart.name}</p>
      {/* <p className='w-7'><span>₹ </span>{cart.price}</p> */}
      <p className='cart-number'><span>X </span>{cart.inCart}</p>
      <p><span>₹ </span>{total}</p>
    </div>
  )
}

export default CartItem