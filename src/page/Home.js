import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Home.scss"
import logo from '../image/logo.png'

export default function Home() {
	return (
		<header className="homeContainer">
			<div className="left"></div>
			<div className="right">
				<Navbar />
				<div className="logo">
					<img className="logoImg" src={logo} alt="logo" />
				</div>
			</div>
		</header>
	)
}
