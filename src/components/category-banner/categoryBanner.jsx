import { Box } from "@mui/material";
import cssVars from '../../styles/vars.module.scss'
const CategoryBanner = ({ data = [] }) => {
    console.log(data)
    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between" }} >
            {
                data.map(item =>
                    <Box
                        sx={{
                            border: "1px solid " + cssVars.lightGray,
                            borderRadius: { xs: 0, md: cssVars.radius },
                            height: { xs: '200px', sm: '270px' },
                            backgroundImage: `url("${item?.image}"), linear-gradient(180deg, #221F1F00 0%, #000000 100%)`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            marginLeft: { xs: "calc(50% - 50vw)", md: 0 },
                            width: { xs: "100%", sm: "49.5%" },
                            position: "relative"
                        }}>
                        <Box sx={{
                            position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
                            background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(255,255,255,0) 50%)",
                            borderRadius: { xs: 0, md: cssVars.radius },
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: { xs: "center", md: "start" },
                            padding: { xs: "10px", md: '20px' },
                        }}>
                            <Box component="h3" color="#fff" sx={{ fontFamily: "cursive, system-ui" }}>{item.title}</Box>
                        </Box>

                    </Box>
                )}
        </Box>
    );
}

export default CategoryBanner;
