import { Box, Grid } from "@mui/material";
import cssVars from "../../styles/vars.module.scss"

const StockStatus = ({ product, variant = "product-card" }) => {

    const t = (word) => word

    const getStockInfo = (quantity, allowBackOrder) => {
        if (quantity > 0) {
            return { text: t("In Stock"), color: cssVars.green }
        }
        else {
            if (allowBackOrder) {
                return { text: t("Available Soon"), color: cssVars.yellow }
            }
            else {
                return { text: t("Out of Stock"), color: cssVars.red }
            }
        }
    }

    const stockInfo = true

    return (
        <Grid display="flex" alignItems="center">
            <Box sx={{ display: { xs: (variant === "product-card" ? 'none' : "block"), sm: "block" } }} fontSize={variant === "product-card" ? "12px" : "14px"} fontWeight={500} component="span" mr={0.5}>{stockInfo.text}</Box>
            <Box component="span" width={14} height={14} borderRadius="50%" bgcolor={stockInfo.color} />
        </Grid>
    );
}

export default StockStatus;