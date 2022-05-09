import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Contacto.scss'

export default function Contacto() {
	return (
		<div className="contactoContainer">
			<Navbar />

			<div className="formContainer">
				<div className="titleContainer">
					<h1 className="title">Contacto</h1>
					<address className="email">mtatis859@panamericanihs.org</address>
					<hr className='barra' />
				</div>

				<form className='formulario'>
					<input type="text" name="" id="" className="input" placeholder='correo' />
					<textarea cols="30" rows="3" className="input" placeholder='mensaje' />
					<button className="button">ENVIAR</button>
				</form>

				<div className="redes">
					<a href="">
						<img src="https://img.icons8.com/ios-glyphs/25/252b34/instagram-new.png" alt="instagram" className="icon" />
					</a>
					<a href=''>
						<img src="https://img.icons8.com/ios-glyphs/25/252b34/twitter--v1.png" alt="twitter" className="icon" />
					</a>
					<a href=''>
						<img src="https://img.icons8.com/ios-glyphs/25/252b34/facebook.png" alt="facebook" className="icon" />
					</a>
				</div>
			</div>

			<div className="barraDecoracion"></div>
		</div>
	)
}
