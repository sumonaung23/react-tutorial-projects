import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  return <nav className='nav'>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo' />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <button className="link-btn">Products</button>
        </li>
        <li>
          <button className="link-btn">Developers</button>
        </li>
        <li>
          <button className="link-btn">conmany</button>
        </li>
      </ul>

      <button className="btn signin-btn">Sign in</button>
      
    </nav>
}

export default Navbar
