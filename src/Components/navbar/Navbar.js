import React from 'react'
import {NavLink} from 'react-router-dom'
import "../../Styles/Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <NavLink exact  className='navlink' to='/'>Home</NavLink>
            <NavLink className='navlink' to='/create' >Create</NavLink>
            <NavLink className='navlink' to='/search' >Search</NavLink>
            <NavLink className='navlink' to='/community' >Community</NavLink>
            <NavLink className='navlink' to='/feature' >Feature</NavLink>
            <NavLink className='navlink' to='/login' >Login</NavLink>

        </div>
    )
}

export default Navbar
