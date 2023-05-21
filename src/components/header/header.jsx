
import { useContext, useEffect, useRef, useState } from "react"
import { Box, ClickAwayListener, Container, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Popper } from "@mui/material"
import TopBar from "./topbar"
import styles from './header.module.scss'
import logo from "../../media/logo.jpg"
import cssVars from "../../styles/vars.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import QuickLinks from "./quicklinks"
import Navbar from "./navbar"
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from "./menuDrawer"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onNavigate = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const srchRef = useRef()

    const navigate = useNavigate()

    const [search, setSearch] = useContext('')

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <Box className={styles.header} pb="6px" sx={{ borderBottom: { xs: `1px solid ${cssVars.lightGray}`, lg: `2px solid ${cssVars.extraLightGray}` } }}>
            {/* <TopBar /> */}
            {/* <Container maxWidth="xl" sx={{ my: { xs: 1, lg: 3 }, pt: { xs: "6px", lg: 0 } }} >
                <Grid container columns={{ xs: 11, lg: 131 }} alignItems="center">
                    <Grid item xs={6} lg={36} display="flex">
                        <MenuIcon sx={{ display: { lg: "none" }, fontSize: 30, mb: 1, mr: "18px" }} onClick={() => { setOpenMenu(true) }} />
                        <MenuDrawer open={openMenu} setOpen={setOpenMenu} />
                        <img scr={logo} alt="Logo" />
                    </Grid>
                    <Grid item lg={59} sx={{ display: { xs: "none", lg: "block" } }} position="relative">
                        <ClickAwayListener onClickAway={() => { setAnchorEl(null) }}>
                            <Box>
                                <FormControl ref={srchRef} id="mainSearch" fullWidth variant="standard" aria-describedby={id} onClick={handleClick}
                                    sx={{ "& fieldset, .Mui-focused fieldset": { borderColor: `${cssVars.gray} !important` } }}>
                                    <OutlinedInput
                                        type="search"
                                        sx={{ borderRadius: cssVars.radius }}
                                        placeholder="Search"
                                        size="small"
                                        value={search}
                                        onChange={(e) => { setSearch(e.target.value) }}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                onNavigate()
                                            }
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton edge="end">
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Popper
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    sx={{
                                        width: srchRef.current?.offsetWidth,
                                        boxShadow: cssVars.shadow,
                                        zIndex: '4096',
                                        background: "#ffffff",
                                        borderRadius: cssVars.radius
                                    }}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                </Popper>
                            </Box>
                        </ClickAwayListener>
                    </Grid>

                    <Grid item xs={5} lg={36} display="flex" justifyContent="end" alignItems="center" sx={{ pl: { xs: 5, lg: 0 } }}>
                        <QuickLinks />
                    </Grid>
                </Grid>
            </Container> */}
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
                {/* <Navbar /> */}
            </Box>
        </Box >
    )
}

export default Header;