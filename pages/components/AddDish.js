import axios from 'axios'
import React, { useRef, useState } from 'react'

function AddDish() {
    const ADD_DISH_ENDPOINT = "http://localhost:8080/api/v1/dish"
    const name = useRef(null)
    const description = useRef(null)
    const cuisine = useRef(null)
    const price = useRef(null)
    const time = useRef(null)
    const photo = useRef(null)
    const tag = useRef(null)
    const [image, setImage] = useState(null)

    const handleClick = () => {
        photo.current.click()
    }
    const addImage = (e) => {
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
            reader.onload = (e) => {
                setImage(e.target.result)
                console.log(image)
            }
        }
    }
    const removeImage = () => {
        setImage(null)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name.current.value)
        formData.append('description', description.current.value)
        formData.append('cuisine', cuisine.current.value)
        formData.append('price', price.current.value)
        formData.append('time', time.current.value)
        formData.append('photo', image)
        formData.append('tag', tag.current.value)

        axios.post(ADD_DISH_ENDPOINT, formData,{
            headers:{Accept:'application/json'}
        }).then((response) => {
            console.log(response)
            name.current.value =  ''
            description.current.value = ''
            cuisine.current.value = ''
            price.current.value = ''
            time.current.value = ''
            tag.current.value = ''
            setImage(null)
        })
    }

  return (
    <div className='full-screen flex-col align-items-center justify-content-center gap-2'>
        <p className="level-1 strong">Add Dish</p>
        <form className='flex-col align-items-center justify-content-center gap-1'>
        <input className='box' ref={name} type="text" placeholder='name' />
        <input className='box' ref={description} type="text" placeholder='description' />
        <input className='box' ref={cuisine} type="text" placeholder='cuisine' />
        <input className='box' ref={price} type="text" placeholder='price' />
        <input className='box' ref={time} type="text" placeholder='time' />
        <input type="text" className="box" ref={tag} placeholder='tag' />
        {!image && (
        <div className="flex-row align-items-center justify-content-center gap-1 pointer" onClick={handleClick}>
            <i className="fi fi-rr-camera pointer"></i>
            <p className='level-4 pointer font-light'>Add an Image</p>
            <input className='box' ref={photo} type="file" placeholder='photo' hidden accept='image*' onChange={addImage} />
        </div>)}
        {image &&(
            <div className="flex-row align-items-center justify-content-center gap-2 pointer">
                <img src={image} className='image-to-post' alt="image to post" />
                <i className="fi fi-rr-trash pointer" onClick={removeImage}></i>
            </div>
        )}
        <button className='custom-btn pointer' onClick={handleSubmit}>Add Dish</button>
    </form>
    </div>
    
  )
}

export default AddDish