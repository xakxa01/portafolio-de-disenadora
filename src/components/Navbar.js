import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.scss'

export default function Navbar() {
	return (
		<ul className="navbarContainer">
			<li> <NavLink activeClassName="active" className="navbarItem" to="/"> HOME </NavLink> </li>
			<li className="space">|</li>
			<li> <NavLink activeClassName="active" className="navbarItem" to="/Portafolio">PORTAFOLIO</NavLink> </li>
			<li className="space">|</li>
			<li> <NavLink activeClassName="active" className="navbarItem" to="/Contact">CONTACTO</NavLink> </li>
			<li className="space">|</li>
			<li> <NavLink activeClassName="active" className="navbarItem" to="/About">ABOUT</NavLink> </li>
		</ul >
	)
}
