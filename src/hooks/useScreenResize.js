import { useEffect, useState } from "react"
import {isLG} from "../helpers"

const useScreenResize = () => {
    const [isLGstate,setIsLGstate] = useState(isLG())

    useEffect(()=>{
        const handleResize = () =>{
            setIsLGstate(isLG())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize);
    },[])

    return isLGstate
}

export default useScreenResize