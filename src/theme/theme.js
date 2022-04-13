import { grey } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

//#ef476f, #ffd166, #06d6a0, #118ab2, #0c637f, #073b4c
//#ff5400, #ff6d00, #ff8500, #0077b6, #023e8a, #03045e

const theme = createTheme({
	palette: {
		primary: {
			light: "#c1d5e0",
			main: "#90a4ae",
			dark: "#62757f",
			contrastText: "#000000",
		},
		secondary: {
			light: "#ffffff",
			main: "#e0e0e0",
			dark: "#aeaeae",
			contrastText: "#000000",
		},
		mode: "light",
		cms: {
			textLight: grey[600],
			textDark: grey[900],
			menu: grey[800],
			menuHover: grey[900],
			menuUnderline: grey[300],
		},
	},
})

export default theme

// primary: {
// 	light: "#ffffff",
// 	main: "#e0f2f1",
// 	dark: "#002884",
// 	contrastText: "#000000",
// },
// secondary: {
// 	light: "#5472d3",
// 	main: "#0d47a1",
// 	dark: "#002171",
// 	contrastText: "#ffffff",
// },
