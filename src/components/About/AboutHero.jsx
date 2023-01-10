import React from 'react'
import InfoItem from '../Global/InfoItem'
function AboutHero() {

    const item = [
        {
            title: 'What We Do',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.',
            img: 'about/Image.png',
            btnText: 'Our Concept',
            imgWidth: 'lg:w-[600px]'

        }, {
            title: 'The End Result',
            desc: 'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.',
            img: 'about/Photo.jpg',
            btnText: 'Our Portfolio',
            reverse: 'reverse',
            imgWidth: 'lg:w-[600px]'

        }
    ]
    return (
        <div className='mt-20'>
            {
                item.map((item, index) => {
                    return (
                        <div key={index} className={'mt-20'}>
                            <InfoItem item={item} customImg={'rounded-lg'} />

                        </div>
                    )
                })
            }
        </div>
    )
}

export default AboutHero