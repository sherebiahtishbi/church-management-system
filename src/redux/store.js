import { configureStore } from "@reduxjs/toolkit"
import churchReducer from "../redux/slices/churchSlice"
import loginReducer from "../redux/slices/loginSlice"

export default configureStore({
	reducer: {
		auth: loginReducer,
		church: churchReducer,
	},
})
