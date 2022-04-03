import {
	Assessment,
	Dashboard,
	Event,
	EventNote,
	Group,
	Person,
	Search,
} from "@mui/icons-material"
import { MenuItem, styled, Typography } from "@mui/material"
import { purple, red } from "@mui/material/colors"
import { padding } from "@mui/system"
import Navbar from "../components/common/nav/Navbar"
import STMenuItem from "../components/common/STMenuItem"
import { alpha } from "@mui/material"
import { Outlet } from "react-router-dom"

const Container = styled("div")(({ theme }) => ({
	height: "100vh",
}))

const Wrapper = styled("div")(({ theme }) => ({
	height: "100%",
	display: "flex",
	[theme.breakpoints.down("lg")]: {
		flexDirection: "column",
	},
}))

const LeftBar = styled("div")(({ theme }) => ({
	height: "100%",
	flex: 1,
	[theme.breakpoints.down("lg")]: {
		flex: 1,
	},
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	backgroundColor: alpha(theme.palette.primary.main, 0.2),
	paddingLeft: 20,
	paddingTop: 20,
}))

const MainArea = styled("div")(({ theme }) => ({
	height: "100%",
	flex: 8,
	[theme.breakpoints.down("lg")]: {
		flex: 1,
	},
}))

const RightBar = styled("div")(({ theme }) => ({
	height: "100%",
	flex: 2,
	[theme.breakpoints.down("lg")]: {
		flex: 1,
	},
}))

const Home = () => {
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<LeftBar>
					<Typography variant="h6" color="primary.dark">
						Staff & Members
					</Typography>
					<STMenuItem icon={<Person />} text="Pastor" />
					<STMenuItem icon={<Group />} text="Staff" />
					<STMenuItem icon={<Group />} text="Members" />
					<Typography variant="h6" color="primary.dark" pt={2}>
						Events
					</Typography>
					<STMenuItem icon={<EventNote />} text="Weekly Services" />
					<STMenuItem icon={<Event />} text="Special Events" />
					<STMenuItem icon={<Group />} text="Groups" />
					<Typography variant="h6" color="primary.dark" pt={2}>
						Donation
					</Typography>
					<STMenuItem icon={<Dashboard />} text="Dashboard" />
					<STMenuItem icon={<Assessment />} text="Reports" />
				</LeftBar>
				<MainArea>
					<Outlet />
				</MainArea>
				<RightBar></RightBar>
			</Wrapper>
		</Container>
	)
}

export default Home
