import React from 'react'
import { useNavigate } from 'react-router-dom'
import InfoItem from '../../Global/InfoItem'

function ServiseInfo() {
    const item = {
        img: 'infos.png',
        title: 'We love design.Thats how we got here.',
        desc: 'It is a long established fact that a reader will be distracted by the of readable content .',
        btnText: 'Price information',
        reverse: 'reverse',


    }

    const navigate = useNavigate()

    const singlePage = () => {

        navigate("/price");
    }
    return (
        <div className='mt-32'>
            <InfoItem onclick={singlePage} item={item} customImg={'rounded-lg'} />
        </div>
    )
}

export default ServiseInfo