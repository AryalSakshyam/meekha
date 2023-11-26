import React from "react";
import image1 from "../../assets/office.jpg";
import image2 from "../../assets/design.jpg";
import image3 from "../../assets/app.jpg";
import image4 from "../../assets/web.jpg";

const Service = () => {
    return (
        <>
            <div className=" h-[555px] bg-blue-500  ">


                {/* Content Section */}
                <div className=" p-20 text-white md:p-20 font-mulish flex flex-col md:flex-row sm:justify-center items-center sm:text-end md:text-start">
                    <h1 className=" md:px-20 font-bold sm:text-2xl md:text-4xl lg:w-1/2 mb-4">
                        Custom Software Development Services
                    </h1>
                    <p className="py-5 px-4 md:px-0 w-full text-sm md:text-base tracking-wide md:w-1/2">
                        California flyingfish bonytail chub redmouth whalefish
                        cookiecutter shark whitebait zander basking shark Asiatic gassfish
                        coolie loach spart pelican gulper, archerfish loosejae Blind goby.
                    </p>
                </div>


                {/* Service Cards */}
                <div className="  bottom-10 p-20 mt-20 md:p-10 flex flex-col md:flex-row justify-center gap-x-4 md:gap-x-16 font-mulish">
                    <div className="w-full md:w-1/6 ">
                        <div className="relative mb-0">
                            <img
                                className="w-fit sm:h-52 md:h-72 object-cover rounded-t-[40px] rounded-br-3xl"
                                src={image1}
                                alt="Service 1"
                            />
                            <div className="  absolute inset-0 sm:h-[170px] sm:w-[192px] md:h-[290px] bg-gradient-to-t from-yellow-300 to-transparent"></div>
                            <h1 className="absolute top-32 md:top-60 right-4 md:right-44  font-extrabold text-white text-4xl md:text-7xl">
                                01
                            </h1>
                        </div>
                        <div className=" sm:h-16 relative text-black py-5 ">
                            <h1 className=" md:py-5 font-bold text-sm md:text-xl hover:text-teal-400">
                                IT Consulting
                            </h1>
                            <p className=" text-xs md:text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 ">
                        <div className="relative mb-0 ">
                            <img
                                className="w-fit sm:h-52 md:h-72 object-cover rounded-t-[40px] rounded-br-3xl"
                                src={image2}
                                alt="Service 1"
                            />
                            <div className="absolute inset-0 sm:h-[170px] md:h-[290px] sm:w-[192px] bg-gradient-to-t from-teal-300 to-transparent"></div>
                            <h1 className="absolute top-32 md:top-60 right-4 md:right-44  font-extrabold text-white text-4xl md:text-7xl">
                                02
                            </h1>
                        </div>
                        <div className="sm:h-16 relative text-black py-5">
                            <h1 className=" md:py-5 font-bold text-sm md:text-xl hover:text-teal-400">
                                UI/UX Desigm
                            </h1>
                            <p className="text-xs md:text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 ">
                        <div className="relative mb-0">
                            <img
                                className="w-fit sm:h-52 md:h-72 object-cover rounded-t-[40px] rounded-br-3xl"
                                src={image3}
                                alt="Service 1"
                            />
                            <div className="absolute inset-0 sm:h-[170px] md:h-[290px] sm:w-[192px] bg-gradient-to-t from-red-300 to-transparent"></div>
                            <h1 className="absolute top-32 md:top-60 right-4 md:right-44  font-extrabold text-white text-4xl md:text-7xl">
                                03
                            </h1>
                        </div>
                        <div className="relative text-black py-5">
                            <h1 className=" md:py-5 font-bold text-sm md:text-xl hover:text-teal-400">
                                App Development
                            </h1>
                            <p className="text-xs md:text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 ">
                        <div className="relative ">
                            <img
                                className="w-fit sm:h-52 md:h-72 object-cover rounded-t-[40px] rounded-br-3xl"
                                src={image4}
                                alt="Service 1"
                            />
                            <div className=" absolute inset-0 sm:h-[170px] md:h-[290px] sm:w-[192px] bg-gradient-to-t from-blue-300 to-transparent"></div>
                            <h1 className="absolute top-32 md:top-60 right-4 md:right-44  font-extrabold text-white text-4xl md:text-7xl">
                                04
                            </h1>
                        </div>
                        <div className="relative text-black py-5  ">
                            <h1 className="  md:py-5 font-bold  text md:text-xl hover:text-teal-400">
                                Web Development
                            </h1>
                            <p className="text-xs md:text-sm">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Service;
