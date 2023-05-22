import { Box } from "@mui/material";
import cssVars from '../../../../styles/vars.module.scss'

const ConfigurableOptions = ({ productConfigurations, selectedConfigurations, setSelectedConfigurations }) => {

    const isSelectedOption = (uid) => Object.values(selectedConfigurations).map(option => option.uid).includes(uid)

    const selectOption = (code, uid, sort) => {

        const uids = Object.values(selectedConfigurations).filter(config => config.sort !== sort).map(config => config.uid)
        if (isAvariant([...uids, uid])) {
            const res = { ...selectedConfigurations }
            res[code] = { sort, uid }
            setSelectedConfigurations(res)
        }
        else {
            const possibleVariant = productConfigurations.variants.filter(variant => variant.attributes.some(attr => attr.uid === uid)).at(0)
            const res = {}
            possibleVariant.attributes.map((attr, i) => { res[attr.code] = { uid: attr.uid, sort: i } })
            setSelectedConfigurations(res)
        }

    }



    const getFlatVariants = () => {
        const flatVariants = []
        for (const variant of productConfigurations.variants) {
            const flatVariant = {}
            for (const attr of variant.attributes) {
                flatVariant[attr.code] = attr.uid
            }
            flatVariants.push(flatVariant)
        }
        return flatVariants
    }

    const isAvariant = (uids) => {
        const flatVariants = getFlatVariants()
        return flatVariants.filter(variant => uids.every(uid => Object.values(variant).includes(uid))).length > 0
    }

    const getOptionValues = (option, i) => {
        const uids = Object.values(selectedConfigurations).filter(config => config.sort < i).map(config => config.uid)

        const rtn = option.values.filter(value => isAvariant([...uids, value.uid]))

        return rtn
    }

    return (
        <Box mb="-16px">
            {
                productConfigurations.configurable_options.map((option, i) =>
                    <Box mb="16px" key={option.attribute_code}>
                        <Box>{option.label}</Box>
                        <Box display="flex" flexWrap="wrap">
                            {
                                getOptionValues(option, i).map(value =>
                                (
                                    option.attribute_code === 'color'
                                        ?
                                        <Box mt="10px" mr="12px" border={`1px solid ${cssVars.lightGray}`} width={42} height={42}
                                            borderRadius="50%" key={value.uid} bgcolor={value.swatch_data.value}
                                            sx={{ cursor: "pointer", outline: (isSelectedOption(value.uid) ? `3px solid ${cssVars.darkGray}` : 'none') }}
                                            onClick={() => { selectOption(option.attribute_code, value.uid, i) }}
                                        />
                                        :
                                        <Box mt="10px" mr="12px" border={`1px solid ${cssVars.lightGray}`} borderRadius={cssVars.radius} p="4px 16px"
                                            fontSize="14px" textTransform="capitalize" key={value.uid}
                                            sx={{ cursor: "pointer", outline: (isSelectedOption(value.uid) ? `2px solid ${cssVars.darkGray}` : 'none') }}
                                            onClick={() => { selectOption(option.attribute_code, value.uid, i) }}
                                        >
                                            {value.label}
                                        </Box>
                                )
                                )
                            }
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
}

export default ConfigurableOptions;
