import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/About.scss'
import img1 from '../image/IMG_4398.PNG'
import img2 from '../image/IMG_4396.PNG'
import img3 from "../image/IMG_4400.PNG"
import img4 from "../image/IMG_4385.PNG"

export default function About() {
	return (
		<div className="body">
			<Navbar />
			<div className="aboutContainer">
				<div className="info">
					<h1 className="title">Melanie Tatis</h1>
					<span className="miniDescription">But you can call me Tatis or La’Tatiss</span>
					<p className="parrafo">
						I’m an Architectural technologist and graphic designer who love to
						create base on simple ideas to elevate them in a high level of
						creativeness.
					</p>
				</div>

				<div className="imageGroup">
					<img src={img1} alt="imagen" className="mainImg" />
					<img src={img2} alt="imagen" className="mainImg" />
					<img src={img3} alt="imagen" className="mainImg" />
					<img src={img4} alt="imagen" className="mainImg" />
				</div>
			</div>
		</div>
	)
}
