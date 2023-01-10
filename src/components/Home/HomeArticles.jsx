import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'

function HomeArticles() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    const date = d.getDay() + ' ' + monthNames[d.getMonth()] + ',' + d.getFullYear()
    console.log(date);

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
        }
    ]
    return (
        <div className='container mt-52'>
            <div className="header w-full lg:w-8/12 mx-auto text-center">
                <div className="title text-[50px] leading-[62px]">Articles & News</div>
                <div className="desc text-[21px] leading-[33px]">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</div>
            </div>
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
        </div>
    )
}

export default HomeArticles