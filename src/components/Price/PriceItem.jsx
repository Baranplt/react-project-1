import React from 'react'
import Button from '../button/Button'

function PriceItem() {

    const data = [
        {
            title: ' Design advices',
            price: '29',
            list: [
                {
                    li: 'General living space advices',

                }, {
                    li: 'Rennovation advices',


                },
                {
                    li: 'Interior design advices',



                },
                {
                    li: 'Furniture reorganization',




                },
                {
                    li: 'Up to 5 hours meetings',





                },
            ]



        },
        {
            title: ' Complete interior',
            price: '39',
            list: [
                {
                    li: 'Complete home redesign',

                }, {
                    li: 'Interior and exterior works',


                }, {
                    li: 'Modular interior planning',



                },
                {
                    li: 'Kitchen design',




                },
                {
                    li: 'Garages organization',





                },
            ]
        },

        {
            title: ' Furniture design',
            price: '59',
            list: [
                {
                    li: 'Furniture for living room',
                },
                {
                    li: 'Furniture refurbishment ',

                },
                {
                    li: 'Sofas and amchairs',
                },
                {
                    li: 'Tables and chairs',

                },
                {
                    li: 'Kitchens',

                }


            ]
        }
    ]
    return (
        <div className="container grid grid-cols-1 lg:grid-cols-3  gap-20">
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className='bg-bg-item  cursor-pointer mt-20 group flex pb-16 rounded-[33px]  items-center justify-center flex-col '>

                            <div className="hdr border-b border-b-secondary w-full flex   items-center justify-center flex-col  mt-16 mb-5 pb-20">
                                <div className="title  text-2xl leading-10">
                                    {item.title}
                                </div>
                                <div className="price title leading-none">
                                    <span className='text-2xl leading-10'>$</span> <span className='text-[85px] leading-[128px] group-hover:text-secondary'>{item.price}</span>
                                </div>
                                <div className="mount ml-5 title text-2xl  ">
                                    /month
                                </div>
                            </div>
                            <div className="body flex flex-col items-center justify-center text-center">
                                <ul >
                                    {item.list.map((list, index) => {
                                        return <li key={index} className=' text-xl leading-[50px] '>{list.li}</li>

                                    })}

                                </ul>

                                <Button text={'Get Started'} custom={'bg-secondary group-hover:bg-primary  transition-all mt-20'} iconCustom={'text-black group-hover:text-secondary text-2xl'} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PriceItem