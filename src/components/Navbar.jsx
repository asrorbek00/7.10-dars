import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Theme from './Theme'
import { useSelector } from 'react-redux'
import Signin from './Signin'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import SideBar from './SideBar'



function Navbar() {
  const {likedPhotos} = useSelector((store) =>store.unsplash)
  const [open, setOpen] = useState(false)
  const [menu , setMenu]= useState(false)
    
    const handOpen = ()=>{
      if(open){
        setOpen(false)
      }
      if(!open){
        setOpen(true)
      }
      if(menu){
        setMenu(false)
      }
      if(!menu){
        setMenu(true)
      }
    }
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none px-5 ">
  {!open && <button onClick={handOpen} className='hamburger'><GiHamburgerMenu size={20}/></button>}
  {open && <button onClick={handOpen} className='hamburger'><AiOutlineClose size={20}/></button>}
   {menu && <SideBar/>}
    <ul className="menu menu-horizontal mt-2 custom">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/likedphotos'}> <h2>LikedPhotos</h2><span className='badge badge-primary'>{likedPhotos.length}</span></Link></li>
            <Theme/>
            <Signin/>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar