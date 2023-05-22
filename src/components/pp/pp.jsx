import { Box, Container } from "@mui/material";
import MoreDetails from "./more-details";
import ProductDetails from "./product-details";

const PP = ({ product }) => {

    return (
        <Container maxWidth="xl">
            <Box component="section" mb={{ xs: 5, lg: 9 }}>
                <ProductDetails product={product} />
            </Box>
            <Box component="section" mb={{ xs: 5, lg: 9 }}>
                <MoreDetails product={product} />
            </Box>
        </Container>
    )
}

export default PP;