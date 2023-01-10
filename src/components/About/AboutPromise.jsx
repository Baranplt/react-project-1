import React from 'react'

function AboutPromise() {
    return (
        <div className='container flex relative justify-center mt-20 lg:mt-52'>
            <div className='w-8/12 flex justify-between '>
                <div className='w-52 h-80 border-y-[15px] border-l-[15px] border-bg-item rounded-l-[45px]'>
                </div>
                <div className='w-52 h-80 border-y-[15px] border-r-[15px] border-bg-item rounded-r-[45px]'>
                </div>
            </div>

            <div className="text absolute text-center  w-6/12">
                <div className="icon title font-bold text-5xl mt-10 lg:mt-0 lg:text-[75px]">
                    “
                </div>
                <div className="text title lg:text-3xl lg:leading-10">
                    I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
                </div>
                <div className="poet text-xl lg:mt-10 mt-5 leading-9">
                    -BUNNY WILLIAMS
                </div>
            </div>
        </div>
    )
}

export default AboutPromise