import { Box } from "@mui/material"
import cssVars from '../../styles/vars.module.scss'
import ProductCardTop from "./product-card-top";
import ProductCardBottom from "./product-card-bottom";
import styles from './productCard.module.scss'
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    console.log(product)
    return (
        <Link to={`/${product.id}`} >
            <Box className={"product-card " + styles.productCard} borderRadius={cssVars.radius}
                sx={{
                    border: { md: `1px solid ${cssVars.lightGray}` },
                    pb: { xs: "190%", sm: "160%" },
                    position: "relative",
                    "&:hover .atc-btn": {
                        bgcolor: cssVars.primary, borderColor: cssVars.primary, color: cssVars.white,
                        ":hover": { bgcolor: cssVars.hoverColor, borderColor: cssVars.hoverColor }
                    },
                    "&:hover .actions": {
                        right: 0
                    },
                    "&:hover": {
                        boxShadow: cssVars.shadow
                    },
                    '&:hover .MuiCircularProgress-root': {
                        color: cssVars.white
                    },

                }}>
                <Box sx={{
                    position: "absolute", left: { xs: 0, sm: 23 }, right: { xs: 0, sm: 23 }, top: { xs: 0, sm: 23 }, bottom: { xs: 0, sm: 23 },
                    display: "flex", flexDirection: "column"
                }} >
                    <ProductCardTop product={product} />
                    <ProductCardBottom product={product} />
                </Box>
            </Box>
        </Link>

    );
}

export default ProductCard;