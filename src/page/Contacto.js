import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import { email } from '../redux/Email'
import '../styles/Contacto.scss'

export default function Contacto() {
	const dispatch = useDispatch()
	const initialValues = { user_email: "", message: "" }

	return (
		<div className="contactoContainer">
			<Navbar />

			<div className="formContainer">
				<div className="titleContainer">
					<h1 className="title">Contacto</h1>
					<address className="email">mtatis859@panamericanihs.org</address>
					<hr className='barra' />
				</div>

				<Formik
					initialValues={initialValues}
					onSubmit={(value, { resetForm }) => {
						dispatch(email(value))
						resetForm()
					}}>
					{() => (
						<Form className='formulario'>
							<Field type="text" name="user_email" className="input" placeholder='correo' />
							<Field as="textarea" cols="30" rows="3" className="input" placeholder='mensaje' name="message" />
							<button className="button" type='submit'>ENVIAR</button>
						</Form>
					)}
				</Formik>

				<div className="redes">
					<img src="https://img.icons8.com/ios-glyphs/25/252b34/instagram-new.png" alt="instagram" className="icon" />
					<img src="https://img.icons8.com/ios-glyphs/25/252b34/twitter--v1.png" alt="twitter" className="icon" />
					<img src="https://img.icons8.com/ios-glyphs/25/252b34/facebook.png" alt="facebook" className="icon" />
				</div>
			</div>

			<div className="barraDecoracion"></div>

			<Toaster
				position="bottom-right"
				reverseOrder={false}
				toastOptions={{
					className: "toast",
				}} />
		</div>
	)
}
