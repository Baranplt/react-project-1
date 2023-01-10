import React, { useRef } from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
function HomeProjects() {
    const settings = {
        dots: false,
        infinite: true,
        className: 'deal-products-slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        accessibility: true,
        arrows: false,
        infinite: true,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = useRef()
    function next() {
        slider.current.slickNext();
    }
    const slider2 = useRef()
    function next2() {
        slider2.current.slickNext();
    }
    const slider3 = useRef()
    function next3() {
        slider3.current.slickNext();
    }
    const slider4 = useRef()
    function next4() {
        slider4.current.slickNext();
    }

    return (
        <div className='container flex flex-col mt-10 lg:my-32'>
            <div className="header w-full lg:w-8/12 mx-auto text-center">
                <div className="title text-[50px] leading-[62px]">Follow Our Projects</div>
                <div className="desc text-[22px] leading-[33px]">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</div>
            </div>

            <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-14 lg:mt-28">
                <div className=" mt-10 lg:mt-0 " >
                    <Slider ref={slider} {...settings}>
                        <div className='w-full '>
                            <img className='w-max h-max max-w-full max-h-full   lg:rounded-tr-[120px]' src="/img/slider/photo.png" alt="" />
                        </div>
                        <div className='w-full '>
                            <img className='w-max h-max max-w-full max-h-full   lg:rounded-tr-[120px]' src="/img/slider/photo2.png" alt="" />
                        </div>
                        <div className='w-full'>
                            <img className='w-max h-max max-w-full max-h-full   lg:rounded-tr-[120px]' src="/img/slider/photo3.png" alt="" />
                        </div>

                    </Slider>

                    <div className='flex justify-between items-center mt-5'>
                        <div className="text ">
                            <div className="title text-2xl leading-8">
                                Modern Kitchan
                            </div>
                            <div className="desc">
                                Decor / Artchitecture
                            </div>
                        </div>
                        <button className="bg-bg-item w-[70px] h-[70px] rounded-full flex justify-center items-center" onClick={() => { next() }}>
                            <IoIosArrowForward size={35} />
                        </button>
                    </div>
                </div>
                <div className=" mt-10 lg:mt-0 " >
                    <Slider ref={slider2} {...settings}>
                        <div className='w-full rounded-tl-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-tl-[120px]' src="/img/slider/photo.png" alt="" />
                        </div>
                        <div className='w-full rounded-tl-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-tl-[120px]' src="/img/slider/photo2.png" alt="" />
                        </div>
                        <div className='w-full rounded-tl-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-tl-[120px]' src="/img/slider/photo3.png" alt="" />
                        </div>

                    </Slider>

                    <div className='flex justify-between items-center mt-5'>
                        <div className="text ">
                            <div className="title text-2xl leading-8">
                                Modern Kitchan
                            </div>
                            <div className="desc">
                                Decor / Artchitecture
                            </div>
                        </div>
                        <button className="bg-bg-item w-[70px] h-[70px] rounded-full flex justify-center items-center" onClick={() => { next2() }}>
                            <IoIosArrowForward size={35} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-14 lg:mt-32">
                <div className=" mt-10 lg:mt-0 " >
                    <Slider ref={slider3} {...settings}>
                        <div className='w-full rounded-br-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-br-[120px]' src="/img/slider/photo.png" alt="" />
                        </div>
                        <div className='w-full rounded-br-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-br-[120px]' src="/img/slider/photo2.png" alt="" />
                        </div>
                        <div className='w-full rounded-br-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-br-[120px]' src="/img/slider/photo3.png" alt="" />
                        </div>

                    </Slider>

                    <div className='flex justify-between items-center mt-5'>
                        <div className="text ">
                            <div className="title text-2xl leading-8">
                                Modern Kitchan
                            </div>
                            <div className="desc">
                                Decor / Artchitecture
                            </div>
                        </div>
                        <button className="bg-bg-item w-[70px] h-[70px] rounded-full flex justify-center items-center" onClick={() => { next3() }}>
                            <IoIosArrowForward size={35} />
                        </button>
                    </div>
                </div>
                <div className=" mt-10 lg:mt-0 " >
                    <Slider ref={slider4} {...settings}>
                        <div className='w-full rounded-bl-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-bl-[120px]' src="/img/slider/photo.png" alt="" />
                        </div>
                        <div className='w-full rounded-bl-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-bl-[120px]' src="/img/slider/photo2.png" alt="" />
                        </div>
                        <div className='w-full rounded-bl-[120px]'>
                            <img className='w-max h-max max-w-full max-h-full lg:rounded-bl-[120px]' src="/img/slider/photo3.png" alt="" />
                        </div>

                    </Slider>

                    <div className='flex justify-between items-center mt-5'>
                        <div className="text ">
                            <div className="title text-2xl leading-8">
                                Modern Kitchan
                            </div>
                            <div className="desc">
                                Decor / Artchitecture
                            </div>
                        </div>
                        <button className="bg-bg-item w-[70px] h-[70px] rounded-full flex justify-center items-center" onClick={() => { next4() }}>
                            <IoIosArrowForward size={35} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProjects