import React, { useId, useRef } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import '../styles/Portafolio.scss'

export default function Portafolio() {
	const id = useId()
	const mapImage = useSelector((state) => state.mapImage)
	const imgRef = useRef()

	return (
		<div className="PortafolioContainer">
			<Navbar />
			<div className="galleryContainer">
				{mapImage.map(item => {
					return (
						<div className="galleryItem" key={id}>
							<img ref={imgRef} src={item} alt="" className="imgGallery" />
						</div>
					)
				})}
			</div>
		</div>
	)
}
