import { Helmet } from "react-helmet"

const CustomMetas = ({ title, description, keywords, image, page_type }) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            <meta property="og:url" content={window.location.href} />

            {page_type && <meta property="og:type" content={page_type} />}

            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {title && <meta property="twitter:title" content={title} />}
            {description && <meta property="twitter:description" content={description} />}

            
            {image && <meta property="og:image" content={image} />}
            {image && <meta property="og:image:url" content={image} />}
            {image && <meta property="og:image:secure_url" content={image} />}
            {image && <meta name="twitter:image" content={image} />}
            {image && <meta property="og:image:type" content={image?('image/'+image.split('.').at(-1)):''} />}
        </Helmet>
    );
}

export default CustomMetas;