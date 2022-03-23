import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import reduxstore from "./redux/store"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={reduxstore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
