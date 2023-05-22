import { Box, Grid, Rating } from "@mui/material";
import PriceBox from "../../price-box";
import cssVars from "../../../styles/vars.module.scss"
import StockStatus from "../../stock-status";
import Actions from "./actions";
import { useEffect, useRef, useState } from "react";
import ProductSummary from "./product-summary";
import { parseRating } from "../../../helpers/parseRating";
import ShowBox from "./show-box/showBox";
import { Link } from "react-router-dom";

const ProductDetails = ({ product }) => {

    const t = (text) => text

    const [showSummary, setShowSummary] = useState(false)

    const productDetailsRef = useRef()

    return (
        <>
            <Grid ref={productDetailsRef} container columns={2} columnSpacing={5.5}>
                <Grid item xs={2} lg={1} sx={{ position: { lg: "sticky" }, top: { lg: 10 }, mb: { xs: "27px", lg: 0 } }} height="100%">
                    <ShowBox product={product} />
                </Grid>
                <Grid item xs={2} lg={1} position="relative">
                    <Box fontSize={15} sx={{ opacity: 0.6 }} mb="12px">
                        <Box component="span" sx={{ display: { xs: "none", lg: "inline-block" } }}>{t("Product Code") + ":"}</Box> <Box component="span" sx={{ color: cssVars.black }} >{product?.id}</Box>
                    </Box>

                    <Box sx={{ fontSize: { xs: '24px', lg: "30px" } }} mb="18px">{product?.name}</Box>
                    <Grid display={{ lg: "flex" }} justifyContent="space-between" alignItems="center" mb="18px" pb={{ lg: "18px" }} borderBottom={{ lg: `1px solid ${cssVars.lightGray}` }}>
                        <PriceBox product={product} variant="pp" />
                        <Box mt={{ xs: "21px", lg: 0 }} display={{ xs: "flex", lg: "block" }} alignItems="center" justifyContent="space-between" sx={{
                            '@media(max-width:1200px)': { borderTop: `1px solid ${cssVars.lightGray}`, borderBottom: `1px solid ${cssVars.lightGray}`, py: "16px" }
                        }}>
                            <Box display="flex" alignItems="center" justifyContent={{ lg: "end" }}>
                                <Box fontSize={{ xs: 15, lg: 14 }} mr={1} pt={0.2} fontWeight={500}>{product?.rating.rate}</Box>
                                <Rating size="small" name="read-only" value={product?.rating.rate} readOnly precision={0.1} />
                            </Box>
                            <Box fontSize={{ xs: 15, lg: 16 }}>{product?.rating?.count + " " + t("Customer review")}</Box>
                        </Box>
                    </Grid>
                    <Box position="absolute" right={0} sx={{ "@media(max-width:1200px)": { top: 1 } }}>
                        <StockStatus product={product} variant={"pp"} />
                    </Box>
                    <Box pb={"30px"} borderBottom={`1px solid ${cssVars.lightGray}`} mb="-34px">
                        <Box mt="50px" >
                            <Box dangerouslySetInnerHTML={{ __html: (product?.description) }} sx={{ "&>p": { mb: { xs: "25px", lg: 0.5 } } }} />
                            <Link to={"#full-description"}>
                                <Box component="span"
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        textDecoration: "underline",
                                        "@media(max-width:1200px)": {
                                            fontSize: 14,
                                            fontWeight: 400,
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "40px",
                                            border: `1px solid ${cssVars.black}`,
                                            width: "100%",
                                            borderRadius: cssVars.radius
                                        }
                                    }}>
                                </Box>
                            </Link>
                        </Box>

                    </Box>

                    <Actions product={product} />
                </Grid>
            </Grid >
            <ProductSummary product={product} showSummary={showSummary} parentImage={product?.image} />
        </>

    );
}

export default ProductDetails;