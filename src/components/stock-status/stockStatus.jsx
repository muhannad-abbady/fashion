import { Box, Grid } from "@mui/material";
import cssVars from "../../styles/vars.module.scss"
import SpaIcon from '@mui/icons-material/Spa';
const StockStatus = ({ product, variant = "product-card" }) => {

    const stockInfo = true
    console.log(product)
    return (
        <Grid display="flex" alignItems="center">
            <Box sx={{ display: { xs: (variant === "product-card" ? 'none' : "block"), sm: "block" } }} fontSize={variant === "product-card" ? "12px" : "14px"} fontWeight={500} component="span" mr={0.5}>{stockInfo.text}</Box>
            <Box component="span" width={14} height={14} borderRadius="50%" bgcolor={stockInfo.color} />
            {product.green ? <SpaIcon sx={{ color: cssVars.green }} /> : null}
        </Grid>
    );
}

export default StockStatus;