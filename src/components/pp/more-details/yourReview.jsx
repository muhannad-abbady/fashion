import { Alert, Box, Button, CircularProgress, Rating, TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { useContext, useState } from "react";
import cssVars from "../../../styles/vars.module.scss"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const YourReview = ({ product }) => {
    const t = (text) => text
    const loading = false

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")

    const handleSubmit = (e) => {

    }

    return (
        <Box component="form" onSubmit={handleSubmit} autoComplete="off">
            <Box fontSize={18} fontWeight={600} mb="24px">{t("Write a Review for this product")}</Box>
            <Box mb="12px">{t("Your rating")}</Box>
            <Rating size="medium" value={rating} onChange={(e, newValue) => { setRating(newValue) }} precision={1} sx={{ mb: "24px" }} />
            <TextField
                id="outlined-textarea"
                label={t("Your review")}
                placeholder={t("Review")}
                fullWidth
                type="text"
                value={review}
                multiline
                rows={4}
                onChange={(e) => { setReview(e.target.value) }}
            />
            <Button disabled={rating === 0 || !review || loading} type="submit" sx={{ fontWeight: "400 !important", mt: "24px", borderRadius: '20px', bgcolor: cssVars.primary, borderColor: cssVars.primary, color: "#FFF !important", ":hover": { bgcolor: cssVars.hoverColor, borderColor: cssVars.hoverColor, color: "#FFF" }, '&[disabled]': { opacity: 0.5 }, p: "12px 30px" }} variant="outlined" >
                {t("Submit")}
                {loading ? <CircularProgress sx={{ ml: 1 }} style={{ width: "15px", height: "15px", color: cssVars.white }} /> : null}
            </Button>
        </Box >
    );
}

export default YourReview;