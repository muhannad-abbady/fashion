import { Box, Button, Grid, InputAdornment, Slider, TextField, Tooltip } from '@mui/material';
import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

import parseSearchParams, { strEncode } from '../../helpers/SearchParams';
import cssVars from "../../styles/vars.module.scss"

const PriceFilter = ({ count, options, id = "price" }) => {
    const [searchParams, setSearchParams] = useState({})
    const t = (word) => word

    const containerRef = useRef()
    const [containerWidth, setContainerWidth] = useState(300)

    const [values, setValues] = useState([0, count]);
    const [prices, setPrices] = useState([parseInt(options[0].value.split('_')[0]), parseInt(options[count - 1].value.split('_')[1])])

    const maxHeight = Math.max(...options.map(o => o.count))

    const minRange = Math.min(...options.map(o => o.value.split("_")[0]))
    const maxRange = Math.max(...options.map(o => o.value.split("_")[1]))

    const gap = 4
    const gapsWidth = (count - 1) * (gap)

    const columns_width = Math.max(gapsWidth + (count * 5), containerWidth)
    const colmun = (columns_width - gapsWidth) / count
    const marks = [{ value: parseInt(minRange) }, ...options.map(e => { return { value: parseInt(e.value.split("_")[1]) } })];

    const handleChange = (event, newValue) => {
        setValues(newValue);
        setPrices([parseInt(marks[newValue[0]].value), parseInt(marks[newValue[1]].value)])
    };

    const handlePriceInputChange = ({ price1, price2 }) => {
        let result = [...values]
        setPrices([price1 || prices[0], price2 || prices[1]])
        if (price1) {
            let currV = parseInt(price1) + 1
            let i = -1
            marks.forEach((element, q) => {
                if (i === -1 && currV <= parseInt(element.value)) {
                    i = q
                    result[0] = Math.max(0, q - 1)
                }
            })
        }
        if (price2) {
            let currV = parseInt(price2) + 1
            let i = -1
            marks.reverse().forEach((element, q) => {
                if (i === -1 && currV >= parseInt(element.value)) {
                    i = q
                    result[1] = count - q
                }
            })
        }
        setValues(result)
    }

    const doFilters = (f) => { }

    const valuetext = (value) => {
        return `${marks[value].value} CHF`;
    }


    useEffect(() => {
        setContainerWidth(containerRef.current.offsetWidth)
    }, [])

    useEffect(() => {
        if (Object.keys(searchParams).length > 0) {
            let def = [parseInt(options[0].value.split('_')[0]), parseInt(options[count - 1].value.split('_')[1])]
            if (searchParams.filters) {
                if (searchParams.filters[id]) {
                    let v = searchParams.filters[id] ? searchParams?.filters[id].map(e => parseInt(e)) : []
                    handlePriceInputChange({ price1: v[0], price2: v[1] })
                } else {
                    setPrices(def)
                    if (JSON.stringify(def) !== JSON.stringify(prices))
                        doFilters([])
                }
            } else {
                setPrices(def)
                if (JSON.stringify(def) !== JSON.stringify(prices))
                    doFilters([])
            }
        }
    }, [searchParams])

    return (
        <div ref={containerRef}>
            {
                count >= 6
                    ?
                    <>
                        <Grid className={'columns'} width={columns_width} height={100} position="relative">
                            {options.map((item, i) => {
                                let [x1, x2] = item.value.split("_")
                                return <Tooltip key={x1 + '-' + x2} title={item.count} placement="top">
                                    <Grid className={((parseInt(x1) >= prices[0] && parseInt(x2) <= prices[1]) ? " bg-yellow" : " bg-gray")}
                                        sx={{ position: 'absolute', bottom: -9, left: (colmun + gap) * i, width: colmun }} height={100 * item.count / maxHeight}>
                                    </Grid>
                                </Tooltip>
                            }
                            )}
                        </Grid>
                        <Grid className='slider' width={columns_width} >
                            <Slider
                                aria-label="Restricted values"
                                value={values}
                                onChange={handleChange}
                                valueLabelDisplay='auto'
                                valueLabelFormat={valuetext}
                                step={1}
                                marks={marks}
                                max={count}
                                min={0}
                                sx={{ color: cssVars.extraDarkGray }}
                            />
                        </Grid>
                    </>
                    :
                    <Box height={10} />
            }
            <Grid display="flex" justifyContent="space-between">
                <TextField
                    id="From"
                    label={t("From")}
                    sx={{ width: "calc(50% - 8px)", "& input": { p: '8.5px 14px 8.5px 2px' } }}
                    type="number"
                    value={prices[0]}
                    onChange={e => handlePriceInputChange({ price1: e.target.value })}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        min: minRange,
                        max: prices[1] - 50,
                        step: 50,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    id="To"
                    label={t("To")}
                    sx={{ width: "calc(50% - 8px)", "& input": { p: '8.5px 14px 8.5px 2px' } }}
                    type="number"
                    value={prices[1]}
                    onChange={e => handlePriceInputChange({ price2: e.target.value })}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        min: prices[0] + 50,
                        max: maxRange,
                        step: 50
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid marginTop={2.5} display="flex" justifyContent="center">
                <Button
                    variant="contained"
                    style={{ width: "100%", borderRadius: cssVars.radius }}
                    onClick={() => {
                        doFilters(prices)
                    }}
                >{t("Apply")}</Button>
            </Grid>
        </div >
    )
}

export default PriceFilter