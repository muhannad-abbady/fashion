import { useParams } from "react-router-dom";
import data from "../../media/data.json"
import PP from "../../components/pp"
const PPPage = () => {
    let { id } = useParams();
    let ppData = data.filter(item => item?.id === parseInt(id))[0]
    return (
        <PP product={ppData} />
    );
}

export default PPPage;