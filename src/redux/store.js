import { configureStore } from "@reduxjs/toolkit"
import email from "./Email";
import mapImage from "./mapImage";

export default configureStore({
	reducer: {
		mapImage: mapImage,
		email: email,
	}
});
