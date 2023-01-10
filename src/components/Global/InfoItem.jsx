import React from 'react'
import Button from '../button/Button'
function InfoItem({ item, customImg, onclick }) {
    return (
        <div className="container">
            <div className={`item    lg:text-start flex flex-col-reverse  justify-between ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} `}>
                <div className="text flex items-center flex-col text-center lg:block lg:text-start   lg:w-5/12">
                    <div className="title text-primary text-5xl leading-[62px]">
                        {item.title}
                    </div>
                    <div className="desc mt-5 text-[#4D5053] text-xl leading-8">
                        {item.desc}
                    </div>

                    <div className="contact flex mt-11 items-center">
                        {
                            item.icon ? <div className="icon w-20 h-20 bg-[#F4F0EC] rounded-full flex justify-center items-center">
                                {item.icon}
                            </div> : null
                        }
                        <div className="number flex flex-col ml-4">
                            <span className='font-semibold  text-2xl leading-9'>{item.number}</span>
                            <span className='text-xl leading-8 text-[#4D5053]'>{item.callText}</span>
                        </div>
                    </div>
                    <div className="btn mt-6">
                        <Button onclick={onclick} text={item.btnText} />
                    </div>
                </div>
                <div className={`img lg:w-6/12  ${item.imgWidth ? item.imgWidth : 'lg:h-[673px]'}`}>
                    <img className={`w-max h-max max-w-full max-h-full ${customImg ? customImg : 'lg:rounded-tr-[270px] lg:rounded-bl-[123px]'} mb-10 lg:mb-0 `} src={`/img/${item.img}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default InfoItem