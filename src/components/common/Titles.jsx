import { Box, styled, Typography } from "@mui/material"

const Titles = ({ title, subtitle }) => {
	return (
		<Box>
			<Typography variant="h3" color="cms.text600" textAlign="center">
				{title}
			</Typography>
			<Typography variant="body2" color="cms.text600" textAlign="center">
				{subtitle}
			</Typography>
		</Box>
	)
}

export default Titles
