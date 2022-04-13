import { Logout, PersonAdd, Settings } from "@mui/icons-material"
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Divider,
	IconButton,
	Link,
	ListItemIcon,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material"
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import userimg from "../../images/anu_profile.jpg"
import { logoutUser } from "../../redux/actions/authActions"
import { useDispatch } from "react-redux"
import Navbar from "../common/nav/Navbar"

const WebTitle = styled(Typography)(({ theme }) => ({
	flexGrow: 1,
	fontWeight: 600,
	display: "flex",
	color: theme.palette.cms.textDark,
	[theme.breakpoints.down("lg")]: {
		display: "none",
	},
}))

const MobileTitle = styled(Typography)(({ theme }) => ({
	flexGrow: 1,
	fontWeight: 600,
	display: "flex",
	[theme.breakpoints.up("lg")]: {
		display: "none",
	},
}))

const NavbarMenu = styled(Box)(({ theme }) => ({
	display: "flex",
}))

const NavbarMenuItem = styled("div")(({ theme }) => ({
	paddingLeft: 10,
	paddingRight: 10,
	paddingTop: 20,
	paddingBottom: 10,
	cursor: "pointer",
	fontWeight: 400,
	fontSize: 16,
	[theme.breakpoints.down("md")]: {
		display: "none",
	},
	borderBottom: "2px solid transparent",
	color: theme.palette.cms.menu,
	"&:hover": {
		color: theme.palette.cms.menuHover,
		borderBottom: "2px solid white",
	},
}))

const RightConrols = styled(Box)(({ theme }) => ({
	display: "flex",
	height: "100%",
	alignItems: "center",
}))

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default HomeLayout
