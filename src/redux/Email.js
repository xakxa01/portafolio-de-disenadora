import { createSlice } from "@reduxjs/toolkit";
import emailJS from "@emailjs/browser"
import toast from "react-hot-toast";

const emailSlice = createSlice({
	name: "email",
	initialState: '',
	reducers: {
		email: (state, action) => {
			emailJS.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, action.payload, process.env.REACT_APP_PUBLIC_KEY)
				.then(res => toast.success('correo enviado'))
				.catch(err => toast.error('error enviando correo'))
		}
	},
})

export const { email } = emailSlice.actions;
export default emailSlice.reducer;
