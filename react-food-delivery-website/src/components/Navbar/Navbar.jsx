import React from 'react'
import { useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets.js"
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home")

  return (
    <div className='navbar'>
        <img src={assets.logo} style={{height:"130px",width:"170px"}} className='logo'/>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt='search-icon'/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon}/>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar