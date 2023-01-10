import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
function Button({ text, custom, bg, iconCustom, type, onclick }) {
    return (
        <button onClick={() => { onclick() }} type={type} className={`${bg ? bg : 'bg-primary'} lg:py-7 lg:px-14 px-5 py-2 rounded-[18px]  text-white flex items-center ${custom} `}> {text} <HiOutlineArrowSmRight className={`ml-3  ${iconCustom ? iconCustom : 'text-secondary text-3xl'}`} /> </button>
    )
}

export default Button