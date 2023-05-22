import { Box } from "@mui/material";
import cssVars from "../../../../../styles/vars.module.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from "react-router-dom";

const Share = ({ product }) => {
    const t = (text) => text
    return (
        <Box display="flex" alignItems="center">
            <Box fontWeight={500} mr="22px">{t("Share")}</Box>
            <Link to={"/"} target="_blank"
                style={{
                    width: 34, height: 34, backgroundColor: cssVars.extraLightGray, borderRadius: "50%",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "6px"
                }}>
                <InstagramIcon />
            </Link>
            <Link to="#"
                style={{
                    width: 34, height: 34, backgroundColor: cssVars.extraLightGray, borderRadius: "50%",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "6px"
                }}>
                <FacebookIcon />
            </Link>
            <Link to="#"
                style={{
                    width: 34, height: 34, backgroundColor: cssVars.extraLightGray, borderRadius: "50%",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "6px"
                }}>
                <LinkedinIcon />
            </Link>
            <Link to="#"
                style={{
                    width: 34, height: 34, backgroundColor: cssVars.extraLightGray, borderRadius: "50%",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <PinterestIcon />
            </Link>
        </Box >
    );
}

export default Share;
