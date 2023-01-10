import React from 'react'
import AboutForm from './AboutForm'
import AboutHero from './AboutHero'
import AboutPeople from './AboutPeople'
import AboutPromise from './AboutPromise'
import BannerImage from '../Global/BannerImage'
import Footer from '../Global/Footer'
import Helmet from 'react-helmet'

function About() {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <meta name='description' content='about description' />
            </Helmet>
            <BannerImage desc={'Home / About Us'} title={'About Us'} />
            <AboutPromise />
            <AboutHero />
            <AboutPeople />
            <div className="container mt-56 flex justify-center items-center">
                <AboutForm />
            </div>
            <Footer />
        </div>

    )
}

export default About