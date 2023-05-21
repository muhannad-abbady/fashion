import { Box } from "@mui/material";
import Tag from "../tag/Tag";
import ActionIconButton from "../action-icon-button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import cssVars from '../../styles/vars.module.scss'

const ProductCardTop = ({ product }) => {
    const isFav = () => false
    const handleClick = () => { }
    const addRemoveLoading = () => ({})
    const isCompared = () => false
    const handleClick1 = () => { }
    const addRemoveLoading1 = () => ({})
    return (
        <Box position="relative" mb={1}
            sx={{
                width: "100%",
                height: "100%",
                px: "5px",
                backgroundOrigin: "content-box",
                backgroundImage: `url(${product.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                overflow: "hidden"
            }}>
            <Box className="tags" position="absolute" top={0} left={0} sx={{ zoom: { xs: 0.8, sm: 1 } }}>
                {product.is_new ? <Tag text="New" bgcolor={cssVars.primary} /> : null}
                {product.best_seller ? <Tag text="Sale" bgcolor={cssVars.red} /> : null}
            </Box>
            <Box className="actions" position="absolute" top={0} sx={{ transition: "all 0.25s ease-in", right: { xs: 0, md: -36 }, zoom: { xs: 0.8, sm: 1 } }}>
                <ActionIconButton icon={<FavoriteBorderOutlinedIcon />} iconFilled={<FavoriteIcon />} active={isFav(product.sku)} onClick={(e) => { e.preventDefault(); handleClick(product.sku) }} isLoading={false} />
                <ActionIconButton icon={<CompareArrowsIcon />} iconFilled={<CompareArrowsIcon />} active={isCompared(product.id)} onClick={(e) => { e.preventDefault(); handleClick1(product.id) }} isLoading={false} />
            </Box>
        </Box>
    );
}

export default ProductCardTop;