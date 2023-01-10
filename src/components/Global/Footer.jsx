import React from 'react'
import { CgFacebook } from 'react-icons/cg'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'

function Footer() {
    return (
        <div className='  mt-36'>
            <div className=" container    grid grid-cols-2 gap-8             lg:flex  lg:justify-between">

                <div className="logo lg:w-4/12">
                    <div className="img">
                        <img src="/img/logo.svg" alt="" />
                    </div>
                    <div className="desc text-[22px] leading-8 mt-10">
                        It is a long established fact that a reader will be distracted lookings.
                    </div>
                    <div className="icon flex items-center my-10">
                        <div className="fb mr-3 lg:mr-10">
                            <CgFacebook size={25} />
                        </div>
                        <div className="tw mr-3 lg:mr-10">
                            <AiOutlineTwitter size={25} />
                        </div>
                        <div className="link mr-3 lg:mr-10">
                            <GrLinkedinOption size={25} />
                        </div>
                        <div className="inst mr-3 lg:mr-10">
                            <AiOutlineInstagram size={25} />
                        </div>
                    </div>
                </div>
                <div className="pages lg:w-3/12">
                    <ul>
                        <li>
                            <a href="#" className='title text-3xl leading-[56px]'>
                                Pages                        </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Our Projects

                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Our Team
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Services
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Services lg:w-3/12">
                    <ul>
                        <li>
                            <a href="#" className='title text-3xl leading-[56px]'>
                                Services                     </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Kitchan                        </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Living Area

                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Bathroom                        </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Dinning Hall
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                Bedroom
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Contact lg:w-2/12">
                    <ul>
                        <li>
                            <a href="#" className='title text-3xl leading-[56px]'>
                                Contact                     </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[33px]'>
                                55 East Birchwood Ave. Brooklyn, New York 11201
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                contact@interno.com


                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-2xl leading-[56px]'>
                                (123) 456 - 7890                        </a>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="text border-t py-10 mt-32 w-full text-2xl leading-8 text-center">
                Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
            </div>
        </div>
    )
}

export default Footer