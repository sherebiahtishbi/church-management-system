import { Edit, Logout, Settings } from "@mui/icons-material"
import {
	AppBar,
	Avatar,
	Box,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import userimg from "../../../images/anu_profile.jpg"
import { logoutUser } from "../../../redux/actions/loginActions"
import { useDispatch } from "react-redux"

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

const HomeLink = styled(Link)(({ theme }) => ({
	display: "flex",
	flexGrow: 1,
	textDecoration: "none",
	color: theme.palette.cms.text800,
}))

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleLogout = () => {
		logoutUser(dispatch)
		navigate("/")
	}

	return (
		<>
			<AppBar position="static">
				<Toolbar sx={{ height: 80 }}>
					<HomeLink to="/home">
						<WebTitle component="div" variant="h4">
							Church Management System
						</WebTitle>

						<MobileTitle component="div" variant="h4">
							CMS
						</MobileTitle>
					</HomeLink>
					<RightConrols>
						<NavbarMenu>
							<NavbarMenuItem>About Us</NavbarMenuItem>
							<NavbarMenuItem>Features</NavbarMenuItem>
							<NavbarMenuItem>Support</NavbarMenuItem>
							<NavbarMenuItem>Billing</NavbarMenuItem>
						</NavbarMenu>
						<IconButton
							size="large"
							color="inherit"
							onClick={handleClick}
						>
							<Avatar src={userimg} />
						</IconButton>
					</RightConrols>
				</Toolbar>
			</AppBar>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem>
					<ListItemIcon>
						<Edit fontSize="small" />
					</ListItemIcon>
					Edit Profile
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	)
}

export default Navbar
