import { useState, useEffect } from 'react'
import axios, { isCancel, AxiosError } from 'axios';
import PLP from '../../components/plp/plp';

const Homepage = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return (
        data ?
            <PLP data={data} filtersData={[{}]} sortData={["name", "price", "environmentally friendly"]} />
            :
            null
    );
}

export default Homepage;