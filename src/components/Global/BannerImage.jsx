import React from 'react'

function BannerImage({ title, desc }) {
    return (
        <div className='relative w-full bg-deneme '>
            <img src="/img/banner/about.png" className='w-full' alt="" />
            <div className="text bg-white absolute bottom-0 right-[155px] p-1 rounded-t-xl text-center lg:right-[790px] lg:rounded-t-[50px] lg:py-12 lg:px-20">
                <div className="title lg:text-5xl lg:leading-[66px] text-sm ">
                    {title}
                </div>
                <div className="desc lg:text-2xl leading-8 text-xs" >
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default BannerImage