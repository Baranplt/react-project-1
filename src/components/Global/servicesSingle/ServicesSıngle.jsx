import React from 'react'
import HomeBran from '../../Home/HomeBran'
import BannerImage from '../BannerImage'
import ServicesHome from './ServicesHome'
import ServicesList from './ServicesList'
import ServicesVideo from './ServicesVideo'
import ServiseInfo from './ServiseInfo'
import Count from '../../Home/HomeCount'
import Footer from '../../Global/Footer'
import { Helmet } from 'react-helmet'
function ServicesSingle() {
    return (
        <div>
            <Helmet>
                <title>Services Single</title>
                <meta name='description' content='ServicesSingle description' />
            </Helmet>
            <BannerImage title={'Service Single'} desc={'Home / Services Single'} />
            <ServicesHome />
            <HomeBran />
            <ServicesVideo />
            <ServicesList />
            <ServiseInfo />
            <Count />
            <Footer />
        </div>
    )
}

export default ServicesSingle