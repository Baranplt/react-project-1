import React from 'react'
import Button from '../button/Button'

function HomeJoin() {
    return (
        <div className='container bg-primary flex flex-col items-center py-20 text-center lg:text-start lg:rounded-[70px] text-white mt-52'>

            <div className="title text-[50px] leading-[62px]">
                Wanna join the interno?
            </div>
            <div className="desc text-2xl leading-8 mt-5">
                It is a long established fact  will be distracted.
            </div>
            <div className="btn mt-8">
                <Button bg={'bg-secondary'} custom={'text-white'} iconCustom={'text-white'} text={'Contact With Us'} />
            </div>

        </div>
    )
}

export default HomeJoin