import React from 'react'

function HomeComment() {

    const item = [
        {
            userImg: 'natasha',
            userName: 'Nattasha Mith',
            city: 'Sydney, USA',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugit repudiandae, rem harum perspiciatis ipsam! '
        },
        {
            userImg: 'raymond',
            userName: 'Raymond Galario',
            city: 'Sydney, Australia',
            text: 'Lorem Ipsum is simply dummy  text of the typesetting industry. Ipsum has been scrambled it to make a type book.'
        },
        {
            userImg: 'benny',
            userName: 'Benny Roll',
            city: 'Sydney, New York',
            text: 'Lorem Ipsum is simply dummy  text of the typesetting industry. Ipsum has been scrambled.'
        }
    ]
    return (
        <div className='container mt-52 bg-bg-item lg:rounded-[70px] rounded-3xl py-[88px] px-6 flex flex-col items-center justify-center text-center'>
            <div className="title text-5xl leading-[62px] lg:w-6/12 mb-9">
                What the People Thinks
                About Us
            </div>
            <div className="item grid lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    item.map((item, index) => {
                        return (
                            <div className="item  text-start bg-white pt-14 pr-9 pb-20 pl-9 rounded-3xl">
                                <div className="user flex mb-6">
                                    <div className="img">
                                        <img src={`/img/user-${item.userImg}.png`} alt="" />
                                    </div>
                                    <div className="info ml-6">
                                        <div className="name title text-2xl leading-10">
                                            {item.userName}
                                        </div>
                                        <div className="city text-lg leading-7 text-start">
                                            {item.city}
                                        </div>
                                    </div>
                                </div>
                                <div className="text text-[22px] leading-8">
                                    {item.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeComment