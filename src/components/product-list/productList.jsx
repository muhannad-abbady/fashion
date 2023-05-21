import { Box, Grid } from "@mui/material";
import ProductCard from "../product-card";

const ProductList = ({ products, category_path }) => {

    return (
        <Box className="products-list" mt={2} mb={5}>
            <Grid container rowSpacing={{ xs: "45px", sm: "30px" }} columnSpacing={{ xs: "16px", sm: "30px" }} columns={{ xs: 2, md: 3, xl: 4 }}>
                {
                    products.map((product) =>
                        <Grid item xs={1} key={product.sku}>
                            <ProductCard product={product} category_path={category_path} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
}

export default ProductList;