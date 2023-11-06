import React from 'react'
import { useSelector } from 'react-redux'
import Galerey from './Galerey'
import { Link } from 'react-router-dom';

function Likedphotos() {
    const {likedPhotos} = useSelector((store) => store.unsplash)
    console.log(likedPhotos);
  return (
    <div>
       <h1 className='text-2xl ml-4 mt-12'>Liked Photos</h1>
       {likedPhotos.length == 0 &&  <div><h1 className='text-4xl'>You dont have liked Photos</h1></div> }
       <div className='grid gap-4 my-24 lg:grid-cols-3 lg:mx-36 sm:grid-cols-1 sm:mx-12 md:grid-cols-2 md:mx-24'>
       {likedPhotos && likedPhotos.map((photo)=>{
        return  <div key={photo.id} >
        <Link to={`/${photo.id}`}>
          <img src={photo.urls.small} alt="" />
          </Link>
          {/* <button onClick={() => dispatch(addLikedPhotos(photo))} className='btn btn-sm btn-primary mt-3'>Liked</button> */}
        </div>

       })}
       </div> 
    </div>
  )
}

export default Likedphotos