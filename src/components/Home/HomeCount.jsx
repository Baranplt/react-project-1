import React from 'react'

function HomeCount() {
    return (
        <div className='bg-bg-item mt-20 py-20 lg:py-40'>
            <div className="container grid grid-cols-1  lg:grid-cols-4  ">
                <div className="years flex flex-col items-center   border-b lg:border-b-0 lg:border-r pb-5 lg:pb-0 border-secondary">
                    <div className="title text-[85px] leading-[106px] text-secondary">
                        12
                    </div>
                    <div className="min-title text-2xl leading-8">
                        Years Of Experiance
                    </div>
                </div>
                <div className="Success Project flex flex-col items-center my-5 lg:my-0 pb-5 lg:pb-0   border-b lg:border-b-0 lg:border-r border-secondary">
                    <div className="title text-[85px] leading-[106px] text-secondary">
                        85
                    </div>
                    <div className="min-title text-2xl leading-8">
                        Success Project
                    </div>
                </div>
                <div className="Active Project flex flex-col items-center my-5 lg:my-0 pb-5 lg:pb-0   border-b lg:border-b-0 lg:border-r border-secondary">
                    <div className="title text-[85px] leading-[106px] text-secondary">
                        15
                    </div>
                    <div className="min-title text-2xl leading-8">
                        Happy CUstomers
                    </div>
                </div>
                <div className="Happy CUstomers flex flex-col items-center lg:border-0 pb-5 lg:pb-0 border-b lg:border-b-0 border-secondary ">
                    <div className="title text-[85px] leading-[106px] text-secondary">
                        95
                    </div>
                    <div className="min-title text-2xl leading-8">
                        Happy Customers
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeCount