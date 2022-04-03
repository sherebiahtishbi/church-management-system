import { Typography } from "@mui/material"
import { styled } from "@mui/system"
import { alpha } from "@mui/material"

const Container = styled("div")(({ theme }) => ({
	width: "90%",
	display: "flex",
	padding: 10,
	fontSize: 14,
	color: "GrayText",
	"&:hover": {
		backgroundColor: alpha(theme.palette.cmstexts.dark, 0.1),
		cursor: "pointer",
	},
	gap: 10,
}))

const STMenuItem = ({ icon, text, onclick }) => {
	return (
		<Container onClick={onclick}>
			{icon}
			<Typography>{text}</Typography>
		</Container>
	)
}

export default STMenuItem
