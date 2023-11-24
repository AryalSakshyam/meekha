import React from 'react'
import image1 from '../../assets/office.jpg'
import image2 from '../../assets/design.jpg'
import image3 from '../../assets/app.jpg'
import image4 from '../../assets/web.jpeg'



const Service = () => {
  return (
    <>
    <div className='py-20 px-10 grid grid-cols-4 gap-10'>
        <div className=''>
            <div>
                <img className='w-full h-full' src={image1} alt="" />
            </div>
            <div>
                <h1>IT Consulting</h1>
            </div>
            <div>dfdsfdsfsd</div>
        </div>
        <div className=''>
            <div >
                <img className='w-full h-full' src={image2} alt="" />
            </div>
            <div>
                <h1>UI/UX Design</h1>
            </div>
            <div>dcdscds</div>
        </div>
        <div>
            <div>
                <img className='w-full h-full ' src={image3} alt="" />
            </div>
            <div>
                <h1>
                    App Development
                </h1>
            </div>
            <div></div>
        </div>
        <div>
            <div>
                <img className='w-full h-full' src={image4} alt="" />
            </div>
            <div>
                <h1>Web Development</h1>
            </div>
            <div></div>
        </div>
    </div>
    </>
  )
}

export default Service