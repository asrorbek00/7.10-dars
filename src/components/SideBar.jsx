import React from 'react'
import { Link } from 'react-router-dom'
import Theme from './Theme'
import Signin from './Signin'

import { useSelector } from 'react-redux'

function SideBar() {
    const {likedPhotos} = useSelector((store) =>store.unsplash)
  return (
    
    <div className=' absolute left-0 top-10 custom1'>
        <ul className="mt-2  menu bg-base-200 w-72 h- rounded-box">
        <Signin/>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/likedphotos'}> <h2>LikedPhotos</h2><span className='badge badge-primary'>{likedPhotos.length}</span></Link></li>
            <span className='ml-3 mb-3'><Theme/></span>
            
    </ul>
    </div>
  )
}

export default SideBar