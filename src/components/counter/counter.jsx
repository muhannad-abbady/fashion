
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, IconButton } from '@mui/material';
import cssVars from "../../styles/vars.module.scss"
import { useState, useEffect } from 'react'

const Counter = ({ counter = 0, setCounter, minVal = 1, maxVal = 999999, onBtnClick, step = 1, inCartItem = false }) => {
    const [qty, setQty] = useState(parseInt(counter));

    useEffect(() => {
        setCounter(qty)
        if (onBtnClick) {
            const finish = setTimeout(() => {
                if (qty !== counter) {
                    onBtnClick(handleQTY(qty))
                }
            }, 600);
            return () => clearTimeout(finish)
        }
    }, [qty])

    const handleQTY = (qty) => {
        let v = qty
        if (inCartItem && (qty % minVal !== 0)) {
            v = Math.ceil(qty / step) * step
        } else if (qty < minVal) {
            v = minVal
        } else if (qty > maxVal) {
            v = maxVal
        }
        setQty(v)
        return v
    }

    return (
        <Box sx={{
            border: `1px solid ${cssVars.lightGray}`,
            borderRadius: "25px",
            p: "5px 6px",
            display: "flex",
            alignItems: "center"
        }}>
            <IconButton sx={{ p: 0.5, height: "fit-content !important", pointerEvents: (qty <= minVal ? 'none' : 'auto') }}
                onClick={() => { if (qty > minVal) { setQty(qty - step) } }}
            >
                <RemoveIcon
                    sx={qty > minVal ? { color: cssVars.black, cursor: "pointer" } : { color: cssVars.lightGray, cursor: "not-allowed" }}
                />
            </IconButton>

            <input
                type="text"
                value={qty}
                onChange={(e) => { setQty((parseInt(e.target.value)) || 1) }}
                style={{ padding: "0 4px", border: "none", outline: "none", width: "60px", height: "24px", textAlign: "center", fontSize: "20px", fontWeight: 500 }}
            />
            <IconButton sx={{ p: 0.5, height: "fit-content !important", pointerEvents: (qty >= maxVal ? 'none' : 'auto') }} onClick={() => { if (qty < maxVal) { setQty(qty + step) } }}>
                <AddIcon
                    sx={qty < maxVal ? { color: cssVars.black, cursor: "pointer" } : { color: cssVars.lightGray, cursor: "not-allowed" }}
                />
            </IconButton>

        </Box>
    );
}

export default Counter;