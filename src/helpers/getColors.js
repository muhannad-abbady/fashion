export const getColors = (ops) => {
    return ops?.filter((op) => op.attribute_code === 'color')[0]?.values
}