import { configureStore } from "@reduxjs/toolkit"
import churchReducer from "../components/Church/redux/churchSlice"
import churchListReducer from "../components/churchlist/redux/churchListSlice"
import loginReducer from "../pages/login/redux/loginSlice"

export default configureStore({
	reducer: {
		auth: loginReducer,
		church: churchReducer,
		churchlist: churchListReducer,
	},
})
