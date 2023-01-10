import React from 'react'
import BannerImage from '../Global/BannerImage'
import ProjectHome from './ProjectHome'
import Footer from '../Global/Footer'
import { Helmet } from 'react-helmet'
function Project() {
    return (
        <div>
            <Helmet>
                <title>Project</title>
                <meta name='description' content='Project description' />
            </Helmet>
            <BannerImage title={'Our Project'} desc={'Home / Project'} />

            <ProjectHome />
            <Footer />
        </div>
    )
}

export default Project