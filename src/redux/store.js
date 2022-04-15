import { configureStore } from "@reduxjs/toolkit"
import churchReducer from "../redux/slices/churchSlice"
import loginReducer from "../redux/slices/loginSlice"
import authReducer from "../redux/slices/authSlice"

export default configureStore({
	reducer: {
		login: loginReducer,
		auth: authReducer,
		church: churchReducer,
	},
})
