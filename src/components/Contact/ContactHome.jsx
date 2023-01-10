import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiMessage, BiPhoneCall, BiWorld } from 'react-icons/bi'
import { CgFacebook } from 'react-icons/cg'
import { GrLinkedinOption } from 'react-icons/gr'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import Button from '../button/Button'
function ContactHome() {
    return (
        <div className='container mt-10  lg:mt-48'>
            <div className="title mb-20 lg:px-60 text-center text-2xl lg:text-5xl lg:leading-[75px]">
                We love meeting new people and helping them.
            </div>

            <div className="body flex flex-col lg:flex-row justify-between items-center">
                <div className="contact py-20 px-8 rounded-[50px] bg-bg-item lg:w-4/12">
                    <ul>
                        <li className='flex items-center my-7 '><span className='mr-5 w-10 h-10 rounded-full flex items-center justify-center bg-white text-xl leading-8 text-secondary'><BiMessage /></span> info@yourdomain.com</li>
                        <li className='flex items-center my-7 '><span className='mr-5 w-10 h-10 rounded-full flex items-center justify-center bg-white text-xl leading-8 text-secondary'><BiPhoneCall /></span> +1 (378) 400-1234
                        </li>
                        <li className='flex items-center my-7 '><span className='mr-5 w-10 h-10 rounded-full flex items-center justify-center bg-white text-xl leading-8 text-secondary'><BiWorld /></span> www.yourdomain.com</li>
                    </ul>
                    <div className="icon flex items-center  mt-14">
                        <div className="fb mr-3 lg:mr-4">
                            <CgFacebook size={20} />
                        </div>
                        <div className="tw mr-3 lg:mr-4">
                            <AiOutlineTwitter size={20} />
                        </div>
                        <div className="link mr-3 lg:mr-4">
                            <GrLinkedinOption size={20} />
                        </div>
                        <div className="inst mr-3 lg:mr-4">
                            <AiOutlineInstagram size={20} />
                        </div>
                    </div>
                </div>
                <div className="form  mt-20 lg:mt-0 lg:w-6/12">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            subject: '',
                            message: ''

                        }}

                        validationSchema={
                            Yup.object({
                                name: Yup.string().required('Please Enter Your Name'),
                                email: Yup.string().email().required('Please Enter Your Email'),
                                message: Yup.string().required('Please Enter Your Message'),
                                phone: Yup.number().required('Please Enter Your phone'),
                                subject: Yup.string().required('Please Enter Your Subject'),

                            })
                        }
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            console.log(values)
                            setTimeout(() => {
                                setSubmitting(false)
                                resetForm()
                            }, 2000);
                        }}
                    >
                        {
                            ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                <form onSubmit={handleSubmit}  >


                                    <div className="name grid grid-cols-2 gap-5">

                                        <input type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className='outline-none border-b'
                                            placeholder='Name'
                                            id='name'
                                        />

                                        <input
                                            value={values.email}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className='outline-none   border-b'
                                            placeholder='Email'
                                            id='email'
                                            type="email" />
                                    </div>
                                    <div className=" grid grid-cols-2 gap-5">
                                        {errors.name && touched.name && (
                                            <div className=' text-red-700 text-sm italic'>{errors.name}</div>
                                        )}

                                        {errors.email && touched.email && (
                                            <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                        )}
                                    </div>
                                    <div className="name mt-10 grid grid-cols-2 gap-5">

                                        <input type="text"
                                            value={values.subject}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className='outline-none border-b'
                                            placeholder='subject'
                                            id='subject'
                                        />

                                        <input
                                            value={values.phone}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className='outline-none   border-b'
                                            placeholder='phone'
                                            id='phone'
                                            type="number" />
                                    </div>
                                    <div className=" grid grid-cols-2 gap-5">
                                        {errors.subject && touched.subject && (
                                            <div className=' text-red-700 text-sm italic'>{errors.subject}</div>
                                        )}

                                        {errors.phone && touched.phone && (
                                            <div className=' text-red-700 text-sm italic'>{errors.phone}</div>
                                        )}
                                    </div>

                                    <div className="message grid grid-cols-1  mt-5">
                                        <textarea value={values.message}
                                            onChange={handleChange} name="message" placeholder='Hello Iam Intrested in..' className='border-b outline-none' id="" cols="30" rows="5"></textarea>
                                    </div>
                                    {errors.message && touched.message && (
                                        <div className=' text-red-700 text-sm italic'>{errors.message}</div>
                                    )}
                                    <div className="btn flex justify-end mt-10">
                                        <Button type={'submit'} text={'Send Now'} custom={'lg:py-5 lg:px-13 text-sm '} iconCustom={'text-lg text-secondary'} />

                                    </div>
                                </form>
                            )
                        }

                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactHome