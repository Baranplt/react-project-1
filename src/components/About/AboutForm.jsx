import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import Button from '../button/Button';
function AboutForm() {
    return (
        <div className=' w-full lg:w-6/12 '>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required('Please Enter Your Name'),
                        email: Yup.string().email().required('Please Enter Your Email'),
                        message: Yup.string().required('Please Enter Your Message')

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

                            <div className="title text-2xl lg:text-[48px] lg:leading-[62px] mb-20 text-center">
                                Creative project? Let's have
                                a productive talk.
                            </div>
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

                            <div className="message grid grid-cols-1  mt-5">
                                <textarea value={values.message}
                                    onChange={handleChange} name="message" placeholder='Hello Iam Intrested in..' className='border-b outline-none' id="" cols="30" rows="5"></textarea>
                            </div>
                            {errors.message && touched.message && (
                                <div className=' text-red-700 text-sm italic'>{errors.message}</div>
                            )}
                            <div className="btn flex justify-center mt-5">
                                <Button type={'submit'} text={'Send Now'} custom={'lg:py-3 lg:px-4 text-sm '} iconCustom={'text-lg text-secondary'} />

                            </div>
                        </form>
                    )
                }


            </Formik>
        </div>
    )
}

export default AboutForm