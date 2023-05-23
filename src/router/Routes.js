import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import { lazy, Suspense, useEffect, useState } from 'react'
import Loader from './Loader'
import CustomMetas from '../components/custom-metas'
// import default_image from '../media/images/default_image.jpg'

const Homepage = lazy(() => import("../pages/homepage"))
const PP = lazy(() => import("../pages/pp"))



const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

const Router = () => {
    const [metas, setMetas] = useState()

    // useEffect(() => {
    //     if (data) {
    //         setMetas(JSON.parse(data.storeConfig.our_config))
    //     }
    // }, [data])

    return (
        <BrowserRouter>
            {/* {data && <CustomMetas title={data.storeConfig.default_title} description={data.storeConfig.default_description}
                keywords={data.storeConfig.default_keywords} page_type="website" image={"default_image_goes here"} />} */}
            <Header />
            <main>
                <Suspense fallback={<Loader />}>
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/fashion' element={<Homepage />} />
                        <Route path='/:id' element={<PP />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;