import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useContext, useState } from "react";
import Counter from "../../../counter";
import cssVars from "../../../../styles/vars.module.scss"
import ActionIconButton from "../../../action-icon-button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Share from "./share";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Actions = ({ product, variant = "" }) => {
    const [counter, setCounter] = useState(1)
    const t = (text) => text
    const isFav = () => false
    const handleClick = () => { }
    const addRemoveLoading = false
    const isCompared = () => false
    const handleClick1 = () => { }
    const addRemoveLoading1 = false
    const openMiniCart = () => { }
    const cart = { items: [] }
    const addProductsToCart = () => { }

    const [addToCartLoading, setAddToCartLoading] = useState(false)

    const getProductMaxQty = () => {
        return 1000
    }

    const addToCart = () => {
    }

    return (
        <Box mt={variant !== 'summary' ? "50px" : 0} sx={{
            '@media(max-width:1200px)': {
                p: "8px 16px",
                bgcolor: "#ffffff",
                position: "fixed",
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: 16
            }
        }}>
            <Grid display="flex" alignItems="center" flexWrap="wrap">
                <Counter
                    step={1}
                    counter={counter}
                    setCounter={setCounter}
                />
                <Button
                    sx={{
                        borderRadius: '25px', ml: 2, width: "calc(100% - 154px)", height: "48px !important",
                        bgcolor: cssVars.primary, borderColor: cssVars.primary, color: cssVars.white,
                        ":hover": { bgcolor: cssVars.hoverColor, borderColor: cssVars.hoverColor, color: cssVars.white }
                    }}
                    variant="outlined" color="secondary" startIcon={<LocalMallOutlinedIcon />}
                    onClick={(e) => { }}
                    disabled={false}
                >
                    {t("Add to cart")}
                    {addToCartLoading ? <CircularProgress sx={{ ml: 1, mt: -0.34 }} style={{ width: "15px", height: "15px", color: cssVars.white }} /> : null}
                </Button>
            </Grid>
            {
                variant !== 'summary'
                    ?
                    <Grid mt="30px" display={{ xs: "none", lg: "flex" }} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                        <Box display="flex" alignItems="center">
                            <ActionIconButton icon={<FavoriteBorderOutlinedIcon />} iconFilled={<FavoriteIcon />} active={isFav()} text="Add to favorites"
                                onClick={(e) => { }} isLoading={false} />
                            <ActionIconButton icon={<CompareArrowsIcon />} iconFilled={<CompareArrowsIcon />} active={false} text="Add to compare"
                                onClick={(e) => { }} isLoading={false} />
                        </Box>
                        <Share product={product} />
                    </Grid>
                    :
                    null
            }
        </Box >
    );
}

export default Actions;