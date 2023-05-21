import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const Pagination = ({ currPage = 0, pageCount, btnCount = 5, paginationBack=false }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        if(paginationBack == true && currPage > 0 ){
            goToPage(currPage)
        }
    },[paginationBack])

    if (pageCount <= 1) {
        return (<div></div>)
    }


    const goToPage = (page) => {
        searchParams.set('page', page)
        setSearchParams(searchParams)
        window.scroll(0, 0)
    }


    const generateButtons = () => {
        let btns = new Set()
        let start = currPage - Math.ceil((btnCount - 1) / 2)
        if (start < 1) start = 1
        let end = start + btnCount - 1;
        if (end > pageCount) {
            end = pageCount
            if ((end - btnCount) + 1 > 1) {
                start = (end - btnCount) + 1
            }
            else {
                start = 1
            }
        }

        for (let index = start; index <= end; index++) {
            let item = <li>
                <a className={currPage === index ? "pag-active" : ""} onClick={() => goToPage(index)}>{index}</a>
            </li>
            btns.add(item)
        }
        return btns
    }

    return (
        <div className="pagination w-100 mt-5">
            <nav className="w-100">
                <ul className="list-unstyled center">
                    <li className="">
                        <i className="bi bi-chevron-left" onClick={() => goToPage(currPage - 1)} style={{ opacity: (currPage === 1 ? 0.4 : 1) }}></i>
                    </li>
                    {
                        generateButtons()
                    }
                    <li className="">
                        <i className="bi bi-chevron-right" onClick={() => goToPage(currPage + 1)} style={{ opacity: (currPage === pageCount ? 0.4 : 1) }}></i>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;