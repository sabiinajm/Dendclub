import { useRef, useState, useMemo } from "react";

import { Pagination } from 'antd';
import SearchBar from "./components/searchBar/SearchBar";
import DrCard from "./components/DrCard/DrCard";

const fakeDoctors = [...Array(20)].map((_, i) => ({
    id: i,
    name: `Dr. ${["Leyla Aliyeva", "Murad Aliyev", "Aytac Aliyeva", "Elchin Aliyev", "Samir Aliyev"][i % 5]}`,
    specialty: ["Therapist", "Dentist", "Surgeon"][i % 3],
}));

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

    const [searchTerm, setSearchTerm] = useState("");

    const filteredDoctors = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) return fakeDoctors;

        const startsWith = str =>
            str
                .toLowerCase()
                .split(/\s+/)
                .some(word => word.startsWith(q));

        return fakeDoctors.filter(
            doc => startsWith(doc.name) || startsWith(doc.specialty)
        );
    }, [searchTerm]);

    return (
        <main className="bg-[#f2f5f8]  pt-[34px]">
            <div className="max-w-[1224px] px-2 xl:px-0 mx-auto">
                <h1 className="text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-center">Peşəkar Həkimlərimiz</h1>
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
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
                <div className="pb-[56px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                        {filteredDoctors.map((doc, index) => (
                            <DrCard key={doc.id} doctor={doc} />
                        ))}
                        {filteredDoctors.length === 0 && (
                            <p className="col-span-full text-gray-500 text-center">
                                Heç bir nəticə tapılmadı.
                            </p>
                        )}
                    </div>
                    <div className="flex justify-center items-center min-h-[300px] mb-[40px]">
                        <Pagination
                            showSizeChanger={false}
                            defaultCurrent={1}
                            total={filteredDoctors.length}
                            className="custom-pagination"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Doctors