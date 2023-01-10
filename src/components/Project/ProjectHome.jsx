import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
function Project() {

    const data = [
        {
            image: 'Image',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        },
        {
            image: 'image2',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        },
        {
            image: 'image3',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        },
        {
            image: 'image4',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        }
    ]
    const dataTwo = [
        {
            image: '1',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        },
        {
            image: '2',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        },
        {
            image: '3',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        },
        {
            image: '4',
            title: 'Modern Kitchan',
            desc: 'Decor / Artchitecture '
        }
    ]
    return (
        <div className='container   mt-48'>
            <div className="flex justify-center">
                <div className="header lg:w-10/12   grid  grid-cols-2  lg:grid-cols-4 text-lg leading-6 font-semibold border border-secondary rounded-2xl">
                    <button className='py-7 hover:bg-secondary border lg:border-none border-secondary hover:text-white transition-all duration-500  rounded-2xl px-16'>
                        Bathroom
                    </button>
                    <button className='py-7 hover:bg-secondary border lg:border-none border-secondary hover:text-white transition-all duration-500 rounded-2xl px-16'>
                        Bed Room
                    </button>
                    <button className='py-7 hover:bg-secondary border lg:border-none border-secondary hover:text-white transition-all duration-500 rounded-2xl px-16'>
                        Kitchan
                    </button>
                    <button className='py-7 hover:bg-secondary border lg:border-none border-secondary hover:text-white transition-all duration-500 rounded-2xl  px-16'>
                        Living Area
                    </button>
                </div>
            </div>

            <div className="body grid grid-cols-2 gap-8 mt-20">
                <div >
                    {
                        data.map((item) => {
                            return <div className="item  mt-5">

                                <img src={`/img/bedroom/${item.image}.png`} alt="" />

                                <div className='flex justify-between items-center mt-5'>
                                    <div className="text ">
                                        <div className="title lg:text-2xl leading-8">
                                            {item.title}
                                        </div>
                                        <div className="desc text-sm lg:text-base">
                                            {item.desc}
                                        </div>
                                    </div>
                                    <button className="bg-bg-item h-10 w-10 lg:w-[70px] text-lg lg:text-4xl  lg:h-[70px] hover:bg-secondary transition-all duration-500  hover:text-white rounded-full flex justify-center items-center">
                                        <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className=''>
                    {
                        dataTwo.map((item) => {
                            return <div className="item  mt-5">

                                <img src={`/img/bedroom/${item.image}.png`} alt="" />

                                <div className='flex justify-between items-center mt-5'>
                                    <div className="text ">
                                        <div className="title  lg:text-2xl leading-8">
                                            {item.title}
                                        </div>
                                        <div className="desc text-sm lg:text-base">
                                            {item.desc}
                                        </div>
                                    </div>
                                    <button className="bg-bg-item h-10 lg:w-[70px] w-10 lg:h-[70px] text-lg lg:text-4xl hover:bg-secondary transition-all duration-500  hover:text-white rounded-full flex justify-center items-center">
                                        <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="pops flex justify-center mt-20">
                <div className="pops flex w-6/12 lg:w-2/12 justify-between">
                    <div className="item hover:border-none border border-secondary w-8 h-8 rounded-full flex  justify-center items-center hover:bg-bg-item transition-all duration-500 cursor-pointer">
                        01
                    </div>
                    <div className="item hover:border-none border border-secondary w-8 h-8 rounded-full flex  justify-center items-center hover:bg-bg-item transition-all duration-500 cursor-pointer">
                        02
                    </div>
                    <div className="item hover:border-none border border-secondary w-8 h-8 rounded-full flex  justify-center items-center hover:bg-bg-item transition-all duration-500 cursor-pointer">
                        03
                    </div>
                    <div className="item hover:border-none border border-secondary w-8 h-8 rounded-full flex  justify-center items-center hover:bg-bg-item transition-all duration-500 cursor-pointer">
                        04
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project