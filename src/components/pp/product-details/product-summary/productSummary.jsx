import { Box, Container, Grid } from "@mui/material";
import Actions from "../actions";
import cssVars from "../../../../styles/vars.module.scss"

const ProductSummary = ({ product, showSummary, parentImage }) => {
    return (
        showSummary
            ?
            <Box height={110} bgcolor="#ffffff" position="fixed" top={0} right={0} left={0} zIndex={16} boxShadow={cssVars.shadow}
                sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Container maxWidth="xl" sx={{ height: "100%" }}>
                    <Grid container display="flex" alignItems="center" columns={2} columnSpacing={5.5} height="100%">
                        <Grid item xs={1} display="flex" alignItems="center">
                            <img width={80} height={80} alt={product?.name} src={product?.image} style={{ objectFit: "contain", objectPosition: "center" }} />
                            <Box className="details" fontSize={15} ml={2}>
                                <Box sx={{ my: 0.5, fontSize: 20 }}>{product?.name}</Box>
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Actions product={product} variant="summary" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            :
            null
    );
}

export default ProductSummary;