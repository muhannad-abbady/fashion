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

const PLP = ({ data, filtersData = [], sortData = [] }) => {
    console.log(data)
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
                <CategoryBanner data={[{ image: '', title: '' }, { image: '', title: '' }]} />
            </Box>

            <Box component="section">
                <Grid container columnSpacing={7} columns={{ xs: 1, lg: 4.75, xl: 4.75 }}>
                    <Grid component="aside" item xs={1} lg={1.25} xl={1} position="sticky" top={32} height="100%">
                        {/* <Filters
                            filters={filtersData}
                            openFiltersDrawer={openFiltersDrawer}
                            setOpenFiltersDrawer={setOpenFiltersDrawer} /> */}
                    </Grid>
                    <Grid item xs={4.75} lg={3.5} xl={3.75} >
                        <Grid sx={{ display: { xs: "none", lg: "flex" } }} alignItems="end" mt="-22px" justifyContent="space-between">
                            <Box>{data.length} {t("Results")}</Box>
                            <FormControl variant="standard" sx={{ minWidth: 225 }}>
                                <InputLabel id="demo-simple-select-standard-label">{t("Sort by")}</InputLabel>
                                <Select
                                    labelId="sort-label"
                                    id="sort"
                                    label={t("Sort by")}
                                    value={""}
                                >
                                    {
                                        sortData?.map(option =>
                                            <MenuItem sx={{ p: 0, "&>a": { p: "6px 16px" } }} key={option} value={option}>
                                                <Link to="/" style={{ display: "block", width: "100%" }}>{option}</Link>
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container columns={2} columnSpacing={2} mb={5} sx={{ display: { xs: "flex", lg: "none" } }}>
                            <Grid item xs={2} mb={2}>{data.length} {t("Results")}</Grid>
                            <Grid item xs={1}>
                                <Button fullWidth sx={{ borderRadius: '6px', justifyContent: "space-between" }} variant="outlined" color="secondary"
                                    endIcon={<TuneIcon />} onClick={() => { setOpenFiltersDrawer(true) }}>
                                    {t("Filter")}
                                </Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button fullWidth sx={{ borderRadius: '6px', justifyContent: "space-between" }} variant="outlined" color="secondary"
                                    endIcon={<SortIcon />} onClick={() => { setOpenSortingDrawer(true) }}>
                                    {t("Sort by")}
                                </Button>
                            </Grid>
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
                        <Pagination pageCount={Math.ceil(data.length / dataPageCount)} btnCount={3} currPage={current_page} />
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

export default PLP;