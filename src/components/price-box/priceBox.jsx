import { Box } from "@mui/material";
import useAddZeroes from "../../hooks/useAddZeroes";

const PriceBox = ({ product, variant = "plp", sx }) => {
    const price = product.price;
    const old_price = null;

    const { z } = useAddZeroes()
    return (
        <Box className="fw-500" sx={{ fontSize: (variant === 'plp' ? "1rem" : { xs: "26px", lg: "30px" }), ...sx }}>
            {old_price ? <Box mr={0.5} sx={{ textDecoration: "line-through" }} className="old-price gray" component="span" > ${z(old_price)}</Box > : null}
            <Box component="span" >${z(price)}</Box>
        </Box >
    );
}

export default PriceBox;