import React from 'react'
import Image from '../../assets/b.png'


const Home = () => {
  return (
  <>
  
  <div className='p-20'>

  <div className='flex justify-center flex-row gap-20'>

    <div className='pt-10 pl-10 font-mulish  flex justify-evenly text'>
  <div className='pb-5 w-full'>
      <h1 className='text 2xl pb-5 text-sky-500'>15 YEARS OF SUPPORT</h1>
      <h2 className='text-4xl pb-5 text-justify font-bold text-sky-700 '>Managed IT For Small To <br />  Midsize Business </h2>
    <div className=''>
      <p className='pr-10 pb-5 text-left text-sky-700'>Preventing tech-induced headaches and data security threats <br /> isn't your job-it's ours. For over to deacades , we've stepped <br /> in with managed solutions to provide Business with a firm IT <br /> foundation to stand on.We'll protect your business and your <br />data , so all you'll need to focous on is getting the job done. </p>
  </div>
    <button className=' bg-sky-400 p-3 text-white rounded-md hover:bg-blue-500'>Learn More</button>
    </div>
    </div>
    <div>
      
      <img className='w-full h-96' src={Image} alt="" />
    </div>
  </div>

  </div>

    
  </>
  )
}

export default Home