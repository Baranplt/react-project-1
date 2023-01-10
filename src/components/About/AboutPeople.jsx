import React, { useState } from 'react'
import { CgFacebook } from 'react-icons/cg'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'

function AboutPeople() {

    const [hover, sethover] = useState(-1)

    function hovered(a) {
        sethover(a)
    }

    const data = [
        {
            img: 'Image',
            title: 'Nattasha Julie',
            minTitle: 'Design, Australia',

        },
        {
            img: '2',
            title: 'Benny Julie',
            minTitle: 'Design, Australia',

        }
        ,
        {
            img: '4',
            title: 'Raymound Julie',
            minTitle: 'Design, Australia',

        },
        {
            img: 'Image',
            title: 'Raymound Julie',
            minTitle: 'Design, Australia',

        }
    ]
    return (
        <div className='bg-bg-item mt-20 '>

            <div className="container flex flex-col justify-center text-center py-48">
                <div className='flex items-center justify-center mb-10'>
                    <div className="title lg:w-6/12 text-3xl lg:text-5xl leading-[62px]">
                        What the People Thinks
                        About Us
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} onMouseOver={() => { hovered(index) }} onMouseOut={() => { hovered(-1) }} className="item cursor-pointer  relative">
                                    <img className={`${hover === index ? 'opacity-0' : 'opacity-100'} absolute`} src={`/img/people/${item.img}.png`} alt="" />
                                    <div className={`text bg-white transition-all duration-700 rounded-[25px] py-9 lg:py-[55px] px-2  flex flex-col items-center ${hover === index ? 'opacity-100' : 'opacity-0'} `}>
                                        <div className="title  text-xl lg:text-2xl  leading-9">
                                            {item.title}
                                        </div>
                                        <div className="mintitle text-lg leading-7 mb-5 lg:mb-20">
                                            {item.minTitle}

                                        </div>
                                        <div className="icon flex items-center mb-5 lg:mb-16">
                                            <div className="fb mr-3 lg:mr-4">
                                                <CgFacebook size={20} />
                                            </div>
                                            <div className="tw mr-3 lg:mr-4">
                                                <AiOutlineTwitter size={20} />
                                            </div>
                                            <div className="link mr-3 lg:mr-4">
                                                <GrLinkedinOption size={20} />
                                            </div>
                                            <div className="inst mr-3 lg:mr-4">
                                                <AiOutlineInstagram size={20} />
                                            </div>
                                        </div>
                                        <div className="contact text-lg leading-7 lg:mt-5 text-[#4D5053]">
                                            +1 (378) 400-1234 <br></br>
                                            julie@email.com
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutPeople