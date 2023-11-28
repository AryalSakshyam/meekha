

import React from 'react';
import image1 from "../../assets/office.jpg";
import image2 from "../../assets/design.jpg";
import image3 from "../../assets/app.jpg";
import image4 from "../../assets/web.jpg";

const Service2 = () => {
    const services = [
        {
            title: 'Service 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            imageSrc: image2,
            Number: '01',
            hex: '#FF7F7F ',

        },
        {
            title: 'Service 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imageSrc: image2,
            Number: '02',
            hex: '#0000FF',
        },
        {
            title: 'Service 3',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            imageSrc: image3,
            Number: '03',
            hex: '#FFFF00',
        },
        {
            title: 'Service 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            imageSrc: image4,
            Number: '04',
            hex: '#FFC0CB',
        },
    ];
    const Service = ({ title, description, imageSrc, Number, hex }) => {
        const gradientStyle = {
            background: `linear-gradient(to top, ${hex}, transparent)`,
        };

        return (
            <>
                <div className='h-screen w-fit '>
                    <div className='relative'>
                        <img className='rounded-t-[40px] rounded-br-[40px]  ' src={imageSrc} alt="" />
                        <div className='absolute inset-0  bg-gradient-to-t rounded-br-[40px]' style={gradientStyle}>
                            <h1 className=' text-9xl  absolute -bottom-8 -left-10 font-mulish font-extrabold text-white'><span className="half-cut">{Number}</span></h1>
                        </div>

                    </div>
                    <h1 className='  text-4xl font-bold py-10'>{title}</h1>
                    <p>{description}</p>
                </div>
            </>

        );
    };


    return (
        // Main div 
        <>
            <div className='flex justify-between bg-white'>
                <h1 className='text-9xl font-bold font-mulish '>hello</h1>
                <p className='py-5 w-1/2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla consequuntur atque quaerat repellat sapiente voluptatum soluta tempora tenetur veniam quibusdam, dignissimos facere error, doloribus odit expedita qui id, beatae quae.</p>
            </div>
            <div className=" flex justify-center items-center p-40 gap-10 bg-white">
                {services.map((service, index) => (
                    <Service key={index} {...service} />
                ))}

            </div>
        </>
    );
};

export default Service2;
