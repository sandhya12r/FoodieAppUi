import React, { useEffect } from 'react'
import Dish from './Dish'
import AdminDish from './AdminDish'
import { useDispatch, useSelector } from 'react-redux'
import { addAllPost, selectDish, selectPost } from '@/public/src/features/dishSlice'
import axios from 'axios'
import AddDish from './AddDish'

function Dishes({ session }) {
  const RES_ALL_DISHES_ENDPOINT = "http://localhost:8080/api/v1/dish"
  const RES_BY_PRICE_HL = "http://localhost:8080/api/v1/hightolow"
  const RES_BY_PRICE_LH = "http://localhost:8080/api/v1/lowtohigh"
  const dispatch = useDispatch()
  const dishes = useSelector(selectPost)
  let count = 0
  useEffect(() => {
    const fetchData = () =>{
      axios.get(RES_ALL_DISHES_ENDPOINT).then((response) => {
        if(response != null && count == 0){
          dispatch(addAllPost(response.data));
          count++
        }
      });
    }
    fetchData()
  }, [])


  const handleRelevance = (e) => {
  const tabTitles = document.getElementsByClassName('tab-titles')
    Array.from(tabTitles).forEach(elem => {
      elem.classList.remove('active')
    })
    e.target.classList.add('active')
   
  }
  const handleRating = (e) => {
    const tabTitles = document.getElementsByClassName('tab-titles')
    Array.from(tabTitles).forEach(elem => {
      elem.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  const handleLowToHigh = (e) => {
    const tabTitles = document.getElementsByClassName('tab-titles')
    Array.from(tabTitles).forEach(elem => {
      elem.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  const handleHighToLow = (e) => {
    const tabTitles = document.getElementsByClassName('tab-titles')
    Array.from(tabTitles).forEach(elem => {
      elem.classList.remove('active')
    })
    e.target.classList.add('active')
    
  }



  return (
    <div className='page level-2 flex-col justify-content-center align-items-center gap-2'>
        <div className='menu-title-filter flex-row justify-content-between align-items-center wrap gap-1'>
          <p className="level-1 strong">ORDER ONLINE</p>
          <div className='menu-filter flex-row justify-content-between align-items-center gap-4'>
              <p className="level-4 font-light active pointer tab-titles" onClick={handleRelevance}>Relevance</p>
              <p className="level-4 font-light pointer tab-titles" onClick={handleRating}>Rating</p>
              <p className="level-4 font-light pointer tab-titles" onClick={handleLowToHigh}>Price: Low to High</p>
              <p className="level-4 font-light pointer tab-titles" onClick={handleHighToLow}>Price: High to Low</p>
          </div>
        </div>

        <div className="flex-row justify-content-between align-items-start wrap w-80 gap-2">
            {session.role == 'admin' ? dishes.map((dish) => (
              <AdminDish dish={dish} key={dish.id} session={session}/>
            )): dishes.map((dish) => (
              <Dish dish={dish} key={dish.id} session={session}/>
            ))}
            
        </div>
        {session.role == 'admin' && <AddDish/>}
    </div>
  )
}

export default Dishes