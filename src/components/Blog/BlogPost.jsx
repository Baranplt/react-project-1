import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
function BlogPost() {
  return (
    <div className='container mt-48'>
      <h1 className='title text-center lg:text-start text-5xl leading-[62px] mb-7'>Latest Post</h1>
      <div className="item border border-secondary p-5 px-10 rounded-[50px] flex flex-col lg:flex-row items-center justify-between ">
        <div className="img  lg:w-6/12">
          <img src="/img/ImageBlog.png" alt="" />
        </div>
        <div className="text lg:w-5/12">
          <div className="title text-2xl leading-8">
            Low Cost Latest Invented Interior Designing Ideas
          </div>
          <div className="desc mt-10 text-[22px] leading-8">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.

          </div>
          <p className='text-[22px] leading-8 mt-10'>
            Lorem Ipsum is not simply random text. It has roots in a piece of classica.

          </p>
          <div className="date flex items-center justify-between mt-10">
            26 December,2022
            <span>
              <button className="bg-bg-item h-10 lg:w-[40px] w-10 lg:h-[40px] text-lg lg:text-3xl hover:bg-secondary transition-all duration-500  hover:text-white rounded-full flex justify-center items-center">
                <IoIosArrowForward />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost