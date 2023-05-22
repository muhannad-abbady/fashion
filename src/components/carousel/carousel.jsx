import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';

const Carousel = ({ children, ...options }) => {

    const [container, setContainer] = useState((
        <Box className="carousel-first-render" sx={{ overflowX: "hidden" }}>
            <Box display="flex" alignItems="center" sx={{ flexWrap: "nowrap", minWidth: (options.items ? "unset" : "max-content") }}>
                {children.slice(0, (options.items || 5))}
            </Box>
        </Box>
    ))


    useEffect(() => {
        setContainer(
            (
                <OwlCarousel
                    onRefreshed={() => {
                        if (options.id) {
                            document.querySelectorAll(`#${options.id} a`).forEach(element => {
                                element.addEventListener("click", (e) => {
                                    e.preventDefault()
                                    if (element.getAttribute('target') === '_blank') {
                                        window.open(element.getAttribute('href'))
                                    }
                                    else if (element.getAttribute('href').startsWith('#') && element.getAttribute('href').length > 1) {
                                        document.getElementById(element.getAttribute('href').substring(1)).scrollIntoView({ behavior: 'smooth' })
                                    }
                                    else {

                                    }
                                })
                            });
                        }
                    }}
                    {...options}
                >
                    {children}
                </OwlCarousel>
            )
        )
    }, [])

    return container
}

export default Carousel;