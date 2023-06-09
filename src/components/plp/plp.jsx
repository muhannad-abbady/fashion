import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import parseSearchParams, { strEncode } from "../../helpers/SearchParams";
import CategoryBanner from "../category-banner";
import Filters from "../filters";
import Pagination from "../pagination";
import ProductList from "../product-list";
import TuneIcon from '@mui/icons-material/Tune';
import SortIcon from '@mui/icons-material/Sort';
import cssVars from '../../styles/vars.module.scss'
import Drawer from "../drawer/drawer";
import { Link } from "react-router-dom";
import img1 from "./warning1.jpg"
import img2 from "./warning2.jpg"

const PLP = ({ data, filtersData = [], sortData = [] }) => {
    // console.log(data)
    const t = (word) => word

    const dataPageCount = 12
    const [current_page, setCurrent_page] = useState(1)

    const [openFiltersDrawer, setOpenFiltersDrawer] = useState(false)
    const [openSortingDrawer, setOpenSortingDrawer] = useState(false)


    const isActiveSort = (value) => {
        return true
    }

    return (
        <Container maxWidth="xl">
            <Box component="section">
                <CategoryBanner data={[
                    { image: img1, title: 'Warning: the following products were made in factories contributing to global warming' },
                    { image: img2, title: 'Warning: the following products include synthetic fibers which contribute to microplastic pollution' }]} />
            </Box>

            <Box component="section">
                <Grid container columnSpacing={7} columns={{ xs: 1, lg: 4.75, xl: 4.75 }}>
                    <Grid item xs={4.75} lg={4.75} xl={4.75} paddingTop={2}>

                        <Grid container columns={2} columnSpacing={2} mb={5} sx={{ display: { xs: "flex", lg: "none" } }}>
                            <Drawer open={openSortingDrawer} setOpen={setOpenSortingDrawer} anchor="bottom" swipeable={false}>
                                {
                                    sortData.map(option =>
                                        <MenuItem sx={{ p: 0, "&>a": { p: "6px 16px", color: (isActiveSort(option) ? cssVars.red : cssVars.black) } }} key={option} onClick={() => { setOpenSortingDrawer(false) }} >
                                            <Link to="" style={{ display: "block", width: "100%" }}>{option}</Link>
                                        </MenuItem>
                                    )
                                }
                            </Drawer>
                        </Grid>
                        <ProductList products={data} category_path="/" />
                        {/* <Pagination pageCount={Math.ceil(data.length / dataPageCount)} btnCount={3} currPage={current_page} /> */}
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

export default PLP;