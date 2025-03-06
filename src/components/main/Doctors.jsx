import { useRef, useState } from "react";
import DrCard from "./DrCard";

import { Pagination } from 'antd';

function Doctors() {
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (direction) => {
        const newSlide = direction === 'next' ? currentSlide + 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
        setIsAtStart(newSlide === 0);
        setIsAtEnd(newSlide === 7);

    };

    const handleDropdownToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <main className="bg-[#f2f5f8]  pt-[34px]">
            <div className="max-w-[1224px] px-2 xl:px-0 mx-auto">
                <h1 className="text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-center">Peşəkar Həkimlərimiz</h1>
                <div className="py-[32px] flex items-center justify-center">
                    <div className="relative">
                        <input type="text" placeholder="Axtarın " className="w-[250px] md:min-w-[713px] bg-white py-[15px] rounded-[16px] pl-4 placeholder:text-[#636366]" />
                        <div className="absolute bottom-[6px] flex justify-center items-center right-[7px] h-[42px] w-[42px] rounded-full bg-[#0D9CD8]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.0004 20.9999L16.6504 16.6499" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`relative overflow-x-hidden pb-[49px]`}>
                    {/* Swiper wrapper */}
                    <div className="flex justify-between items-center ">
                        {/* Slides Container */}
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentSlide * 180}px)` }}
                        >
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div className="!w-[180px] relative" key={index}>
                                    <div>
                                        <button
                                            onClick={() => handleDropdownToggle(index)}
                                            className="bg-white w-[175px] rounded-[8px] h-[52px] flex justify-evenly items-center"
                                        >
                                            Psixoterapiya
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                                <path
                                                    d="M1 1L7 7L13 1"
                                                    stroke="#3a3b41"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        {openIndex === index && (
                                            <div className="mt-2 p-2 bg-white shadow-lg rounded-[12px] w-[257px] flex flex-col justify-between absolute z-50 top-[60px] left-0">
                                                {Array.from({ length: 8 }).map((_, idx) => (
                                                    <div key={idx} className="h-[44px] hover:bg-[#F2F5F8] rounded-[8px] flex items-center pl-3">
                                                        Ailə Psixoloqu
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Navigation Buttons */}
                    <div
                        className={`custom-button-prev absolute top-[25px] left-0 transform -translate-y-[50%] h-[52px] w-[48px] bg-white rounded-[8px] flex justify-center items-center z-10 transition-all duration-300 ease-in-out ${isAtStart ? 'opacity-0 transform -translate-x-full' : 'opacity-100 transform translate-x-0'}`}
                        onClick={() => handleSlideChange('prev')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="#3A3B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div
                        className={`custom-button-next absolute top-[25px] right-0 transform -translate-y-[50%] h-[52px] w-[48px] bg-white rounded-[8px] flex justify-center items-center z-10 transition-all duration-300 ease-in-out ${isAtEnd ? 'opacity-0 transform translate-x-full' : 'opacity-100 transform translate-x-0'}`}
                        onClick={() => handleSlideChange('next')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="#3A3B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className=" pb-[56px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                        {[...Array(20)].map((_, index) => (
                            <DrCard key={index} doctorId={index} />
                        ))}
                    </div>
                    <div className="flex justify-center items-center min-h-[300px] mb-[40px]]">
                        <Pagination
                            showSizeChanger={false}
                            defaultCurrent={1}
                            total={80}
                            className="custom-pagination"
                        />

                    </div>
                </div>
            </div>
        </main>
    )
}
export default Doctors