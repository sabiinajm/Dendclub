function Queues() {
    return (
        <>
            <div className="bg-[#F2F5F8] h-full px-[12px] md:px-[32px] pt-4">
                <ul className="flex">
                    <li className="text-black border-b border-black  inline-flex items-center gap-2 py-3 px-4 font-medium text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_682_17098)">
                                <path d="M12.6665 5.80782L9.11119 3.04248C8.79918 2.79975 8.41516 2.66797 8.01986 2.66797C7.62455 2.66797 7.24053 2.79975 6.92852 3.04248L3.37252 5.80782C3.15882 5.974 2.98592 6.18683 2.86703 6.43005C2.74814 6.67326 2.6864 6.94043 2.68652 7.21115V12.0111C2.68652 12.3648 2.827 12.7039 3.07705 12.954C3.3271 13.204 3.66623 13.3445 4.01986 13.3445H12.0199C12.3735 13.3445 12.7126 13.204 12.9627 12.954C13.2127 12.7039 13.3532 12.3648 13.3532 12.0111V7.21115C13.3532 6.66248 13.0999 6.14448 12.6665 5.80782Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6668 10C9.1935 10.8887 6.8055 10.8887 5.3335 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_682_17098">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Klinikada görüş
                    </li>
                    <li className="text-black border-b border-[#E5E5EA]  inline-flex items-center gap-2 py-3 px-4 font-medium text-[.88rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_682_17098)">
                                <path d="M12.6665 5.80782L9.11119 3.04248C8.79918 2.79975 8.41516 2.66797 8.01986 2.66797C7.62455 2.66797 7.24053 2.79975 6.92852 3.04248L3.37252 5.80782C3.15882 5.974 2.98592 6.18683 2.86703 6.43005C2.74814 6.67326 2.6864 6.94043 2.68652 7.21115V12.0111C2.68652 12.3648 2.827 12.7039 3.07705 12.954C3.3271 13.204 3.66623 13.3445 4.01986 13.3445H12.0199C12.3735 13.3445 12.7126 13.204 12.9627 12.954C13.2127 12.7039 13.3532 12.3648 13.3532 12.0111V7.21115C13.3532 6.66248 13.0999 6.14448 12.6665 5.80782Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.6668 10C9.1935 10.8887 6.8055 10.8887 5.3335 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_682_17098">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Video görüş
                    </li>
                </ul>
                <ul className="pt-4 text-sm flex gap-3 flex-wrap pb-10">
                    <button className="bg-white px-4 py-2 text-[#0D9CD8] rounded-lg">Bu gün</button>
                    <button className="bg-white px-4 py-2 text-[#64717C] rounded-lg">Bu həftə</button>
                    <button className="bg-white px-4 py-2 text-[#64717C] rounded-lg">Bu ay</button>
                </ul>
                {/* patients */}
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-lg">
                        <div className="flex p-6 justify-between flex-wrap md:flex-nowrap md:items-start gap-3">
                            <div className="flex flex-col max-w-[500px] text-[#64717C] gap-4 text-sm md:text-base">
                                <div className="flex gap-3">
                                    <img src="/assets/images/user.png" className="h-[48px] w-[48px] object-[90%] object-cover rounded-full" alt="" />
                                    <div className="font-medium">
                                        <h3 className=" text-[#2C2C2E]">Adil Əliyev</h3>
                                        <p className="text-sm text-[#64717C]">Klinikada görüş</p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit.</p>
                            </div>
                            <p className="text-[#64717C] flex text-xs items-center gap-2 sm:text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.795 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V11H3M15 3V7M7 3V7M18 16.496V18L19 19M14 18C14 19.0609 14.4214 20.0783 15.1716 20.8284C15.9217 21.5786 16.9391 22 18 22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14C16.9391 14 15.9217 14.4214 15.1716 15.1716C14.4214 15.9217 14 16.9391 14 18Z" stroke="#64717C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                09:30, 12 Noyabr 2024</p>
                            <div className="flex flex-col gap-2 md:h-[114px] justify-between">
                                <div className="flex gap-6">
                                    <div className="w-[36px] h-[32px] bg-[#D3FDDD] rounded-[4px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clipPath="url(#clip0_682_14827)">
                                                <path d="M4.16699 9.9987L8.33366 14.1654L16.667 5.83203" stroke="#2DAA4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_682_14827">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="w-[36px] h-[32px] bg-[#FCD8D5] rounded-[4px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clipPath="url(#clip0_682_14829)">
                                                <path d="M15 5L5 15" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 5L15 15" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_682_14829">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-xs text-[#0D9CD8] flex whitespace-nowrap" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_682_16974)">
                                            <path d="M8 6H8.00667" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.3335 8H8.00016V10.6667H8.66683" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 2C12.8 2 14 3.2 14 8C14 12.8 12.8 14 8 14C3.2 14 2 12.8 2 8C2 3.2 3.2 2 8 2Z" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_682_16974">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Cavab gözlənilir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg">
                        <div className="flex p-6 justify-between flex-wrap md:flex-nowrap md:items-start gap-3">
                            <div className="flex flex-col max-w-[500px] text-[#64717C] gap-4 text-sm md:text-base">
                                <div className="flex gap-3">
                                    <img src="/assets/images/user.png" className="h-[48px] w-[48px] object-[90%] object-cover rounded-full" alt="" />
                                    <div className="font-medium">
                                        <h3 className=" text-[#2C2C2E]">Adil Əliyev</h3>
                                        <p className="text-sm text-[#64717C]">Klinikada görüş</p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit.</p>
                            </div>
                            <p className="text-[#64717C] flex text-xs items-center gap-2 sm:text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.795 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V11H3M15 3V7M7 3V7M18 16.496V18L19 19M14 18C14 19.0609 14.4214 20.0783 15.1716 20.8284C15.9217 21.5786 16.9391 22 18 22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14C16.9391 14 15.9217 14.4214 15.1716 15.1716C14.4214 15.9217 14 16.9391 14 18Z" stroke="#64717C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                09:30, 12 Noyabr 2024</p>
                            <div className="flex flex-col gap-2 md:h-[114px] justify-between">
                                <div className="flex gap-6">
                                    <div className="w-[36px] h-[32px] bg-[#D3FDDD] rounded-[4px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clipPath="url(#clip0_682_14827)">
                                                <path d="M4.16699 9.9987L8.33366 14.1654L16.667 5.83203" stroke="#2DAA4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_682_14827">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="w-[36px] h-[32px] bg-[#FCD8D5] rounded-[4px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clipPath="url(#clip0_682_14829)">
                                                <path d="M15 5L5 15" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 5L15 15" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_682_14829">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-xs text-[#0D9CD8] flex whitespace-nowrap" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_682_16974)">
                                            <path d="M8 6H8.00667" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.3335 8H8.00016V10.6667H8.66683" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 2C12.8 2 14 3.2 14 8C14 12.8 12.8 14 8 14C3.2 14 2 12.8 2 8C2 3.2 3.2 2 8 2Z" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_682_16974">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Cavab gözlənilir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Queues