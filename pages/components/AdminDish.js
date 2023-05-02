import React from 'react'
import Image from 'next/image'
import dishImg from '@/pages/components/resources/burger_platter.jpg'
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addAllPost } from '@/public/src/features/dishSlice';
import { useEffect } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import AddDish from './AddDish';

function Dish({dish}) {
  const DELETE_ENDPOINT = "http://localhost:8080/api/v1/dish/delete"
  const MODIFY_DISH_ENDPOINT = "http://localhost:8080/api/v1/dish/modify"
  const UPDATED_DISH_ENDPOINT = "http://localhost:8080/api/v1/dish/edited"
  let tag = dish.tag;
  const [editOn, setEditOn] = useState(false)
  const name = useRef(dish.name)
  const cuisine = useRef(dish.cuisine)
  const price = useRef(dish.price)
  const time = useRef(dish.time)
  const tagRef = useRef(dish.tag)

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
  const editDish = (e) => {
    const card = e.target.parentElement.parentElement.parentElement.parentElement;
    card.classList.toggle('active')
    setEditOn(isActive(card.classList.contains('active')))
  }
  const closeEdit = (e) => {
    const card = e.target.parentElement.parentElement.parentElement.parentElement;
    card.classList.toggle('active')
    setEditOn(isActive(card.classList.contains('active')))
  }
  const isActive = (flag) => {
    return flag
  }
  const deleteDish = (e) => {
    e.preventDefault()
    const formData = new FormData()
    let id = dish.id
    formData.append('id', id)
    axios.delete(DELETE_ENDPOINT, {data: formData}).then((response) => {
      console.log(response)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    let id = dish.id
    let tagValue
    if(document.querySelector('input[name="tag"]:checked')){
      tagValue = document.querySelector('input[name="tag"]:checked').value
    }else tagValue = dish.tag
    formData.append('id', id)
    formData.append('name', name.current.value)
    formData.append('cuisine', cuisine.current.value)
    formData.append('price', price.current.value)
    formData.append('tag', tagValue)
    formData.append('time', time.current.value)

    axios.post(MODIFY_DISH_ENDPOINT, formData, {
      headers:{Accept:'application/json'}
    }).then((response) => {
      
      closeEdit(e)
  })
  }

  
  return (
    <div className='admin card align-items-stretch justify-content-between flex-col gap-1' >

      {isRecommended() && <div className="card-banner recommended">
        <p className='level-5'>Recommended</p>
      </div>}
      
      {isBest() && <div className="card-banner best-seller">
        <p className="level-5">Best Seller</p>
      </div>}

      <img className='card-image' src={dish.photo}/>
      <div className="flex-row justify-content-between align-items-start gap-1">
        <div className="flex-col justify-content-between gap-1">
            {!editOn && <div className='flex-col'>
                <p className='level-3 strong'>{dish.name}</p>
                <p className='level-5 font-light'>{dish.cuisine}</p>
            </div>}
            {editOn && <div className='flex-col'>
                <input className='level-3 strong edit-input' ref={name} defaultValue={dish.name}></input>
                <input className='level-5 font-light edit-input' ref={cuisine} defaultValue={dish.cuisine}></input>
            </div>}

            {!editOn && <div className="flex-row justify-content-between">
                <p className='level-3 strong'><span className='rupee-symbol'>₹</span>{dish.price}</p>
            </div>}
            {editOn && <div className="flex-row justify-content-between">
                <input className='level-3 strong edit-input' ref={price} defaultValue={dish.price}></input>
            </div>}
        </div>
        {editOn &&<div>
            <label className="level-4 font-light container">Recommended
                <input type="radio" name='tag' ref={tagRef} value='recommended' />
                <span className="checkmark"></span>
            </label>

            <label className="level-4 font-light container">Best Seller
                <input type="radio" name='tag' ref={tagRef} value='best seller'  />
                <span className="checkmark"></span>
            </label>

            <label className="level-4 font-light container">none
                <input type="radio" name='tag' ref={tagRef} value=''  />
                <span className="checkmark"></span>
            </label>
        </div>}
        <div className='flex-col'>
            {editOn && <button className="level-3 strong add-to-cart pointer flex-col align-items-center justify-content-center close" ><i className="fi fi-br-cross pointer" onClick={closeEdit}></i></button>}
            {editOn && <button className="level-3 strong add-to-cart pointer flex-col align-items-center justify-content-center close" ><i className="fi fi-br-trash pointer" onClick={deleteDish}></i></button>}
        </div>
        
      </div>
      
      
      <div>
        <div className='flex-row align-items-center justify-content-between'>
          <div className="ratings-box flex-row align-items-center justify-content-center">
            <i className="fi fi-ss-star stars level-4"></i>
            <p className='level-5 font-light'>{dish.rating}</p>
          </div>
          <p className='level-5'>-</p>
          {!editOn && <p className='level-5 font-light'>~ {dish.time} MINS</p>}
          {editOn && <input className='level-5 font-light edit-input' ref={time} defaultValue={dish.time}></input>}
          <p className='level-5'>-</p>
          {!editOn && <button className="level-3 strong add-to-cart pointer flex-col align-items-center justify-content-center" ><i className="fi fi-rr-edit pointer" onClick={editDish}></i></button>}
          {editOn && <button className="level-3 strong add-to-cart pointer flex-col align-items-center justify-content-center submit" ><i className="fi fi-br-check pointer" onClick={handleSubmit}></i></button>}
        </div>
      </div>
      
    </div>
  )
}

export default Dish