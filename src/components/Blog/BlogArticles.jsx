import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
function BlogArticles() {
    const item = [
        {
            title: 'Let’s Get Solution For Building Construction Work',
            image: 'image',
        }, {
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            image: 'image2',
        }, {
            title: 'Best For Any Office & Business Interior Solution',
            image: 'image3',
        },
        {
            title: 'Let’s Get Solution For Building Construction Work',
            image: 'image',
        }, {
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            image: 'image2',
        }, {
            title: 'Best For Any Office & Business Interior Solution',
            image: 'image3',
        }
    ]
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    const date = d.getDay() + ' ' + monthNames[d.getMonth()] + ',' + d.getFullYear()
    console.log(date);

    return (
        <div className='container'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
                {
                    item.map((item, index) => {
                        return (
                            <div key={index} className="item group  hover:bg-bg-item transition-all duration-300  border py-5 rounded-[40px] ">
                                <div className='flex flex-col items-center'>
                                    <img src={`/img/cart/${item.image}.png`} alt="" />
                                    <div className="title text-2xl mt-8  pl-6 leading-8">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="date flex  px-6 items-center justify-between">
                                    <div className="date  leading-6">
                                        {date}

                                    </div>
                                    <div className="icon cursor-pointer w-[52px] h-[52px] bg-bg-item flex justify-center group-hover:bg-white items-center rounded-full">
                                        <HiOutlineArrowRight size={25} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
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

export default BlogArticles