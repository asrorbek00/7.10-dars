import React from 'react'
import { useDispatch } from 'react-redux'
import { addLikedPhotos } from '../redux/features/unsplashSlice'
import { Link } from 'react-router-dom'

function Galerey({data}) {

    const dispatch = useDispatch()
  return (
    <div>
      <div className='grid gap-4 my-24 lg:grid-cols-3 lg:mx-32 sm:grid-cols-1 sm:mx-6 md:grid-cols-2 md:mx-18'>
       {data && data.results.map((photo)=>{
        return  <div key={photo.id} >
        <Link to={`/${photo.id}`}>
          <img src={photo.urls.small} alt="" />
          </Link>
          <button onClick={() => dispatch(addLikedPhotos(photo))} className='btn btn-sm btn-primary mt-3'>Liked</button>
        </div>

       })}
       </div> 
    </div>
  )
}

export default Galerey