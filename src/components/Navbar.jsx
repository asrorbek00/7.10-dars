import React from 'react'
import { Link } from 'react-router-dom'
import Theme from './Theme'

function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <Theme/>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar