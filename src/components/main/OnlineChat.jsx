import { Link } from "react-router-dom"

function OnlineChat() {
    return (
        <div className="bg-[#F2F5F8] absolute top-0 z-[900] w-full min-h-screen p-7">
            <Link to={'/'} className="text-2xl rotate-45 flex justify-center items-center w-[34px] rounded-full h-[34px] border border-black">
                +
            </Link>
            <div className="flex flex-col lg:flex-row gap-[23px]">
                <div className="bg-white relative p-[15px] sm:p-[50px] my-4 rounded-[12px] lg:w-[462px]">
                    <h4 className="text-center text-[#2C2C2E] text-xl text-medium">Canlı çat</h4>
                    <input type="text" placeholder="Axtarın " className="px-3 my-[40px] text-[#AEAEB2] w-full border border-[#D1D1D6] rounded-[16px] h-[40px]" />
                    <div className="flex flex-col gap-5 ">
                        <div className="bg-[#F2F5F8] xs:flex gap-3 w-full py-[12px] px-[9px] rounded-[12px]">
                            <img src="/assets/images/drAylin.png" alt="doc" className="rounded-full bg-[#F2F5F8] w-[80px] h-[80px] object-cover" />
                            <div>
                                <h3 className="font-medium text-[#2C2C2E]">Dr.Aylin Əliyeva</h3>
                                <h5 className="text-[.75rem] text-[#64717C]">Uzman Psixoloq</h5>
                                <div className="text-[.75rem] text-[#64717C] font-medium">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z" fill="#F4B814" />
                                        </svg>
                                        4.8
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10.0003 5.2749V9.99712V5.2749ZM9.89393 10.006H6.83838H9.89393Z" fill="#636366" />
                                            <path d="M9.9885 16.3862C13.517 16.3862 16.3774 13.5258 16.3774 9.99729C16.3774 6.4688 13.517 3.6084 9.9885 3.6084C6.46001 3.6084 3.59961 6.4688 3.59961 9.99729C3.59961 13.5258 6.46001 16.3862 9.9885 16.3862Z" stroke="#636366" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.0003 5.2749V9.99712M9.89393 10.006H6.83838" stroke="#636366" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        09:00-17:00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0D9CD8] xs:flex gap-3 w-full py-[12px] px-[9px] rounded-[12px]">
                            <div className="relative">
                                <img src="/assets/images/drAylin.png" alt="doc" className="rounded-full bg-[#F2F5F8] w-[80px] h-[80px] object-cover" />
                                <div className="absolute top-0 right-3 bg-[#34C759] h-[14px] w-[14px] rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="font-medium text-white">Dr.Aylin Əliyeva</h3>
                                <h5 className="text-[.75rem] text-[#fff]">Uzman Psixoloq</h5>
                                <div className="text-[.75rem] text-[#fff] font-medium">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z" fill="#F4B814" />
                                        </svg>
                                        4.8
                                    </div>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10.0003 5.2749V9.99712V5.2749ZM9.89393 10.006H6.83838H9.89393Z" fill="#636366" />
                                            <path d="M9.9885 16.3862C13.517 16.3862 16.3774 13.5258 16.3774 9.99729C16.3774 6.4688 13.517 3.6084 9.9885 3.6084C6.46001 3.6084 3.59961 6.4688 3.59961 9.99729C3.59961 13.5258 6.46001 16.3862 9.9885 16.3862Z" stroke="#636366" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.0003 5.2749V9.99712M9.89393 10.006H6.83838" stroke="#636366" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        09:00-17:00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-5 right-6 border border-white w-[56px] flex justify-center items-center h-[56px]  rounded-full bg-[#0D9CD8] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="bg-white p-[15px] relative sm:p-[50px] w-full my-4 rounded-[12px]">
                    <div className="flex">
                        <div className="relative">
                            <img src="/assets/images/drAylin.png" alt="doc" className="mr-[22px] rounded-full bg-[#F2F5F8] w-[100px] h-[100px] object-cover" />
                            <div className="absolute top-0 right-8 bg-[#34C759] h-[21px] w-[21px] rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="font-medium text-[#2C2C2E]">Dr.Aylin Əliyeva</h3>
                            <p className="text-[#64717C]">Online</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-start">
                        <div className="bg-[#0D9CD8] relative mt-[40px] w-[257px] py-[13px] px-[10px] text-white rounded-[15px] rounded-br-none">
                            <p>Salam, analizləriniz qaydasındadır.</p>
                            <div className="absolute text-[#636366] bottom-[-27px] right-0 flex items-center gap-2">
                                10:13 <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9089 7.99987C3.7249 7.99987 3.5489 7.92387 3.4229 7.78987L0.18092 4.33722C-0.0717449 4.06922 -0.057745 3.64723 0.210254 3.39523C0.478919 3.14323 0.900916 3.15656 1.15225 3.42456L3.90223 6.35188L9.50754 0.217245C9.75687 -0.0554206 10.1782 -0.0734205 10.4502 0.174578C10.7215 0.422577 10.7402 0.844575 10.4922 1.11591L4.4009 7.78254C4.27623 7.91987 4.0989 7.99854 3.91357 7.99987H3.9089Z" fill="#0D9CD8" />
                                </svg></div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="bg-[#D1D1D6] relative mt-[40px] w-[257px] py-[13px] px-[10px] text-[#2C2C2E] rounded-[15px] rounded-bl-none">
                            <p>Salam, analizləriniz qaydasındadır.</p>
                            <div className="absolute text-[#636366] bottom-[-27px] left-0 flex items-center gap-2">
                                10:14 </div>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" className="bg-[#F7F7F8] mt-[70px] w-full border-[3px] rounded-[15px] p-3 border-[#0D9CD8]" placeholder="Mesajınızı yazın..." />
                        <div className="absolute right-3 bottom-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="#AEAEB2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OnlineChat