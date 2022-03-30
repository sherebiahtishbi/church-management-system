import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
	AppBar,
	Toolbar,
	Container,
	Typography,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Button,
	Tooltip,
	Avatar,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../redux/userSlice"

const pages = ["Church", "Business", "Blog"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

const Navbar = (props) => {
	const navigate = useNavigate()
	const dispath = useDispatch()
	let username = useSelector((state) => state.user.userinfo.userid) || ""
	const [anchorElNav, setAnchorElNav] = useState(null)
	const [anchorElUser, setAnchorElUser] = useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = async (e) => {
		const menutext = e.currentTarget.children[0].innerText
		if (menutext === "Logout") {
			try {
				const res = await axios.get("/auth/logout")
				console.log(res.data)
				console.log("Logging you out!")
				dispath(remove())
				navigate("/logout")
			} catch (err) {
				console.log(err)
			}
		}
		setAnchorElUser(null)
	}
	return username ? (
		<AppBar color={props.color && props.color}>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							mr: 2,
							display: {
								xs: "none",
								md: "flex",
								cursor: "pointer",
							},
						}}
						// onClick={()=>{navigate('/')}}
					>
						LOGO
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt="Anugrah Tisbi"
									src={props.image && props.image}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
								>
									<Typography textAlign="center">
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	) : (
		""
	)
}

export default Navbar
