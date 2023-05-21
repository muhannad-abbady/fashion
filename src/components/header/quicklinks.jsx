import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Badge, Box, Divider, Grid, List, MenuItem, useMediaQuery } from '@mui/material';
import styles from './header.module.scss'
import { useState } from 'react';
import Drawer from '../drawer/drawer';
import SearchIcon from '@mui/icons-material/Search';
import SearchDrawer from './searchDrawer';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GridViewIcon from '@mui/icons-material/GridView';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import cssVars from '../../styles/vars.module.scss'
import ListButton from './listButton';
import MyBadge from '../my-badge';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useScreenResize from '../../hooks/useScreenResize';


const QuickLinks = () => {

    const isAuthenticated = false

    const t = (text) => text

    const [openSearch, setOpenSearch] = useState(false)


    const navigate = useNavigate()

    const [customerData, logOut] = useState()
    const openMiniCart = () => { }
    const [popOpen, setPopOpen] = useState(false)

    const closePop = (e) => {
        const condition = [document.getElementById('popUpMenu'), document.getElementById('popUpLink')].indexOf(e.relatedTarget) > -1
        if (!condition) {
            setPopOpen(false)
        }
    }

    const compareList = []
    const cart = { items: [] }

    const isLG = useScreenResize()

    return (
        <>
            <Grid display="flex" alignItems="center" sx={{ width: { lg: 350 }, mb: { xs: 1, lg: 0 }, justifyContent: { lg: "space-between", xs: "end" } }}>
                <Box alignItems="center" sx={{ display: { xs: "flex", lg: 'none' } }}>
                    <SearchIcon onClick={() => { setOpenSearch(true) }} sx={{ mr: { xs: 1.1, lg: 1 }, fontSize: 28 }} />
                    <SearchDrawer open={openSearch} setOpen={setOpenSearch} />
                </Box>
                <Box>
                    <Link href="/compare.html" className={styles.quickLink}>
                        <MyBadge count={compareList?.item_count}>
                            <Box sx={{ "& svg": { mr: { xs: 2, lg: 1 } } }}>
                                <CompareArrowsIcon style={{ fontSize: 28 }} />
                            </Box>
                            <Box component="span" sx={{ display: { xs: "none", lg: "block" } }}>{t("Compare")}</Box>
                        </MyBadge>
                    </Link>
                </Box>
                <Box className={styles.quickLink} sx={{ cursor: "pointer" }} onClick={openMiniCart}>
                    <MyBadge count={cart.total_quantity}>
                        <LocalMallOutlinedIcon sx={{ mr: { xs: 1.5, lg: 1 }, fontSize: 24, }} />
                        <Box component="span" sx={{ display: { xs: "none", lg: "block" } }}>{t("Cart")}</Box>
                    </MyBadge>
                </Box>
                {
                    isAuthenticated && customerData.firstname && customerData.lastname
                        ?
                        <Box
                            position="relative"
                        >
                            <Link id="popUpLink" onMouseLeave={(e) => { closePop(e) }} href="/customer/account/my-dashboard.html" className={styles.quickLink} onMouseEnter={() => setPopOpen(true)}>
                                <PersonOutlineOutlinedIcon sx={{ mr: { xs: 0, lg: 1 }, fontSize: 28, }} />
                                <Box component="span" sx={{ display: { xs: "none", lg: "block" } }} style={{ textTransform: "uppercase" }}>
                                    {customerData?.firstname?.at(0)}{customerData?.lastname?.at(0)}
                                </Box>
                            </Link>

                            <Box
                                zIndex={1024}
                                position="absolute" top={28} right={0} bgcolor={cssVars.white}
                                sx={{ boxShadow: cssVars.shadow, borderRadius: cssVars.radius }} display={popOpen && isLG ? "block" : "none"}>
                                <List id="popUpMenu" onMouseLeave={(e) => { closePop(e) }} sx={{
                                    py: "8px !important", px: "0px ! important", borderRadius: cssVars.radius, width: "212px ! important",
                                    '& div[role="button"]': { p: "4px 22px" }
                                }}>
                                    <ListButton
                                        onBtnClick={() => { setPopOpen(false); }}
                                        icon={<GridViewIcon sx={{ width: "20px", height: "20px", color: cssVars.black }} />}
                                        text={t("My dashboard")}
                                    />

                                    <ListButton
                                        onBtnClick={() => { setPopOpen(false); }}
                                        icon={<ShoppingBagOutlinedIcon sx={{ width: "20px", height: "20px", color: cssVars.black }} />}
                                        text={t("My orders")}
                                    />

                                    <ListButton
                                        onBtnClick={() => { setPopOpen(false); }}
                                        icon={<FmdGoodOutlinedIcon sx={{ width: "20px", height: "20px", color: cssVars.black }} />}
                                        text={t("Addresses")}
                                    />

                                    <ListButton
                                        onBtnClick={() => { setPopOpen(false); }}
                                        icon={<FavoriteBorderOutlinedIcon sx={{ width: "20px", height: "20px", color: cssVars.black }} />}
                                        text={t("My wishlist")}
                                    />

                                    <ListButton
                                        onBtnClick={() => { setPopOpen(false); }}
                                        icon={<PersonOutlineIcon sx={{ width: "20px", height: "20px", color: cssVars.black }} />}
                                        text={t("Profile information")}
                                    />
                                    <Divider sx={{ borderColor: cssVars.gray }} />
                                    <ListButton
                                        onBtnClick={() => { setPopOpen(false); logOut() }}
                                        icon={<LogoutIcon sx={{ width: "20px", height: "20px", color: cssVars.red }} />}
                                        text={t("Log out")}
                                    />
                                </List>
                            </Box>
                        </Box>
                        :
                        <Link to="/" className={styles.quickLink} >
                            <PersonOutlineOutlinedIcon sx={{ mr: 0, fontSize: 28, }} />
                            <Box component="span" sx={{ display: { xs: "none", lg: "block" } }}>
                                {t("Sign in")}
                            </Box>
                        </Link>
                }
            </Grid>
        </>
    );
}

export default QuickLinks;