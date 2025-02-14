function Contact() {
    return (
        <main className="bg-[#f2f5f8] pt-[24px]">
            <div className="max-w-[1224px] mx-auto px-2 flex flex-col gap-12 justify-center items-center">
                <div className="min-h-[354px] flex flex-col xl:items-end items-center justify-center w-full gap-8 lg:flex-row">
                    <div className="bg-white w-full sm:w-[400px] py-6 sm:py-0 min-h-[152px] flex flex-col sm:flex-row sm:pl-[50px] gap-6 rounded-[20px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 0.5C19.1716 0.5 18.5 1.17157 18.5 2C18.5 2.82843 19.1716 3.5 20 3.5C21.9042 3.5 23.7897 3.87505 25.5489 4.60375C27.3081 5.33244 28.9066 6.4005 30.253 7.74695C31.5995 9.0934 32.6676 10.6919 33.3963 12.4511C34.1249 14.2103 34.5 16.0958 34.5 18C34.5 18.8284 35.1716 19.5 36 19.5C36.8284 19.5 37.5 18.8284 37.5 18C37.5 15.7019 37.0473 13.4262 36.1679 11.303C35.2884 9.17984 33.9994 7.25066 32.3744 5.62563C30.7493 4.00061 28.8202 2.71157 26.697 1.83211C24.5738 0.952651 22.2981 0.5 20 0.5ZM36 34V30.7081C36 29.0725 35.0042 27.6017 33.4856 26.9942L29.4173 25.3669C27.4857 24.5943 25.2844 25.4312 24.354 27.292L24 28C24 28 19 27 15 23C11 19 10 14 10 14L10.708 13.646C12.5688 12.7156 13.4057 10.5143 12.6331 8.58271L11.0058 4.51444C10.3983 2.9958 8.92749 2 7.29187 2H4C1.79086 2 0 3.79086 0 6C0 23.6731 14.3269 38 32 38C34.2091 38 36 36.2091 36 34ZM18.5 10C18.5 9.17157 19.1716 8.5 20 8.5C21.2476 8.5 22.4829 8.74572 23.6355 9.22314C24.7881 9.70056 25.8354 10.4003 26.7175 11.2825C27.5997 12.1646 28.2994 13.2119 28.7769 14.3645C29.2543 15.5171 29.5 16.7524 29.5 18C29.5 18.8284 28.8284 19.5 28 19.5C27.1716 19.5 26.5 18.8284 26.5 18C26.5 17.1464 26.3319 16.3012 26.0052 15.5126C25.6786 14.7239 25.1998 14.0074 24.5962 13.4038C23.9926 12.8002 23.2761 12.3214 22.4874 11.9948C21.6988 11.6681 20.8536 11.5 20 11.5C19.1716 11.5 18.5 10.8284 18.5 10Z" fill="#0D9CD8" />
                        </svg>
                        <div className="text-[#636366]">
                            <p>+994 50 444 33 22</p>
                            <p>+994 77 444 33 22</p>
                        </div>
                    </div>
                    <div className="bg-white w-full sm:w-[400px] py-6 min-h-[152px] flex-col flex sm:flex-row sm:pl-[50px] gap-6 rounded-[20px] items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 40 36" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.49967 0.75C4.26549 0.75 0.833008 4.18248 0.833008 8.41667V27.5833C0.833008 31.8175 4.26549 35.25 8.49967 35.25H31.4997C35.7339 35.25 39.1663 31.8175 39.1663 27.5833V8.41667C39.1663 4.18248 35.7339 0.75 31.4997 0.75H8.49967ZM9.29706 9.13718C8.63649 8.6968 7.74399 8.8753 7.30361 9.53587C6.86323 10.1964 7.04173 11.0889 7.7023 11.5293L14.9496 16.3609C18.0077 18.3996 21.9917 18.3996 25.0498 16.3609L32.2971 11.5293C32.9576 11.0889 33.1361 10.1964 32.6958 9.53587C32.2554 8.8753 31.3629 8.6968 30.7023 9.13718L23.455 13.9687C21.3626 15.3636 18.6367 15.3636 16.5444 13.9687L9.29706 9.13718Z" fill="#0D9CD8" />
                        </svg>
                        <div className="text-[#636366]">
                            <p>medclub@gmail.com</p>
                            <p>medclub@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full min-h-[610px] mb-[16rem] rounded-[20px] py-[55px] px-4 sm:px-[84px]">
                    <h1 className="text-[#2C2C2E] text-[1.5rem] md:text-[2.5rem] pb-[48px]">Bizimlə Əməkdaşlıq</h1>
                    <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-1">Ad</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Adınızı daxil edin"
                                className="xl:w-[468px] h-[48px] w-[90%] sm:w-[330px] border placeholder:text-[#636366] border-gray-300 rounded-[20px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="name" className="block pt-[24px] text-gray-700 mb-1">Email</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Email adresinizi daxil edin"
                                className="xl:w-[468px] h-[48px] w-[90%] sm:w-[330px] border border-gray-300 placeholder:text-[#636366] rounded-[20px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="name" className="block pt-[24px] text-gray-700 mb-1">Nömrə</label>
                            <div
                                className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Email adresinizi daxil edin"
                                    className="xl:w-[468px] w-[90%] sm:w-[330px] placeholder:text-[#636366] h-[48px] border pl-[80px] border-gray-300 rounded-[20px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select name="" id="" className="text-[#636366] outline-none absolute top-[1px] h-[46px] left-[1px] rounded-[20px]">
                                    <option value="" >+994</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-1">Soyad</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Soyadınızı daxil edin"
                                className="xl:w-[468px] h-[48px] w-[90%] sm:w-[330px] border placeholder:text-[#636366] border-gray-300 rounded-[20px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="name" className="block text-gray-700 mb-1 pt-[24px]">Qeyd (min 20 simvol)</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Qeydlərinizi yazın"
                                className="xl:w-[468px] h-[162px] w-[90%] sm:w-[330px] border placeholder:text-[#636366] border-gray-300 rounded-[20px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end pt-[38px] w-full">
                        <button className="w-[200px] h-[52px] text-white rounded-[8px] bg-[#0D9CD8]">
                            Göndər
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Contact