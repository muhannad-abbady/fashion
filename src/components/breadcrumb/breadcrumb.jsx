import { Link } from "react-router-dom";

const BreadCrumb = ({ breadcrumbs, activeName }) => {
    let brs = [...breadcrumbs]
    brs = brs.sort((a, b) => a.category_level - b.category_level)
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb" >
                {
                    brs.map((breadcrumb, i) =>
                        <li className="breadcrumb-item" aria-current="page">
                            {
                                <Link to={breadcrumb.category_url_path + '.html'}>
                                    {breadcrumb.category_name}
                                </Link>
                            }
                        </li>
                    )
                }
                <li className="breadcrumb-item active" aria-current="page"><span>{activeName}</span></li>
            </ol>
        </nav>
    );
}

export default BreadCrumb;