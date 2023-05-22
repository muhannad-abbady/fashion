import { Box, Grid, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import cssVars from "../../../styles/vars.module.scss"
import YourReview from "./yourReview";
import FullDescription from "./full-description";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MoreDetails = ({ product }) => {

    console.log(product)

    const t = (text) => text

    const [tab, setTab] = useState('1');
    const [tab2, setTab2] = useState('1');

    const afterEffect = { content: `""`, position: "absolute", left: 0, right: 0, bottom: "-1px", height: "3px", bgcolor: cssVars.primary }


    return (
        <Box >
            <Grid container columns={2} columnSpacing={5.5} sx={{ "@media(max-width:1200px)": { display: "none" } }}>
                <Grid item xs={2} lg={1}>
                    <Tabs onChange={(e, newValue) => { setTab(newValue) }}
                        aria-label="details-package-specs-tabs"
                        sx={{
                            borderBottom: `1px solid ${cssVars.lightGray}`, minHeight: "unset", '& button:hover': { color: cssVars.primary }, '& button .MuiTouchRipple-child': { bgcolor: 'unset' },
                            ' & button.active': { "::after": afterEffect },

                        }}
                    >
                        <Tab className={tab === "1" ? "active" : ''} label={t("Description")} value="1" sx={{
                            minHeight: "unset", color: cssVars.black, fontSize: "1rem", fontWeight: '500 !important', textTransform: "capitalize", p: "0 0 10px 0", mr: "40px",
                        }} />
                    </Tabs>
                    <Box py="35px" id="full-description">
                        <FullDescription product={product} />
                    </Box>
                </Grid>
                <Grid item xs={2} lg={1}>
                    <Tabs onChange={(e, newValue) => { setTab2(newValue) }}
                        aria-label="review-tabs"
                        sx={{ borderBottom: `1px solid ${cssVars.lightGray}`, minHeight: "unset", '& button:hover': { color: cssVars.primary }, '& button .MuiTouchRipple-child': { bgcolor: 'unset' }, ' & button.active': { "::after": afterEffect } }}
                    >
                        <Tab className={tab2 === "1" ? "active" : ''} label={`${t("Review")}  (${product?.rating?.count})`} value="1" sx={{ minHeight: "unset", color: cssVars.black, fontSize: "1rem", fontWeight: '500 !important', textTransform: "capitalize", p: "0 0 10px 0", mr: "40px" }} />
                        <Tab className={tab2 === "2" ? "active" : ''} label={t("Your Review")} value="2" sx={{ minHeight: "unset", color: cssVars.black, fontSize: "1rem", fontWeight: '500 !important', textTransform: "capitalize", p: "0 0 10px 0" }} />
                    </Tabs>
                    <Box py="35px">
                        {
                            <YourReview product={product} />
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box >

    );
}

export default MoreDetails;