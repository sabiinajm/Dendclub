function Pharmacy() {
    return (
        <main className="bg-[#f2f5f8] pt-[24px]">
            <div className="max-w-[1224px] mx-auto px-2">
                <h1 className="pt-[7rem] text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-center">Apteklərimiz</h1>
                <div className="min-h-[245px] flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative">
                            <input type="text" placeholder="Axtarın " className="w-[250px] md:w-[500px] bg-white py-[15px] rounded-[16px] pl-4 placeholder:text-[#636366]" />
                            <div className="absolute bottom-[6px] flex justify-center items-center right-[7px] h-[42px] w-[42px] rounded-[12px] bg-[#0D9CD8]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.0004 20.9999L16.6504 16.6499" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative w-[209px]">
                            <select className="w-full h-[48px] pl-[20px] rounded-[12px] bg-white outline-none appearance-none pr-10">
                                <option value="">Şəhər və rayon</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="#2C2C2E"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 justify-center">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="min-h-[427px] relative bg-white shadow-lg rounded-[20px] overflow-hidden">
                            <img className="min-h-[323px] w-full object-cover" src="/assets/images/aptek.jpg" alt={`Aptek ${index + 1}`} />
                            <p className="text-start py-7 pl-3 text-[1.5rem] md:text-[1.75rem] font-medium text-[#2C2C2E]">Istanbul Klinika NS</p>
                            <div className="h-[56px] w-[56px] flex justify-center items-center absolute bottom-[20px] right-[20px] rounded-full bg-[#E1F6FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                    <path d="M6.43441 20.9933C6.14471 20.6395 6.16819 20.1318 6.4714 19.8062L6.56101 19.7222L18.846 9.66366L10.7888 8.8778C10.2923 8.82943 9.929 8.38773 9.97737 7.89125C10.0213 7.4399 10.3904 7.09864 10.8301 7.07666L10.9639 7.07986L21.1973 8.07687C21.2628 8.08325 21.3259 8.09645 21.3861 8.11572C21.4037 8.12192 21.4217 8.1283 21.4395 8.13525C21.4552 8.14084 21.4706 8.14739 21.4858 8.15433C21.5075 8.16475 21.5295 8.17587 21.551 8.18792C21.568 8.19698 21.5836 8.20644 21.599 8.21633C21.6178 8.22879 21.6373 8.24246 21.6564 8.25698C21.6699 8.26695 21.6824 8.277 21.6945 8.28736C21.7125 8.30292 21.7305 8.31949 21.7479 8.3369C21.7613 8.35003 21.7741 8.36355 21.7863 8.37745C21.7936 8.38603 21.8012 8.39499 21.8087 8.40413L21.8305 8.43149C21.8412 8.44564 21.8515 8.46011 21.8614 8.47488L21.8087 8.40413C21.8448 8.44823 21.8761 8.49472 21.9025 8.54295C21.9089 8.55443 21.9151 8.56645 21.9211 8.57862C21.9334 8.60372 21.9442 8.62868 21.9539 8.65395C21.9587 8.66647 21.9636 8.68011 21.9681 8.69388C21.9771 8.72159 21.9847 8.74891 21.9909 8.77643C21.9939 8.78932 21.9967 8.8031 21.9991 8.81697C22.0031 8.83964 22.0062 8.86176 22.0085 8.88392C22.0101 8.8996 22.0113 8.91627 22.0121 8.93305L22.0126 8.94606C22.014 8.98607 22.0126 9.02611 22.0087 9.06588L22.0084 9.06722L20.968 19.2972C20.9176 19.7935 20.4744 20.1549 19.9781 20.1044C19.5269 20.0585 19.1872 19.688 19.1671 19.2482L19.1709 19.1144L19.9886 11.0628L7.70547 21.1199C7.31952 21.4359 6.75044 21.3792 6.43441 20.9933Z" fill="#0D9CD8" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[#2C2C2E] text-2xl font-medium text-center py-[80px] min-h-[350px]">Daha çox</p>
            </div>
        </main>
    )
}
export default Pharmacy