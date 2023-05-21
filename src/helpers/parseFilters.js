export const parseFilters = (searchParams,uid=-1) => {
    const rtn = uid!==-1?{ category_uid: { eq: uid } }:{}
    searchParams.get('page')
    for (const filter of searchParams.getAll('filters')) {
        const parts = filter.split(',')
        if (parts[0] in rtn) {
            rtn[parts[0]].in = [...rtn[parts[0]].in, parts[1]]
        }
        else {
            rtn[parts[0]] = {}
            rtn[parts[0]].in = [parts[1]]
        }
    }
    return rtn
}
