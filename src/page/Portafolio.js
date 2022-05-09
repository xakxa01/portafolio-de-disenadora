import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Portafolio.scss'

import img1 from '../image/IMG_4341.PNG'
import img2 from '../image/IMG_4381.PNG'
import img3 from '../image/IMG_4384.PNG'
import img4 from '../image/IMG_4385.PNG'
import img5 from '../image/IMG_4387.PNG'
import img6 from '../image/IMG_4396.PNG'
import img7 from '../image/IMG_4397.PNG'
import img8 from '../image/IMG_4398.PNG'
import img9 from '../image/IMG_4399.PNG'
import img10 from '../image/IMG_4400.PNG'
import img11 from '../image/IMG_4401.PNG'
import img12 from '../image/photo-output.jpg'

export default function Portafolio() {
	return (
		<div className="PortafolioContainer">
			<Navbar />
			<div className="galleryContainer">
				<div className="galleryItem">
					<img src={img1} alt="" className="imgGallery" />
					<p className="textClick">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora provident similique quos quisquam. Accusamus architecto ipsa eligendi! Quidem voluptatem ipsum, cupiditate quibusdam vitae iste mollitia dolorem placeat repellat aliquam accusamus?</p>
				</div>
				<div className="galleryItem">
					<img src={img2} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img3} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img4} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img5} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img6} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img7} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img8} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img9} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img10} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img11} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
				<div className="galleryItem">
					<img src={img12} alt="" className="imgGallery" />
					<p className="textClick"></p>
				</div>
			</div>
		</div>
	)
}
