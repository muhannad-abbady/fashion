import { Box } from "@mui/material";

const Tag = ({ text, bgcolor }) => {
    const t = (word) => word

    return (
        <Box borderRadius="0px 8px" width="fit-content" sx={{ bgcolor: bgcolor, color: "#fff", fontSize: { xs: "12px", md: "14px" }, p: { xs: "3px 9px", md: "3px 14px" } }} mb={1}>
            {t(text)}
        </Box>
    );
}

export default Tag;