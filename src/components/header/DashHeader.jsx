import { HiBars3 } from "react-icons/hi2"

function DashHeader({ isOpen, setIsOpen }) {
    return (
        <div className="min-h-[76px] w-[90%] sm:w-[94%] mx-auto flex items-center sm:justify-between ">
            <div className="flex items-center gap-2 sm:gap-4">
                <HiBars3 onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#202224]" />
                <div className="relative">
                    <input type="text" placeholder="Axtarın" className="pl-14 outline-none placeholder:text-[#64717C] placeholder:text-[.8rem] md:placeholder:text-base border border-[#F2F5F8] rounded-[12px] h-[48px] w-[60%] sm:w-[80%] xl:w-[553px]" />
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
            </div>
            <div className="flex items-center gap-2 md:gap-5">
                <div className="relative cursor-pointer w-[28px] h-[28px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M7.12657 10.2597C7.56312 6.406 10.7331 3.5 14.5003 3.5C18.2676 3.5 21.4375 6.406 21.8741 10.2597L22.2764 13.8116C22.3764 14.6942 22.7341 15.5247 23.3023 16.1934C24.5079 17.6125 23.5294 19.8333 21.6985 19.8333H7.30215C5.47127 19.8333 4.49276 17.6125 5.6984 16.1934C6.26653 15.5247 6.62423 14.6941 6.72421 13.8116L7.12657 10.2597Z" stroke="#64717C" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M18 22.168C17.4905 23.5274 16.1159 24.5013 14.5 24.5013C12.8841 24.5013 11.5095 23.5274 11 22.168" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <div className="absolute right-1 top-[2px] bg-[#34C759] h-[7px] w-[7px] rounded-full"></div>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="/assets/images/ava.jpeg" className="h-[44px] min-w-[44px] w-[44px] object-[90%] object-cover rounded-full" alt="" />
                    <div className="hidden md:flex flex-col font-medium">
                        <h4 className="text-[#14171A]">Adil Məmmədov</h4>
                        <p className="text-[#64717C] text-[.75rem]">Uzman Psixoloq</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashHeader