import { Box, FormControl, Grid, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Drawer from "../drawer/drawer";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import cssVars from '../../styles/vars.module.scss'
import { useContext, useState } from "react";
import { strEncode } from "../../helpers/SearchParams";
import { useNavigate } from "react-router-dom";

const SearchDrawer = ({ open, setOpen }) => {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')

    const onNavigate = () => {
        setOpen(false)
    }

    return (
        <Drawer open={open} setOpen={setOpen} anchor="right">
            <Grid mx="-24px" px="16px" paddingBottom="15px" minWidth={320} display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" justifyContent="center" borderRadius="50%" sx={{ width: 34, height: 34, padding: '9px', mr: "12px", bgcolor: cssVars.extraLightGray }} onClick={() => setOpen(false)}>
                    <ArrowBackIcon fontSize="small" />
                </Box>
                <FormControl id="mobileSearch" fullWidth variant="standard">
                    <OutlinedInput
                        type="search"
                        sx={{ borderRadius: cssVars.radius }}
                        placeholder="Search"
                        size="small"
                        value={search} onChange={(e) => { setSearch(e.target.value) }}
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
            </Grid>
            <Box mx="-24px" px="0">
                {/* <SearchRes onNavigate={onNavigate} /> */}
            </Box>
        </Drawer>
    );
}

export default SearchDrawer;