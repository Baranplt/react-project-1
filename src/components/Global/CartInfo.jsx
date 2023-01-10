import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'

function CartInfo({ item }) {
    return (
        <div className="infoItem my-5 lg:my-0 flex flex-col items-center text-center">
            <div className="title text-2xl leading-8">{item.title}</div>
            <div className="desc text-2xl leading-8 mt-5 text-[#4D5053]">
                {item.desc}
            </div>
            <button className='flex items-center text-lg leading-6 font-semibold mt-10'>Read More  <span className='text-secondary ml-2'><HiOutlineArrowRight size={22} /></span> </button>
        </div>
    )
}

export default CartInfo