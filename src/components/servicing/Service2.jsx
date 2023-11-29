

import React from 'react';
import image2 from "../../assets/design.jpg";
import image3 from "../../assets/app.jpg";
import image4 from "../../assets/web.jpg";

const Service2 = () => {
    const services = [
        {
            title: 'IT Consulting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            imageSrc: image2,
            Number: '01',
            hex: '#F5E416',

        },
        {
            title: 'UI/UX Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imageSrc: image2,
            Number: '02',
            hex: '#46F4E7 ',
        },
        {
            title: 'App Development',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.gsd Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            imageSrc: image3,
            Number: '03',
            hex: '#FC7272',
        },
        {
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imageSrc: image4,
            Number: '04',
            hex: '#68C6DD',
        },
    ];


    const Service = ({ title, description, imageSrc, Number, hex }) => {
        const gradientStyle = {
            background: `linear-gradient(to top, ${hex}, transparent 60%)`,
        };

        return (
            <>
                <div className='h-full w-fit  gap-x-10 group hover:text-teal-500 '>

                    <div className='  relative  group overflow-hidden rounded-t-[30px] rounded-br-[30px]'>
                        <img className=' w-fit  gap-10 h-1/3  transition-transform transform-gpu duration-400 group-hover:scale-110  ' src={imageSrc} alt="" />
                        <div className=' absolute    inset-0  w-full' style={gradientStyle}>
                            <h1 className=' text-9xl  absolute -bottom-8 -left-10 font-mulish font-extrabold text-white'><span className="half-cut">{Number}</span></h1>
                        </div>
                    </div>

                    <h1 className=' py-5 text-2xl lg:text-justify text-center font-bold '>{title}</h1>
                    <p className=' mb-10  lg:text-justify text-center s   group-hover:text-black' >{description}</p>



                </div>
            </>

        );
    };

    //--------------------------------------------------------------------------------------------------------------------
    return (
        // Main div 
        <>
            <div className=' sm:absolute mb:10 bottom-64 sm:h-4/6 bg-blue-500 flex justify-center'>
                <div className=' sm:w-3/4  sm:m-10  h:min text-white  sm:flex sm:justify-evenly  '>

                    <h1 className=' px-5 mt-5 w-full h-min  sm:text-left text-4xl  font-bold font-mulish  '>Custom Software Development Services</h1>
                    <p className=' px-5 py-5 h-min sm:text-base  sm:w-full text-justify '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla consequuntur atque quaerat repellat sapiente voluptatum soluta tempora tenetur veniam quibusdam, dignissimos facere error, doloribus odit expedita qui id, beatae quae.</p>

                </div>
            </div>
            <div className='absolute w-fit sm:p-40'>

                <div className=" w-fit h-full  p-12  sm:flex sm:justify-evenly  gap-x-10 bg-white">
                    {services.map((service, index) => (
                        <Service key={index} {...service} />
                    ))}


                </div>
            </div>


        </>
    );
};

export default Service2;
