
import { useEffect, useState } from "react";
import { Box, Container, Divider, Grid, ListItem, Stack } from "@mui/material";
import cssVars from "../../styles/vars.module.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './header.module.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    const data = [{ title: "Home Page", url: "/" }]

    const [headerCats, setHeaderCats] = useState([])
    const [subCats, setSubCats] = useState([])
    const [openedCat, setOpenedCat] = useState("")
    const [activeImage, setActiveImage] = useState("")


    const openMenu = (e, cat) => {

    }

    const closeMenu = (e) => {

    }

    const setImageOnHover = (cat) => {
    }

    return (
        <Container sx={{ position: "relative" }} maxWidth="xl" component="nav">
            <Stack id="nav-list" padding={0} component="ul" direction="row" justifyContent="left" alignItems="center" sx={{ textTransform: 'capitalize' }}>
                {
                    headerCats?.length > 0
                        ?
                        headerCats.map((cat, index) =>
                            <>
                                <ListItem key={cat.uid} disablePadding sx={{ width: "fit-content", ":hover": { color: cssVars.hoverColor } }}>
                                    <Link href={'/' + cat.canonical_url} onMouseEnter={(e) => { openMenu(e, cat) }} onMouseLeave={(e) => { closeMenu(e) }} style={{ display: "flex", alignItems: "center" }}>
                                        {cat.name}
                                        {cat.children.length > 0 ? <KeyboardArrowDownIcon sx={{ ml: 0.4, mb: 0.3 }} /> : null}
                                    </Link>
                                </ListItem>
                                {index < headerCats.length - 1 ?
                                    <Divider orientation="vertical" flexItem sx={{ borderColor: cssVars.lightGray, mx: "23px" }} />
                                    :
                                    null
                                }
                            </>
                        )
                        :
                        <Box height={26.39}></Box>
                }
            </Stack>
            <Box
                onMouseLeave={(e) => { closeMenu(e) }}
                mt={-2} sx={{ position: "absolute", bgcolor: "#FFF", width: "100%" }} id="navDropDownMenu" className={styles.megaMenu}>
                {/* <Typography pb={1} component='h3' className="fs-18 gray">{openedCat}</Typography> */}
                <Grid container columns={12}>
                    <Grid item lg={3} component="ul" pl={1}>
                        {
                            subCats.slice(0, 8).map((cat, i) =>
                                <ListItem key={cat.uid} sx={{ width: "fit-content", ":hover": { color: cssVars.hoverColor } }} onMouseEnter={() => { setImageOnHover(cat) }}>
                                    <Link href={'/' + cat.canonical_url}>
                                        {cat.name}
                                    </Link>
                                </ListItem>
                            )
                        }
                    </Grid>
                    <Grid item lg={3} component="ul" pl={1}>
                        {
                            subCats.slice(8, 16).map((cat, i) =>
                                <ListItem key={cat.uid} sx={{ width: "fit-content", ":hover": { color: cssVars.hoverColor } }} onMouseEnter={() => { setImageOnHover(cat) }}>
                                    <Link href={'/' + cat.canonical_url}>
                                        {cat.name}
                                    </Link>
                                </ListItem>
                            )
                        }
                    </Grid>
                    <Grid item lg={3} component="ul" pl={1}>
                        {
                            subCats.slice(16, 24).map((cat, i) =>
                                <ListItem key={cat.uid} sx={{ width: "fit-content", ":hover": { color: cssVars.hoverColor } }} onMouseEnter={() => { setImageOnHover(cat) }}>
                                    <Link href={'/' + cat.canonical_url}>
                                        {cat.name}
                                    </Link>
                                </ListItem>
                            )
                        }
                    </Grid>
                    <Grid item lg={3} pr={1} position="relative">
                        {activeImage ? <img alt="Category Image" src={activeImage} style={{ objectFit: "contain", objectPosition: "center" }} /> : null}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Navbar;