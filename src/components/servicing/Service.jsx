import React from 'react'
import image1 from '../../assets/office.jpg'
import image2 from '../../assets/design.jpg'
import image3 from '../../assets/app.jpg'
import image4 from '../../assets/web.jpg'



const Service = () => {


    return (
        <>
            <div className='mx-auto h-screen'>
                <div className='bg-[blue] h-[444px]'>



                    <div className=' p-20 font-mulish  flex justify-evenly text-white gap-x-10 '>
                        <h1 className='font-bold text-4xl w-2/4 '>Custom Software Development Services</h1>
                        <p className='w-full tracking-wide '>California flyingfish bonytail chub redmouth whalefish cookiecutter shark whitebait zander basking shark Asiatic gassfish coolie loach spart pelican gulper,archerfish loosejae Blind goby.Southern grayling grunter,orange roughly tench smel stargazer bottlenose buri.</p>
                    </div>

                    <div className=' flex justify-evenly gap-10 font-mulish '>
                        <div className='w-1/6 '>
                            <div className='mb-0 relative'>
                                <img className='  w-full h-72 rounded-t-[40px] rounded-br-3xl' src={image1} alt="" />
                                <div className='absolute inset-0 h-[290px] bg-gradient-to-t from-[yellow] to-transparent'></div>
                                <h1 className=' relative bottom-24 right-10 font-extrabold w-min text-white text-9xl'>
                                    01
                                </h1>
                            </div>

                            <div className='relative bottom-24' >
                                <h1 className='py-5 font-bold text-xl  hover:text-teal-400'>IT Consulting</h1>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                                </p>
                            </div>
                        </div>
                        <div className='w-1/6 '>
                            <div className='mb-0 relative'>
                                <img className='  w-full h-72 rounded-t-[40px] rounded-br-3xl' src={image2} alt="" />
                                <div className='absolute inset-0 h-[290px] bg-gradient-to-t from-[skyblue] to-transparent'></div>
                                <h1 className=' relative bottom-24 right-10 font-extrabold w-min text-white text-9xl'>
                                    02
                                </h1>
                            </div>

                            <div className='relative bottom-24' >
                                <h1 className='py-5 font-bold text-xl  hover:text-teal-400'>UI/UX Design</h1>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                                </p>
                            </div>
                        </div>
                        <div className='w-1/6 '>
                            <div className='mb-0 relative'>
                                <img className='  w-full h-72 rounded-t-[40px] rounded-br-3xl' src={image3} alt="" />
                                <div className='absolute inset-0 h-[290px] bg-gradient-to-t from-[pink] to-transparent'></div>
                                <h1 className=' relative bottom-24 right-10 font-extrabold w-min text-white text-9xl'>
                                    03
                                </h1>
                            </div>

                            <div className='relative bottom-24' >
                                <h1 className='py-5 font-bold text-xl  hover:text-teal-400 '>App Development</h1>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                                </p>
                            </div>
                        </div>
                        <div className='w-1/6 '>
                            <div className='mb-0 relative'>
                                <img className='  w-full h-72 rounded-t-[40px] rounded-br-3xl' src={image4} alt="" />
                                <div className='absolute inset-0 h-[290px] bg-gradient-to-t from-[skyblue] to-transparent'></div>
                                <h1 className=' relative bottom-24 right-10 font-extrabold w-min text-white text-9xl'>
                                    04
                                </h1>
                            </div>

                            <div className='relative bottom-24' >
                                <h1 className='py-5 font-bold text-xl hover:text-teal-400 '>Web Development</h1>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Service