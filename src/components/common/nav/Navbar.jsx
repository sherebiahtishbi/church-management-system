import { Church, Notifications, Search } from "@mui/icons-material"
import { Badge, IconButton, styled } from "@mui/material"
import { grey } from "@mui/material/colors"
import STUserMenu from "./STUserMenu"

const Container = styled("div")(({ theme }) => ({
	height: 60,
	backgroundColor: theme.palette.primary.main,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	paddingLeft: 10,
	paddingRight: 10,
	borderBottom: 0.5,
	borderBottomColor: grey[300],
	borderBottomStyle: "solid",
	position: "sticky",
	top: 0,
}))

const Left = styled("div")(({ theme }) => ({
	display: "flex",
	flex: 1,
	alignItems: "center",
	gap: 10,
}))

const TitleLg = styled("h4")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 700,
	color: theme.palette.cmstexts.dark,
	display: "none",
	[theme.breakpoints.up("lg")]: {
		display: "flex",
	},
}))

const TitleSm = styled("h4")(({ theme }) => ({
	fontSize: "2rem",
	fontWeight: 700,
	color: theme.palette.cmstexts.dark,
	display: "none",
	[theme.breakpoints.down("lg")]: {
		display: "flex",
		marginRight: 5,
	},
}))

const Center = styled("div")(({ theme }) => ({
	display: "flex",
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: theme.palette.primary.light,
	borderRadius: 5,
	paddingRight: 5,
}))

const SearchBar = styled("input")(({ theme }) => ({
	display: "flex",
	flex: 1,
	border: "none",
	borderRadius: 5,
	padding: 12,
	alignItems: "center",
	backgroundColor: "transparent",
	fontSize: 16,
}))

const Right = styled("div")(({ theme }) => ({
	display: "flex",
	flex: 1,
	alignItems: "center",
	justifyContent: "flex-end",
	gap: 10,
	position: "relative",
	[theme.breakpoints.down("lg")]: {
		flex: 4,
	},
}))

const Navbar = () => {
	return (
		<Container>
			<Left>
				<Church color="secondary" />
				<TitleLg> Church Management System </TitleLg>
				<TitleSm> CMS </TitleSm>
			</Left>
			<Center>
				<SearchBar placeholder="Search..." />
				<IconButton>
					<Search />
				</IconButton>
			</Center>
			<Right>
				<Badge badgeContent={4} color="secondary">
					<Notifications />
				</Badge>

				<STUserMenu />
			</Right>
		</Container>
	)
}

export default Navbar
