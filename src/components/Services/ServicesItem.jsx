import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartInfo from '../Global/CartInfo'

function ServicesItem() {
    const infoData = [
        {
            title: 'Project Plan',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
        }, {
            title: 'Interior Work',
            desc: 'There are many variations of the passages of lorem Ipsum from  available, majority..'
        }, {
            title: 'Realization',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
        }, {
            title: 'Project Plan',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
        }, {
            title: 'Interior Work',
            desc: 'There are many variations of the passages of lorem Ipsum from  available, majority..'
        }, {
            title: 'Realization',
            desc: 'There are many variations of the passages of lorem Ipsum from available, majority.'
        }
    ]

    const navigate = useNavigate()

    const singlePage = () => {

        navigate("/services-single");
    }
    return (
        <div className='container grid grid-cols-1 my-10 lg:my-0 lg:grid-cols-3 gap-10'>
            {
                infoData.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { singlePage() }} className='lg:my-10 border-y border-bg-item transition-all duration-300 cursor-pointer hover:bg-bg-item rounded-[40px] py-20 px-10'>
                            <CartInfo item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServicesItem