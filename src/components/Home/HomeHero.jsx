import React from 'react'
import Button from '../button/Button'

function HomeHero() {
    return (
        <div className=' hero mt-7 relative  '>
            <img className='w-full' src="img/home.png" alt="" />
            <div className="text text-primary py-5 lg:py-0 lg:block flex flex-col justify-center items-center w-full lg:w-4/12 absolute top-0 lg:top-[330px] lg:left-[360px]">
                <div className="title text-3xl lg:text-[85px] lg:leading-[106px]">
                    Let Your Home
                    Be Unique
                </div>

                <div className="desc text-sm text-center lg:text-start lg:text-[22px] leading-8  mt-2">
                    There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.
                </div>
                <div className="btn mt-6">
                    <Button text={'Get Started'} />

                </div>
            </div>
        </div>
    )
}

export default HomeHero