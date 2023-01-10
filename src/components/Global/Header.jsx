import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { AiFillCloseCircle, AiOutlineBars } from 'react-icons/ai'
function Header() {

    const [openSidebar, setOpenSidebar] = useState(false)

    const clicked = () => {
        setOpenSidebar(!openSidebar)
    }
    const navigate = useNavigate()

    const singlePage = () => {

        navigate("/");
    }
    return (
        <div className=' flex lg:items-center justify-between relative pt-5 lg:my-5   '>
            <div className={`container   flex items-center `}>
                <div onClick={() => { singlePage() }} className="logo lg:h-12 w-full ">
                    <img className='w-auto h-auto max-w-full max-h-full' src="img/Logo.svg" alt="" />
                </div>
                <nav className='hidden lg:block'>
                    <ul className='flex items-center'>
                        <li>
                            <NavLink className={'text-lg mr-8 font-normal leading-6  '} to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={'text-lg mr-8 font-normal leading-6 '} to={'/about'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className={'text-lg mr-8 font-normal leading-6 '} to={'/services'}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink className={'text-lg mr-8 font-normal leading-6 '} to={'/project'}>Project</NavLink>
                        </li>
                        <li>
                            <NavLink className={'text-lg mr-8 font-normal leading-6 '} to={'/blog'}>Blog</NavLink>
                        </li> <li>
                            <NavLink className={'text-lg mr-8 font-normal leading-6 '} to={'/contact'}>Contact</NavLink>
                        </li>
                        <button className={'text-lg font-normal leading-6 '}>
                            <BiSearchAlt2 />
                        </button>
                    </ul>
                </nav>
                <div onClick={() => { clicked() }} className="btn mr-5 lg:hidden"><AiOutlineBars size={30} /></div>
            </div>
            <div className={`sidebar z-20   lg:hidden -right-[400px] pt-4 bg-white  absolute w-full h-screen transition-all duration-500 ${openSidebar && '-right-0 z-30'}  `}>
                <div className="logo flex justify-between">
                    <img className='w-auto ml-10 h-auto max-w-full max-h-full' src="img/Logo.svg" alt="" />

                    <button onClick={() => { clicked() }} className='p-4'> <AiFillCloseCircle size={30} /></button>

                </div>
                <nav >
                    <ul className=' py-6 px-1 text-center'>
                        <NavLink onClick={() => { clicked() }} className={'text-lg  font-normal leading-6  '} to={'/'}>
                            <li className='hover:bg-slate-400 py-4 flex items-center justify-center'>
                                Home
                            </li></NavLink>


                        <NavLink onClick={() => { clicked() }} className={'text-lg  font-normal leading-6 '} to={'/about'}>
                            <li className='hover:bg-slate-400 py-4 flex items-center justify-center'>
                                About
                            </li>
                        </NavLink>
                        <NavLink onClick={() => { clicked() }} className={'text-lg  font-normal leading-6 '} to={'/services'}>
                            <li className='hover:bg-slate-400 py-4 flex items-center justify-center'>
                                Services
                            </li>
                        </NavLink>
                        <NavLink onClick={() => { clicked() }} className={'text-lg  font-normal leading-6 '} to={'/project'}>
                            <li className='hover:bg-slate-400 py-4 flex items-center justify-center'>
                                Project
                            </li>
                        </NavLink>
                        <NavLink onClick={() => { clicked() }} className={'text-lg  font-normal leading-6 '} to={'/blog'}>
                            <li className='hover:bg-slate-400 py-4 flex items-center justify-center'>
                                Blog
                            </li>
                        </NavLink>
                        <NavLink onClick={() => { clicked() }} className={'text-lg  font-normal leading-6 '} to={'/contact'}>
                            <li className=' hover:bg-slate-400 py-4 flex items-center justify-center'>
                                Contact
                            </li>
                        </NavLink>

                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header