import { Box, Container, Grid, Stack, ListItem, FormControl, Select, MenuItem } from "@mui/material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import cssVars from "../../styles/vars.module.scss"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import styles from './header.module.scss'
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const TopBar = () => {

    const navigate = useNavigate()

    const t = (text) => text

    const [stores, setStores] = useState([])
    const [skip, setSkip] = useState(false)
    const { data } = []

    useEffect(() => {
        setStores(JSON.parse(localStorage.getItem('stores')) || [])
    }, [])

    useEffect(() => {
        if (data) {
            setStores(data.availableStores)
            setSkip(true)
            localStorage.setItem('stores', JSON.stringify(data.availableStores))
        }
    }, [data])

    const topBarRef = useRef()

    return (
        <Box id="topBar" position="relative" className="fs-14 ">
            <Grid ref={topBarRef} className="primary bg-extraLightBlue" alignItems="center" justifyContent="center" sx={{ height: { lg: "32px", xs: "fit-content" }, display: { lg: "flex", xs: "block" }, textAlign: { xs: "center", lg: "start" }, p: { xs: 1, lg: 0 } }}>
                <Box className="fw-500" component="p" my={1} sx={{ display: { xs: "flex", lg: "block" }, alignItems: "center", justifyContent: "center", marginTop: { xs: 0, lg: 1 } }}>
                    <LocalShippingOutlinedIcon fontSize="small" sx={{ mr: "10px", display: { xs: 'block', lg: "none" } }} />
                    {t("FREE SHIPPING AVAILABLE")}
                </Box>
                <LocalShippingOutlinedIcon fontSize="small" sx={{ mx: "15px", display: { xs: 'none', lg: "block" } }} />
                <Box className="black" component="p" my={1}>{t("WITH PURCHASE OVER CHF 35 BEFORE TAXES; CONNECT TO SEE YOUR PERSONAL BENEFITS")}</Box>
                <Box sx={{ display: { lg: 'none' }, position: "absolute", right: "8px", top: "7px", color: cssVars.primary }} onClick={() => { topBarRef.current.style.display = "none" }}>
                    <CloseIcon fontSize="small" />
                </Box>
            </Grid>
            <Container maxWidth="xl" sx={{ display: { xs: "none", lg: "block" } }} >
                <Grid display="flex" justifyContent="space-between" alignItems="center">
                    <Stack sx={{ mt: "8px", mb: "4px" }} padding={0} component="ul" direction="row" spacing={2}>
                        {/* <ListItem disablePadding sx={{ minWidth: "fit-content", ":hover": { color: cssVars.primary } }}> <Link href="/responsible-company.html">{t("Responsible Company")}</Link></ListItem> */}
                        <ListItem disablePadding sx={{ minWidth: "fit-content", ":hover": { color: cssVars.primary } }}> <Link href="/about-us.html">{t("About Us")}</Link></ListItem>
                        <ListItem disablePadding sx={{ minWidth: "fit-content", ":hover": { color: cssVars.primary } }}> <Link href="/contact-us.html">{t("Contact Us")}</Link></ListItem>
                    </Stack>
                    <Stack sx={{ mt: "8px", mb: "4px" }} padding={0} component="ul" direction="row" alignItems="center" spacing={2}>
                        <ListItem disablePadding sx={{ mt: "-4px" }}>
                            <FormControl fullWidth>
                                <Select
                                    className={styles.langSelect + " fs-14"}
                                    value="en"
                                    onChange={() => { }}
                                >
                                    {
                                        stores.map(store =>
                                            <MenuItem key={store.store_code} className="fs-14" value={store.store_code} sx={{ p: 0, "& a": { display: "block", width: "100%", padding: "6px 16px" } }}>
                                                <Link to="/" >{store.store_name}</Link>
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem disablePadding> <a href="#" target="_blank" rel="noreferrer"><FacebookRoundedIcon fontSize="medium" /></a></ListItem>
                        <ListItem disablePadding> <a href="#" target="_blank" rel="noreferrer"><InstagramIcon fontSize="medium" /></a></ListItem>
                    </Stack>
                </Grid>
            </Container>

        </Box >
    );
}

export default TopBar;