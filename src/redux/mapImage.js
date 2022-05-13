import { createSlice } from "@reduxjs/toolkit";
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

const arrayImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

const imageSlice = createSlice({
	name: "mapImage",
	initialState: arrayImages,
	reducers: {
		mapImage: arrayImages.map((img) => {
			return {
				img: img
			}
		}),
		getText: (state, action) => {
			fetch("https://jsonplaceholder.typicode.com/photos")
				.then(response => response.json())
				.catch(error => console.error(error))
		}
	}
})

export const { mapImage } = imageSlice.actions;
export default imageSlice.reducer