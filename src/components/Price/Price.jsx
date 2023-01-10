import React from 'react'
import { Helmet } from 'react-helmet'
import BannerImage from '../Global/BannerImage'
import Footer from '../Global/Footer'
import PriceItem from './PriceItem'
function Price() {
    return (
        <div>
            <Helmet>
                <title>Price</title>
                <meta name='description' content='Price description' />
            </Helmet>
            <BannerImage title={'Pricing & Plan'} desc={'Home / Priceing'} />
            <PriceItem />
            <Footer />
        </div>
    )
}

export default Price