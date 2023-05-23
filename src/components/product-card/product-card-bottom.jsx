import { Box, Button, CircularProgress, Grid, Rating } from "@mui/material";
import PriceBox from "../price-box/priceBox";
import StockStatus from "../stock-status/stockStatus";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useState } from "react";
import styles from './productCard.module.scss'
import cssVars from '../../styles/vars.module.scss'

const ProductCardBottom = ({ product }) => {
    const t = (word) => word

    const openMiniCart = () => { }

    const [addToCartLoading, setAddToCartLoading] = useState(false)
    const enqueueSnackbar = () => { }


    return (
        <Box sx={{ position: "relative", fontSize: { xs: "3.7vw", sm: "100%" }, width: "100%" }}>
            <Grid sx={{
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: { xs: "start", md: "center" },
            }}
                display="flex" justifyContent="space-between"
            >
                <Box maxWidth={150} className={"primary fw-500 "} sx={{ display: "-webkit-box", "-webkit-line-clamp": "" }}>
                    {product?.category}
                </Box>
            </Grid>
            <Rating sx={{ mb: { xs: "0px", md: "0px" } }} size={"small"} name="read-only" value={product?.rating.rate} readOnly precision={0.1} />
            <Box my={{ xs: 1, md: 1 }} className={styles.name} height={{ sm: 44 }}>{product?.title}</Box>
            <Grid my={{ xs: 1, md: 2 }} display="flex" alignItems="center" justifyContent="space-between">
                <PriceBox product={product} sx={{ fontSize: { xs: "14px", md: "15px" } }} />
                <StockStatus product={product} />
            </Grid>
            <Button className="atc-btn" fullWidth
                sx={{ color: cssVars.black, fontWeight: "500 !important", fontSize: { xs: 12, sm: 15 }, borderRadius: '20px', height: { xs: 30, sm: 40 } }}
                variant="outlined"
            >
                {t("View product")}
            </Button>
        </Box>
    );
}

export default ProductCardBottom;