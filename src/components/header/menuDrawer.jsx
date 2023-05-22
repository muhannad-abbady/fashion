import { Box, Grid, List, ListItem, MenuItem, Skeleton } from "@mui/material";
import Drawer from "../drawer/drawer";
import CloseIcon from '@mui/icons-material/Close';
import cssVars from "../../styles/vars.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";


const stack = []
const breadcrumb = []

const MenuDrawer = ({ open, setOpen }) => {
    const { categoryList } = [{ title: "Home Page", url: "/" }]

    const [currMenu, setCurrMenu] = useState([])
    const [topHeader, setTopHeader] = useState(null)
    const [level, setLevel] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        if (categoryList) {
            stack.push(categoryList)
            setCurrMenu(categoryList)
            setTopHeader(null)
        }
    }, [categoryList])


    const [openLang, setOpenLang] = useState(false)

    const [stores, setStores] = useState([])
    const data1 = ""

    const t = (word) => word

    useEffect(() => {
        setStores(JSON.parse(localStorage.getItem('stores')) || [])
    }, [])

    return (
        <Drawer anchor="left" open={open} setOpen={setOpen} >
            <Grid mx="-24px" px="24px" paddingBottom="15px" borderBottom={`1px solid #DFE1E2`} minWidth={320} display="flex" alignItems="center" justifyContent="space-between">
                {/* <img src="../../media/logo.jpg" alt="Logo" /> */}
                <CloseIcon sx={{ fontSize: "28px", mb: 1.2 }} onClick={() => { setOpen(false) }} />
            </Grid>
            {topHeader}
            <Box sx={{ textTransform: 'capitalize', py: "10px" }}>
                {
                    currMenu.map(cat =>
                        <Box key={cat.title} borderBottom={`2px solid ${cssVars.extraLightGray}`} py="16px" sx={{ ":hover": { color: cssVars.red } }}>
                            <Link to="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                {cat.name}
                                {cat?.children?.length > 0 ? <ArrowForwardIosIcon sx={{ fontSize: "12px" }} /> : null}
                            </Link>
                        </Box>
                    )
                }
                {
                    level === 0
                        ?
                        <Box position="absolute" bottom={0} left={0} right={0} px="24px" borderTop={`2px solid ${cssVars.extraLightGray}`} py="16px" sx={{ ":hover": { color: cssVars.red } }}>
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                                onClick={() => { setOpen(false); setOpenLang(true) }}>
                                <Box display="flex" alignItems="center">
                                    {t("Language")}
                                    <Box ml={1} color={cssVars.red}>{`(${stores.filter(store => store.store_code === "en").at(0)?.store_name})`}</Box>
                                </Box>

                                <Drawer open={openLang} setOpen={setOpenLang} anchor="bottom">
                                    {
                                        stores.map(store =>
                                            <MenuItem key={store.store_code} value={store.store_code} onClick={() => { setOpenLang(false) }}
                                                sx={{ display: "block", p: "0 !important", minHeight: "unset", width: "100%", "& a": { display: "block", p: "12px 16px", width: "100%" } }}>
                                                <Link to="/" >{store.store_name}</Link>
                                            </MenuItem>
                                        )
                                    }
                                </Drawer>
                                <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
                            </Box>
                        </Box>
                        :
                        null
                }
            </Box>
        </Drawer>
    );
}

export default MenuDrawer;