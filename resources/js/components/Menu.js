import React from 'react'
//import  './Menu.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return <div className="nav">
  <ul>
  <li><Link to="/"> Home </Link></li>
  <li><Link to="/login">Login </Link></li>
  <li><Link to="/register">Register</Link></li>
  </ul>
  </div>
}
export default Menu;

 