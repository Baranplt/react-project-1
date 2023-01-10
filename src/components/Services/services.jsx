import React from 'react'
import { Helmet } from 'react-helmet'
import BannerImage from '../Global/BannerImage'
import Footer from '../Global/Footer'
import Join from '../Global/Join'
import ServicesItem from './ServicesItem'
import ServicesWork from './ServicesWork'
function services() {
    return (
        <div>
            <Helmet>
                <title>Services</title>
                <meta name='description' content='services description' />
            </Helmet>
            <BannerImage title={'Services'} desc={'Home / Services'} />
            <ServicesItem />
            <ServicesWork />
            <Join />
            <Footer />
        </div>
    )
}

export default services