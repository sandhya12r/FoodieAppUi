import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectPost } from '@/public/src/features/dishSlice'
import { useEffect } from 'react'
import axios from 'axios'
import { addAllCart, selectCart } from '@/public/src/features/cartSlice'
import NoInCartContext from './noInCartContext'
import { useContext } from 'react'

function Cart({session, toggleCart}) {
  const CART_ITEMS_ENDPOINT = "http://localhost:8080/api/v1/cart"
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCart)
  const context = useContext(NoInCartContext)
  let count = 0
  useEffect(() => {
    const fetchData = () =>{
      const formData = new FormData()
      formData.append('id', session.user.email)
      axios.post(CART_ITEMS_ENDPOINT, formData).then((response) => {
        if(response != null && count == 0){
          dispatch(addAllCart(response.data));
          count++
        }
      });
    }
    fetchData()
  }, [])
  return (
    <div className='flex-row cart-parent align-items-center justify-content-center page' id='cartParent'>
      <div><i className="fi fi-br-cross cart-parent-i pointer" onClick={toggleCart}></i></div>
      <div className="flex-col justify-content-center align-items-center cart gap-2">
          <p className="level-2 heading">{session.user.name}'s Cart</p>
          <div className="cart-div flex-col justify-content-center align-items-center gap-1">
            {cartItems.map((cart) => (
              <CartItem cart={cart} session={session} key={cart.id} cartNo={context.noInCart}/>
            ))}
          </div>
            <button className="custom-btn pointer w-75">Checkout</button>
      </div>
    </div>
  )
}

export default Cart