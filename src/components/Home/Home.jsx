import React from 'react'
import HomeHero from './HomeHero'
import Homeinfo from './Homeinfo'
import { IoCallOutline } from 'react-icons/io5'
import InfoItem from '../Global/InfoItem'
import HomeComment from './HomeComment'
import HomeBran from './HomeBran'
import HomeProjects from './HomeProjects'
import HomeCount from './HomeCount'
import HomeArticles from './HomeArticles'
import HomeJoin from '../Global/Join'
import Footer from '../Global/Footer'
import { Helmet } from 'react-helmet'
function Home() {

    const item = {
        title: '  We Create The Art Of Stylish LivingStylishly',
        desc: '   It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of usingthat it has a more-or-less normal.',
        icon: <IoCallOutline size={40} className='text-[#CDA274]' />,
        number: '012345678',
        callText: 'Call Us Anytime',
        img: 'photo.jpg',
        btnText: 'Get Free Estimate'

    }

    return (
        <div className="home">
            <Helmet>
                <title>Home</title>
                <meta name='description' content='Home description' />
            </Helmet>
            <HomeHero />
            <Homeinfo />
            <div className='lg:mt-52 mt-10 '>
                <InfoItem item={item} />

            </div>
            <HomeComment />
            <HomeBran />
            <HomeProjects />
            <HomeCount />
            <HomeArticles />
            <HomeJoin />
            <Footer />
        </div>
    )
}

export default Home