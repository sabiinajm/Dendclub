import Table from "../components/Table"

function Patients() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px]">
            <h2 className="pt-[33px] mx-auto text-xl font-medium text-[#2C2C2E]">Xəstələrin Siyahısı
            </h2>
            <div className="pb-[24px] flex justify-between w-full flex-wrap">
                <div className="pt-[24px] flex items-start gap-5">
                    <div className="relative pb-[20px]">
                        <input type="text" placeholder="Axtarın" className="pl-14 outline-none placeholder:text-[#64717C] border border-[#F2F5F8] rounded-[12px] h-[44px] w-full sm:w-[328px]" />
                        <svg className="absolute top-3 left-6" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_1199_13635)">
                                <path d="M3.5 10C3.5 10.9193 3.68106 11.8295 4.03284 12.6788C4.38463 13.5281 4.90024 14.2997 5.55025 14.9497C6.20026 15.5998 6.97194 16.1154 7.82122 16.4672C8.6705 16.8189 9.58075 17 10.5 17C11.4193 17 12.3295 16.8189 13.1788 16.4672C14.0281 16.1154 14.7997 15.5998 15.4497 14.9497C16.0998 14.2997 16.6154 13.5281 16.9672 12.6788C17.3189 11.8295 17.5 10.9193 17.5 10C17.5 9.08075 17.3189 8.1705 16.9672 7.32122C16.6154 6.47194 16.0998 5.70026 15.4497 5.05025C14.7997 4.40024 14.0281 3.88463 13.1788 3.53284C12.3295 3.18106 11.4193 3 10.5 3C9.58075 3 8.6705 3.18106 7.82122 3.53284C6.97194 3.88463 6.20026 4.40024 5.55025 5.05025C4.90024 5.70026 4.38463 6.47194 4.03284 7.32122C3.68106 8.1705 3.5 9.08075 3.5 10Z" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.5 21L15.5 15" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1199_13635">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex items-center text-[#64717C] text-sm h-[44px] px-[16px] bg-white rounded-lg">
                        Filterlə
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.3335 3.33203H16.6668V5.14203C16.6667 5.58402 16.4911 6.00788 16.1785 6.32036L12.5002 9.9987V15.832L7.50016 17.4987V10.4154L3.76683 6.3087C3.48804 6.00197 3.33354 5.60236 3.3335 5.18786V3.33203Z" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="h-[40px] bg-[#0D9CD8] text-white rounded-lg flex items-center px-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.625 3.4375C10.625 3.18886 10.5262 2.9504 10.3504 2.77459C10.1746 2.59877 9.93614 2.5 9.6875 2.5C9.43886 2.5 9.2004 2.59877 9.02459 2.77459C8.84877 2.9504 8.75 3.18886 8.75 3.4375V8.75H3.4375C3.18886 8.75 2.9504 8.84877 2.77459 9.02459C2.59877 9.2004 2.5 9.43886 2.5 9.6875C2.5 9.93614 2.59877 10.1746 2.77459 10.3504C2.9504 10.5262 3.18886 10.625 3.4375 10.625H8.75V15.9375C8.75 16.1861 8.84877 16.4246 9.02459 16.6004C9.2004 16.7762 9.43886 16.875 9.6875 16.875C9.93614 16.875 10.1746 16.7762 10.3504 16.6004C10.5262 16.4246 10.625 16.1861 10.625 15.9375V10.625H15.9375C16.1861 10.625 16.4246 10.5262 16.6004 10.3504C16.7762 10.1746 16.875 9.93614 16.875 9.6875C16.875 9.43886 16.7762 9.2004 16.6004 9.02459C16.4246 8.84877 16.1861 8.75 15.9375 8.75H10.625V3.4375Z" fill="white" />
                    </svg>
                    Xəstə əlavə et
                </div>
            </div>
            <Table />
        </div>
    )
}
export default Patients