import { Box } from "@mui/material";
import { useEffect, useContext, useState, useCallback } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import cssVars from '../../../../styles/vars.module.scss'
import { useRef } from "react";
import Carousel from "../../../carousel";
import ActionIconButton from "../../../action-icon-button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Magnify from "../../../itmd-magnify";

const ShowBox = ({ product, variant }) => {
    const media_gallery = [product]
    const [activeImg, setActiveImg] = useState(0)
    const imageBoxRef = useRef()
    const prdsRef = useRef()
    const innerPrdsRef = useRef()
    const [width, setWidth] = useState(0)

    const afterEffect = { content: `""`, position: "absolute", left: 0, right: 0, bottom: "-1px", height: "3px", bgcolor: cssVars.primary }

    function scrollImg(direction) {
        let ele = prdsRef.current
        let ele1 = innerPrdsRef.current
        if (direction === "down" && ele.offsetHeight + ele.scrollTop < ele1.offsetHeight) {
            let scrl = (Math.floor((ele.scrollTop + 120) / 120) * 120)
            ele.scrollTo({ top: scrl, behavior: 'smooth' })
        }
        else if (direction === "up") {
            let scrl = (Math.ceil((ele.scrollTop - 120) / 120) * 120)
            ele.scrollTo({ top: scrl, behavior: 'smooth' })
        }
    }

    const isFav = () => false
    const handleClick = () => { }
    const addRemoveLoading = false
    const isCompared = () => false
    const handleClick1 = () => { }
    const addRemoveLoading1 = false


    return (
        <Box position="relative" display={{ xs: "block", sm: "flex" }}>
            <Box sx={{ width: 112, mr: 2, display: { xs: "none", lg: "block" } }} >
                <KeyboardArrowUpIcon fontSize="medium"
                    sx={{
                        position: "absolute", top: '-9px', left: "47px",
                        color: cssVars.gray,
                        display: (media_gallery.length > 4 ? "block" : "none")
                    }}
                    onClick={() => { scrollImg('up') }}
                />
                <Box ref={prdsRef} width={148} mr="14px" height={media_gallery.length > 4 ? 470 : 500}
                    sx={{
                        overflowY: "scroll", msOverflowStyle: "none", '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    <Box ref={innerPrdsRef}>
                        {
                            media_gallery.sort((a, b) => a.position - b.position).map((item, i) =>
                                <Box mb="10px" width={114} height={110} position="relative" key={item?.image} border={`1px solid ${cssVars.lightGray}`}
                                    borderBottom={`1px solid ${cssVars.lightGray}`}
                                    sx={{ cursor: "pointer", position: "relative", "&::after": (i === activeImg ? afterEffect : {}) }}
                                    onClick={() => { setActiveImg(i) }}
                                >
                                    <img id={`oi-${i}`} src={item?.image} alt={item?.title} style={{ objectFit: "contain", objectPosition: "center", width: "100%", height: "100%" }} />
                                </Box>
                            )
                        }
                    </Box>
                </Box>
                <KeyboardArrowDownIcon fontSize="medium"
                    sx={{
                        position: "absolute", bottom: '-9px', left: "47px",
                        color: cssVars.gray,
                        display: (media_gallery.length > 4 ? "block" : "none")
                    }}
                    onClick={() => { scrollImg('down') }}
                />
            </Box>
            <Box
                ref={imageBoxRef}
                width={{ xs: "100%", md: "calc(100% - 128px)" }}
                position="relative"
                height="500px"
                style={{ border: `1px solid ${cssVars.lightGray}` }}
                sx={{ display: { xs: 'none', lg: "flex" }, justifyContent: "center", alignItems: "center" }}>
                <Magnify >
                    <img src={product?.image} alt={product?.title} />
                </Magnify>
            </Box>

            <Box border={`1px solid ${cssVars.lightGray}`} width="100%" position="relative" sx={{ display: { xs: 'block', lg: "none" } }}>
                {
                    media_gallery.length > 0
                        ?
                        <Carousel
                            className="owl-theme images-carousel"
                            dots={true}
                            nav={false}
                            items={1}

                        >
                            {
                                media_gallery.sort((a, b) => a.position - b.position).map((item, i) =>
                                    <Box key={i} pt="100%">
                                        <img src={item?.image} alt={item?.title} style={{ objectFit: "contain", objectPosition: "center" }} />
                                    </Box>
                                )
                            }
                        </Carousel>
                        :
                        <Box pt="100%">
                            <img src={product?.image} alt="no-product-image-placeholder" style={{ objectFit: "contain", objectPosition: "center" }} />
                        </Box>
                }
                <Box className="actions" position="absolute" zIndex={2} top={0} sx={{ transition: "all 0.25s ease-in", top: 12, right: 12 }}>
                    <ActionIconButton icon={<FavoriteBorderOutlinedIcon />} iconFilled={<FavoriteIcon />} active={isFav()} onClick={(e) => { }} isLoading={false} />
                    <ActionIconButton icon={<CompareArrowsIcon />} iconFilled={<CompareArrowsIcon />} active={false} onClick={(e) => { }} isLoading={false} />
                </Box>
            </Box>
        </Box>
    );
}

export default ShowBox;