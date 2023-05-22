import { Box } from "@mui/material"
import { cloneElement, useCallback, useEffect, useRef, useState } from "react"
import cssVar from "../../styles/vars.module.scss"

const Magnify = ({ originalImage = null, shape = "circle", size = "medium", sx, magnifySX, zoom = 2, children }) => {
    const imgRef = useRef()
    const [src, setSrc] = useState(originalImage)
    const [magnifyPos, setMagnifyPos] = useState({ x: 0, y: 0 })
    const [backgroundSize, setBackgroundSize] = useState("100%")
    const [backgroundPos, setBackgroundPos] = useState("center")
    const [show, setShow] = useState(false)
    const [correctDimentions, setCorrectDimentions] = useState({ x: 1, y: 1 })

    const sizes = () => {
        switch (size) {
            case "xl":
                return 450
            case "large":
                return 360
            case "small":
                return 200
            default:
                return 290
        }
    }

    const shift = sizes() / -2


    useEffect(() => {
        setSrc(imgRef.current ? imgRef.current.getAttribute('src') : "")
    }, [imgRef.current ? imgRef.current.getAttribute('src') : ""])

    useEffect(() => {
        let originalX = imgRef.current ? imgRef.current.naturalWidth : 1
        let originalY = imgRef.current ? imgRef.current.naturalHeight : 1
        let x = imgRef.current ? imgRef.current.offsetWidth : 1
        let y = imgRef.current ? imgRef.current.offsetHeight : 1
        if (x / y < originalX / originalY) {
            x = x * zoom
            y = x * (originalY / originalX)
            setCorrectDimentions({ x: 1, y: originalX / originalY })
        } else {
            y = y * zoom
            x = y * (originalX / originalY)
            setCorrectDimentions({ x: originalY / originalX, y: 1 })
        }
        setBackgroundSize(x + "px " + y + "px")
    }, [imgRef.current, imgRef.current ? imgRef.current.naturalHeight : 1])


    const preparePos = useCallback((pos, bounds) => {
        const correct = (n, original) => {
            return ((n - ((0.5 - n) * (sizes() / (original - sizes())))) * 100).toString() + "% "
        }
        const { width, height } = bounds
        let x = (0.5 - ((0.5 - (pos.x / width)) * correctDimentions.x))
        let y = (0.5 - ((0.5 - (pos.y / height)) * correctDimentions.y))
        return (correct(x, parseInt(backgroundSize.split(' ')[0])) + correct(y, parseInt(backgroundSize.split(' ')[1])))
    }, [backgroundSize, correctDimentions])

    const relativeCoords = (event) => {
        var bounds = imgRef.current ? imgRef.current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 }
        var x = event.clientX - bounds.left
        var y = event.clientY - bounds.top
        setShow(x / bounds.width >= 0 && x / bounds.width <= 1 && y / bounds.height >= -0 && y / bounds.height <= 1)
        setMagnifyPos({ x: event.clientX, y: event.clientY })
        setBackgroundPos(preparePos({ x, y }, bounds))
    }

    return (
        <Box
            onMouseMove={(e) => { relativeCoords(e) }}
            onMouseOut={() => setShow(false)}
            position="relative"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                ...sx
            }}
        >
            <Box
                sx={{
                    display: show ? "block" : "none",
                    position: "fixed",
                    top: magnifyPos.y + shift,
                    left: magnifyPos.x + shift,
                    border: "1px solid " + cssVar.gray,
                    borderRadius: (shape === "circle" ? "50%" : "0"),
                    width: sizes(), height: sizes(),
                    background: cssVar.white,
                    backgroundImage: "url(" + src + ")",
                    backgroundSize: backgroundSize,
                    backgroundPosition: backgroundPos,
                    backgroundRepeat: "no-repeat",
                    zIndex: 9,
                    cursor: "none",
                    ...magnifySX
                }}
            />
            {
                cloneElement(children, { ref: imgRef, style: { width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" } })
            }
        </Box>
    )
}

export default Magnify