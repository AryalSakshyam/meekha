import React from 'react'
import image1 from '../../assets/office.jpg'
import image2 from '../../assets/design.jpg'
import image3 from '../../assets/app.jpg'
import image4 from '../../assets/web.jpg'



const Service = () => { 

    
  return (
    <>
    <div className='p-10 grid grid-cols-4 gap-10 font-mulish'>
        <div className=''>
                
            <div className='mb-5 bg-gradient-to-b from-black to-[red]'>
                <img className='  w-full h-full rounded-t-[40px] rounded-br-3xl' src={image1} alt="" />
            </div>
            <div >
                <h1 className='py-5 font-bold text-xl '>IT Consulting</h1>
            </div>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                </p>
            </div>
        </div>
        <div>
            <div className='mb-5 '>
                <img className='w-full h-full rounded-t-[40px] rounded-br-3xl bg-gradient-bg-black-to-bg-white' src={image2} alt="" />
            </div>
            <div>
                <h1 className='py-5 font-bold text-xl ' >UI/UX Design</h1>
            </div>
            <div><p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                </p></div>
        </div>
        <div>
            <div className='mb-5 '>
                <img className='w-full h-full rounded-t-[40px] rounded-br-3xl ' src={image3} alt="" />
            </div>
            <div>
                <h1 className='py-5 font-bold text-xl '>
                    App Development
                </h1>
            </div>
            <div><p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                </p></div>
        </div>
        <div>
            <div className='mb-5'>
                <img className='w-full h-full rounded-t-[40px] rounded-br-3xl' src={image4} alt="" />
            </div>
            <div>
                <h1 className='py-5 font-bold text-xl '>Web Development</h1>
            </div>
            <div><p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora sed ipsum, porro a, accusamus vero quo alias sint quaerat qui corrupti tempore quibusdam perferendis debitis odit assumenda illo suscipit nobis!
                </p></div>
        </div>
    </div>
    </>
  )
}

export default Service