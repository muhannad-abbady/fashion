import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Divider, Experimental_CssVarsProvider, FormControlLabel, Grid, List, ListItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import cssVars from '../../styles/vars.module.scss'
import Drawer from '../drawer/drawer';
import PriceFilter from "../price-filter/priceFilter";

const Filters = ({ filters, openFiltersDrawer, setOpenFiltersDrawer }) => {

    const t = (word) => word
    const searchParams = {}
    const doFilter = () => { }
    const isChecked = () => { }
    const getFilterLabel = () => { return "Filter*" }
    return (
        <>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Box sx={{ fontSize: "18px", fontWeight: 500 }}>{t("Filters")}</Box>
                {searchParams.filters && Object.keys(searchParams.filters).map((fkey) =>
                    fkey === 'price'
                        ?
                        <Button key={fkey} className="fs-12" sx={{ borderRadius: '6px', py: 0.2, textTransform: "none", mr: 1, my: 0.5 }}
                            variant="contained" color="primary" endIcon={<CloseIcon fontSize="small" />}
                            onClick={(e) => { doFilter({ target: { checked: false } }, fkey) }}>
                            {searchParams.filters[fkey].join(' - ')}
                        </Button>
                        :
                        searchParams.filters[fkey].map(value =>
                            <Button key={`${fkey}-${value}`} className="fs-12" sx={{ borderRadius: '6px', py: 0.2, textTransform: "none", mr: 1, my: 0.5 }}
                                variant="contained" color="primary" endIcon={<CloseIcon fontSize="small" />}
                                onClick={(e) => { doFilter({ target: { checked: false } }, fkey, { value }) }}>
                                {getFilterLabel(fkey, value)}
                            </Button>
                        )
                )}
                <hr style={{ margin: "16px 0 0 0", opacity: 1, border: `1px solid ${cssVars.lightGray}` }} />

                {filters && filters.filter(item => item.options.length > 1).map((filter, i) =>
                    <Accordion disableGutters disablePadding key={filter.attribute_code} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color={cssVars.black} />}
                        >
                            <Box fontWeight={500}>{filter.label}</Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pr: "8px !important" }}>
                            {filter.attribute_code === "price" ?
                                <PriceFilter id={filter.attribute_code} count={filter.options.length} options={filter.options} />
                                :
                                <List disablePadding id={`fg-${i}`}
                                    sx={{
                                        maxHeight: 300, overflowY: "auto",
                                        "&::-webkit-scrollbar": { width: 8 },
                                        "&::-webkit-scrollbar-track": { background: 'unset' },
                                        "&::-webkit-scrollbar-thumb": { background: cssVars.gray, borderRadius: cssVars.radius }
                                    }}>
                                    {
                                        [...filter.options].sort((a, b) => a.label.localeCompare(b.label)).filter(f => !(f.label === "0" && f.value === "0")).map((option, j) =>
                                            <ListItem disablePadding key={`chk_${filter.attribute_code}_${option.value}`} mb={2}>
                                                <FormControlLabel
                                                    id={`chk_${filter.attribute_code}_${option.value}`}
                                                    label={option.label}
                                                    control={
                                                        <Checkbox
                                                            checked={isChecked(filter.attribute_code, option.value)}
                                                            onChange={(e) => { doFilter(e, filter.attribute_code, option) }} />
                                                    } />
                                            </ListItem>
                                        )
                                    }
                                </List>
                            }

                        </AccordionDetails>
                    </Accordion>
                )}
            </Box>
            <Drawer sx={{ display: { xs: "block", lg: "none" } }} open={openFiltersDrawer} setOpen={setOpenFiltersDrawer} anchor="right" swipeable={false}>
                <Box>
                    <Grid mx="-24px" px="24px" paddingBottom="15px" borderBottom={`1px solid #DFE1E2`} minWidth={320} display="flex" alignItems="center" justifyContent="space-between">
                        <Box sx={{ fontSize: "18px" }}>{t("Filters")}</Box>
                        <CloseIcon sx={{ fontSize: "28px", mb: 0.5 }} onClick={() => { setOpenFiltersDrawer(false) }} />
                    </Grid>
                    {
                        searchParams.filters
                            ?
                            <Grid mx="-24px" px="24px" py="15px" borderBottom={`1px solid #DFE1E2`} minWidth={320} maxWidth="100%" display="flex" alignItems="center" flexWrap="wrap">
                                {
                                    Object.keys(searchParams.filters).map((fkey) =>
                                        fkey === 'price'
                                            ?
                                            <Button key={fkey} className="fs-12" sx={{ borderRadius: '6px', py: 0.2, textTransform: "none", mr: 1, my: 0.5 }}
                                                variant="contained" color="primary" endIcon={<CloseIcon fontSize="small" />}
                                                onClick={(e) => { doFilter({ target: { checked: false } }, fkey) }}>
                                                {searchParams.filters[fkey].join(' - ')}
                                            </Button>
                                            :
                                            searchParams.filters[fkey].map(value =>
                                                <Button key={`${fkey}-${value}`} className="fs-12" sx={{ borderRadius: '6px', py: 0.2, textTransform: "none", mr: 1, my: 0.5 }}
                                                    variant="contained" color="primary" endIcon={<CloseIcon fontSize="small" />}
                                                    onClick={(e) => { doFilter({ target: { checked: false } }, fkey, { value }) }}>
                                                    {getFilterLabel(fkey, value)}
                                                </Button>
                                            )
                                    )
                                }
                            </Grid>
                            :
                            null
                    }

                    <Box py="15px">
                        {filters && filters.filter(item => item.options.length > 1).map((filter, i) =>
                            <Accordion disableGutters disablePadding key={filter.attribute_code} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon color={cssVars.black} />}
                                >
                                    <Box fontWeight={500}>{filter.label}</Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {filter.attribute_code === "price" ?
                                        <PriceFilter id={filter.attribute_code} count={filter.options.length} options={filter.options} />
                                        :
                                        <List disablePadding id={`fg-${i}`} >
                                            {
                                                [...filter.options].sort((a, b) => a.label.localeCompare(b.label)).filter(f => !(f.label === "0" && f.value === "0")).map((option, j) =>
                                                    <ListItem disablePadding key={`chk_${filter.attribute_code}_${option.value}`} mb={2}>
                                                        <FormControlLabel
                                                            id={`chk_${filter.attribute_code}_${option.value}`}
                                                            label={option.label}
                                                            control={
                                                                <Checkbox
                                                                    checked={isChecked(filter.attribute_code, option.value)}
                                                                    onChange={(e) => { doFilter(e, filter.attribute_code, option) }} />
                                                            } />
                                                    </ListItem>
                                                )
                                            }
                                        </List>
                                    }

                                </AccordionDetails>
                            </Accordion>
                        )}
                    </Box>
                </Box>
            </Drawer>
        </>

    );
}

export default Filters;