import PLP from '../../components/plp/plp';
import data from "../../media/data.json"
const Homepage = () => {
    return (
        data ?
            <PLP data={data} filtersData={[{}]} sortData={["name", "price", "environmentally friendly"]} />
            :
            null
    );
}

export default Homepage;