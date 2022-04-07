import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import reduxstore from "./redux/store"
import { AuthProvider } from "./context/AuthProvider"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<Provider store={reduxstore}>
				<App />
			</Provider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
