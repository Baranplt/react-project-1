import React from 'react'

function ServicesWork() {
    const data = [
        {
            title: 'Concept & Details',
            desc: '  It is a long established fact  will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.  ',
            img: 'Image',
            icon: 'Icon1',
            number: '01',
        },
        {
            title: 'Idea for Work',
            desc: '  It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ',
            img: 'Image2',
            icon: 'Icon2',
            number: '02',
            position: 'right'
        },
        {
            title: 'Desing',
            desc: ' It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ',
            img: 'Image3',
            icon: 'Icon3',
            number: '03'
        }
        ,
        {
            title: 'Perfection',
            desc: ' It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ',
            img: 'Image4',
            icon: 'Icon4',
            number: '04',
            position: 'right'

        }
    ]
    return (
        <div className='container lg:py-40 py-10 px-5  lg:px-28  rounded-3xl lg:rounded-[70px] bg-bg-item'>
            <div className="header w-full lg:w-8/12 mx-auto text-center">
                <div className="title text-2xl lg:text-[50px] leading-[62px]">How We Work</div>
                <div className="desc text-sm lg:text-[22px] leading-[33px]">It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>

            {
                data.map((item, index) => {
                    return (
                        <div className={`item lg:flex   items-center justify-between  my-20 ${item.position === 'right' ? 'flex-row-reverse' : null} `}>
                            <div className="img lg:w-6/12 ">
                                <img className='max-w-full max-h-full  w-max h-max' src={`/img/servicesWork/${item.img}.png`} alt="" />
                            </div>
                            <div className="text lg:w-5/12 ">
                                <div className="hdr w-full flex items-center justify-between">
                                    <div className="icon">
                                        <img className='max-w-full max-h-full  w-max h-max' src={`/img/servicesWork/${item.icon}.png`} alt="" />

                                    </div>
                                    <div className="number title text-[120px] leading-[150px] text-white">
                                        {item.number}
                                    </div>
                                </div>
                                <div className="title mt-14 text-4xl leading-10">{item.title}</div>
                                <div className="desc text-xl mt-3 leading-7">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServicesWork