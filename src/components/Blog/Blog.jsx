import React from 'react'
import BlogArticles from './BlogArticles'
import BlogPost from './BlogPost'
import BannerImage from '../Global/BannerImage'
import Footer from '../Global/Footer'
import { Helmet } from 'react-helmet'
function Blog() {
    return (
        <div>
            <Helmet>
                <title>Blog</title>
                <meta name='description' content='Blog description' />
            </Helmet>
            <BannerImage title={'Articles & News'} desc={'Home / Blog'} />
            <BlogPost />
            <BlogArticles />
            <Footer />
        </div>
    )
}

export default Blog