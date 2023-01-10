import React from 'react'
import CartInfo from '../Global/CartInfo'

function Homeinfo() {
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
        }
    ]
    return (

        <div className='info container lg:mt-52 mt-5  grid lg:grid-cols-3 grid-cols-1 gap-10'>
            {
                infoData.map((item, index) => {
                    return (
                        <CartInfo item={item} key={index} />


                    )
                })
            }
        </div>

    )
}

export default Homeinfo