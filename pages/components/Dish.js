import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import dishImg from '@/pages/components/resources/burger_platter.jpg'
import axios from 'axios'
import { headers } from '@/next.config'
import { useDispatch } from 'react-redux'
import { addAllCart, addCart } from '@/public/src/features/cartSlice'
import NoInCartContext from './noInCartContext'
import { useContext } from 'react'

function Dish({ dish, session }) {
  const ADD_CART_ENDPOINT = "http://localhost:8080/api/v1/cart/addtocart"
  const FIND_CART_ENDPOINT = "http://localhost:8080/api/v1/cart"
  const CART_ITEMS_ENDPOINT = "http://localhost:8080/api/v1/cart"
  const DELET_CART_ENDPOINT = "http://localhost:8080/api/v1/cart"
  let tag = dish.tag;
  const context = useContext(NoInCartContext)
  const [noInCart, setNoInCart] = useState(0)
  const [added, setAdded] = useState(false)
  const dispatch = useDispatch()
  const isRecommended = () => {
    if(tag == 'recommended' && tag != null){
      return true
    }else return false
  }
  const isBest = () => {
    if(tag == 'best seller' && tag != null){
      return true
    }else return false
  }
  const handleAddToCart = (e)=>{
    const formData = new FormData()
    formData.append('id', session.user.email)
    formData.append('dishId', dish.id)
    formData.append('name', dish.name)
    formData.append('photo', dish.photo)
    formData.append('price', dish.price)
    axios.post(ADD_CART_ENDPOINT, formData,{
      headers:{Accept:'application/json'}
    }).then((response) => {
      checkInCart()
    })
  }
  const handleRemoveFromCart = ()=>{
    let deleteCount = 0
    const formData = new FormData()
    formData.append('id', session.user.email)
    axios.post(CART_ITEMS_ENDPOINT, formData).then((response) => {
      if(response != null){
        const resData = response.data
        resData.forEach(elem => {
          if(elem.dishId == dish.id && deleteCount==0){
            deleteCount++
            const formData2 = new FormData()
            formData2.append('cartId', elem.id)
            axios.delete(DELET_CART_ENDPOINT, 
              {data:formData2}, 
              {headers:{'Authorization': 'Bearer paperboy'}
            }).then((response)=>{
              checkInCart()
            })
          }
        })
      }
    });
  }

  async function checkInCart(){
    const FIND_CART_ENDPOINT = "http://localhost:8080/api/v1/cart"
    const formData = new FormData()
    let inCart = 0
    formData.append('id', session.user.email)
    axios.post(FIND_CART_ENDPOINT, formData, {
      headers: {Accept:'application/json'}
    }).then((response)=>{
      const resData = response.data
      let inCartSame = []
      resData.forEach(elem =>{
        if(elem.dishId == dish.id){
          inCartSame.push(elem)
          inCart = elem.inCart
        }
      })
      if(inCartSame.length > 0){
        setNoInCart(inCart)
        setAdded(true)
      }else if(inCartSame.length == 0){
        setNoInCart(inCart)
        setAdded(false)
      }
      dispatch(addAllCart(resData))
      
    })
    
  }
  
  useEffect(()=>{
    checkInCart()
  })

  return (
    <div className='card align-items-stretch justify-content-start flex-col gap-1' >

      {isRecommended() && <div className="card-banner recommended">
        <p className='level-5'>Recommended</p>
      </div>}
      
      {isBest() && <div className="card-banner best-seller">
        <p className="level-5">Best Seller</p>
      </div>}

      <img className='card-image' src={dish.photo}/>
      <div>
        <p className='level-3 strong'>{dish.name}</p>
        <p className='level-5 font-light'>{dish.cuisine}</p>
      </div>
      <p className='level-3 strong'><span className='rupee-symbol'>₹</span>{dish.price}</p>
      <div>
        <div className='flex-row align-items-center justify-content-between'>
          <div className="ratings-box flex-row align-items-center justify-content-center">
            <i className="fi fi-ss-star stars level-4"></i>
            <p className='level-5 font-light'>{dish.rating}</p>
          </div>
          <p className='level-5'>-</p>
          <p className='level-5 font-light'>~ {dish.time} MINS</p>
          <p className='level-5'>-</p>
          <div className='flex-row align-items-center justify-content-center'>
            {added && <button className="level-3 strong add-to-cart pointer" onClick={handleRemoveFromCart}>-</button>}
            {added && <div className='in-cart flex-col align-items-center justify-content-center'><p className='level-5'>{noInCart}</p></div>}
            <button className="level-3 strong add-to-cart pointer" onClick={handleAddToCart}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dish
