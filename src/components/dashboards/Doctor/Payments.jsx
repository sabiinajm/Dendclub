import LineGraph from "../components/LineGraph";
import Table from "../components/Table";

export default function Payments() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px]">
            <div className="flex gap-[51px] py-[58px] flex-col md:flex-row">
                <div className="bg-white max-w-[341px] h-[220px] rounded-xl flex justify-center px-[24px] flex-col">
                    <div className="flex gap-6 pb-7">
                        <div className="rounded-[4px] bg-[#ECF9FF] min-w-[50px] h-[50px] flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6 10.2V12H4.2C3.48392 12 2.79716 12.2845 2.29081 12.7908C1.78446 13.2972 1.5 13.9839 1.5 14.7V27.3C1.5 28.0161 1.78446 28.7028 2.29081 29.2092C2.79716 29.7155 3.48392 30 4.2 30H28.8C29.1546 30 29.5057 29.9302 29.8332 29.7945C30.1608 29.6588 30.4585 29.4599 30.7092 29.2092C30.9599 28.9585 31.1588 28.6608 31.2945 28.3332C31.4302 28.0057 31.5 27.6546 31.5 27.3V25.5H33.3C34.788 25.5 36 24.288 36 22.8V10.2C36 8.712 34.788 7.5 33.3 7.5H8.7C7.212 7.5 6 8.712 6 10.2ZM9 10.5V12H28.8C29.1546 12 29.5057 12.0698 29.8332 12.2055C30.1608 12.3412 30.4585 12.5401 30.7092 12.7908C30.9599 13.0415 31.1588 13.3392 31.2945 13.6668C31.4302 13.9943 31.5 14.3454 31.5 14.7V22.5H33V10.5H9ZM13.5 21C13.5 20.2044 13.8161 19.4413 14.3787 18.8787C14.9413 18.3161 15.7044 18 16.5 18C17.2956 18 18.0587 18.3161 18.6213 18.8787C19.1839 19.4413 19.5 20.2044 19.5 21C19.5 21.7956 19.1839 22.5587 18.6213 23.1213C18.0587 23.6839 17.2956 24 16.5 24C15.7044 24 14.9413 23.6839 14.3787 23.1213C13.8161 22.5587 13.5 21.7956 13.5 21Z" fill="#0D9CD8" />
                            </svg>
                        </div>
                        <h3 className="text-[#64717C]">Toplam qazanc</h3>
                    </div>
                    <h2 className="font-medium text-[#14171A] text-2xl">412 AZN</h2>
                </div>
                <div className="bg-white max-w-[712px] w-full rounded-xl px-[28px]">
                    <div className="flex py-[24px] justify-between">
                        <h2 className="sm:text-xl text-[#14171A]">Ödəniş Metodu</h2>
                        <p className="text-[#0D9CD8] underline">Əlavə et</p>
                    </div>
                    <div className="bg-[#F9F9F9] mb-[24px] rounded-lg px-[10px] sm:pl-[49px] sm:pr-[69px] py-[17px] flex flex-wrap gap-[30px] justify-between">
                        <img src="/assets/images/visa.png" alt="" className="min-w-[115px] sm:w-[138px] h-[86px] " />
                        <div className="flex-1 flex-col flex justify-center">
                            <div className="text-[#14171A] flex w-full justify-between pb-3 gap-3">
                                <h3>Visa</h3>
                                <h3>Bank 360</h3>
                            </div>
                            <div className="text-xs flex text-[#64717C] w-full justify-between gap-3">
                                <p>İstifadə müddəti : 17/11</p>
                                <p>****4423</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-[20px] min-h-[440px] py-[23px] px-[25px]">
                <div className="w-full flex justify-between">
                    <h3 className="text-xl">Cari Gəlir</h3>
                    <div className="w-[110px] relative">
                        <select className="bg-[#F2F5F8] px-2 pl-7 py-[6px] rounded-[4px] w-[110px]">
                            <option>Ayliq</option>
                        </select>
                        <svg className="absolute top-2 left-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9.75 15.75H4.5C4.10218 15.75 3.72064 15.592 3.43934 15.3107C3.15804 15.0294 3 14.6478 3 14.25V5.25C3 4.85218 3.15804 4.47064 3.43934 4.18934C3.72064 3.90804 4.10218 3.75 4.5 3.75H13.5C13.8978 3.75 14.2794 3.90804 14.5607 4.18934C14.842 4.47064 15 4.85218 15 5.25V7.5M12 2.25V5.25M6 2.25V5.25M3 8.25H12.375M15.75 11.25H13.875C13.5766 11.25 13.2905 11.3685 13.0795 11.5795C12.8685 11.7905 12.75 12.0766 12.75 12.375C12.75 12.6734 12.8685 12.9595 13.0795 13.1705C13.2905 13.3815 13.5766 13.5 13.875 13.5H14.625C14.9234 13.5 15.2095 13.6185 15.4205 13.8295C15.6315 14.0405 15.75 14.3266 15.75 14.625C15.75 14.9234 15.6315 15.2095 15.4205 15.4205C15.2095 15.6315 14.9234 15.75 14.625 15.75H12.75M14.25 15.75V16.5M14.25 10.5V11.25" stroke="#2C2C2E" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <LineGraph />
                </div>
            </div>
            <div className="mt-[72px] pb-[24px]">
                <h2 className="text-[28px]">Ödəniş Siyahısı</h2>
            </div>
            <div className="relative pb-[32px]">
                <input type="text" placeholder="Axtarın" className="pl-14 outline-none placeholder:text-[#64717C] border border-[#F2F5F8] rounded-full h-[48px] w-full md:w-[641px]" />
                <svg className="absolute top-3 left-6" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <g clipPath="url(#clip0_1199_13635)">
                        <path d="M3.5 10C3.5 10.9193 3.68106 11.8295 4.03284 12.6788C4.38463 13.5281 4.90024 14.2997 5.55025 14.9497C6.20026 15.5998 6.97194 16.1154 7.82122 16.4672C8.6705 16.8189 9.58075 17 10.5 17C11.4193 17 12.3295 16.8189 13.1788 16.4672C14.0281 16.1154 14.7997 15.5998 15.4497 14.9497C16.0998 14.2997 16.6154 13.5281 16.9672 12.6788C17.3189 11.8295 17.5 10.9193 17.5 10C17.5 9.08075 17.3189 8.1705 16.9672 7.32122C16.6154 6.47194 16.0998 5.70026 15.4497 5.05025C14.7997 4.40024 14.0281 3.88463 13.1788 3.53284C12.3295 3.18106 11.4193 3 10.5 3C9.58075 3 8.6705 3.18106 7.82122 3.53284C6.97194 3.88463 6.20026 4.40024 5.55025 5.05025C4.90024 5.70026 4.38463 6.47194 4.03284 7.32122C3.68106 8.1705 3.5 9.08075 3.5 10Z" stroke="#64717C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5 21L15.5 15" stroke="#64717C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1199_13635">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <Table />
        </div>
    )
}