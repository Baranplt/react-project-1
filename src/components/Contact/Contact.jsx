import React from 'react'
import ContactHome from './ContactHome'
import BannerImage from '../Global/BannerImage'
import Footer from '../Global/Footer'
import { Helmet } from 'react-helmet'
function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
                <meta name='description' content='Contact description' />
            </Helmet>
            <BannerImage title={'Contact Us'} desc={'Home / Contact'} />
            <ContactHome />
            <Footer />
        </div>
    )
}

export default Contact