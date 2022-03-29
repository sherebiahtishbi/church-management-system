import { createTheme } from "@mui/material/styles"

//#ef476f, #ffd166, #06d6a0, #118ab2, #0c637f, #073b4c
//#ff5400, #ff6d00, #ff8500, #0077b6, #023e8a, #03045e

const theme = createTheme({
	palette: {
		// primary: {
		//     main: '#118ab2'
		// },
		// secondary: {
		//     main: '#0c637f'
		// }
		primary: {
			light: "#ffffff",
			main: "#e0f2f1",
			dark: "#002884",
			contrastText: "#000000",
		},
		secondary: {
			light: "#5472d3",
			main: "#0d47a1",
			dark: "#002171",
			contrastText: "#ffffff",
		},
		mode: "light",
	},
})

export default theme
