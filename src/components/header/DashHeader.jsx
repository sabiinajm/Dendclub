import { HiBars3 } from "react-icons/hi2"

function DashHeader({ isOpen, setIsOpen }) {
    const dashboardInfo = {
        "/Aptek-Dashboard": {
            name: "Kanon Aptek",
            role: "Aptek",
            image: "/assets/images/aptek.png",
        },
        "/Həkim-Dashboard": {
            name: "Dr. Adil Məmmədov",
            role: "Uzman Həkim",
            image: "/assets/images/ava.jpeg",
        },
        "/Klinika-Dashboard": {
            name: "İstanbul NS Klinika",
            role: "Bakı",
            image: "/assets/images/klinika2.jpg",
        },
        "/Ümumi-Admin-Panel": {
            image: "/assets/images/admin.svg"

        },
    };

    const decodedPath = decodeURIComponent(location.pathname);

    const currentInfo =
        Object.entries(dashboardInfo).find(([path]) =>
            decodedPath.includes(path)
        )?.[1] || {
            name: "",
            role: "",
            image: "",
        };


    return (
        <div className="min-h-[76px] w-[90%] sm:w-[94%] mx-auto flex items-center sm:justify-between ">
            <div className="flex items-center gap-2 sm:gap-4">
                <HiBars3 onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#202224]" />
                <div className="relative">
                    <input type="text" placeholder="Axtarın" className="pl-14 outline-none placeholder:text-[#64717C] placeholder:text-[.8rem] md:placeholder:text-base border border-[#F2F5F8] rounded-[12px] h-[48px] w-[60%] sm:w-[80%] xl:w-[553px]" />
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
            </div>
            <div className="flex items-center gap-2 md:gap-5">
                <div className="relative cursor-pointer w-[28px] h-[28px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M7.12657 10.2597C7.56312 6.406 10.7331 3.5 14.5003 3.5C18.2676 3.5 21.4375 6.406 21.8741 10.2597L22.2764 13.8116C22.3764 14.6942 22.7341 15.5247 23.3023 16.1934C24.5079 17.6125 23.5294 19.8333 21.6985 19.8333H7.30215C5.47127 19.8333 4.49276 17.6125 5.6984 16.1934C6.26653 15.5247 6.62423 14.6941 6.72421 13.8116L7.12657 10.2597Z" stroke="#64717C" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M18 22.168C17.4905 23.5274 16.1159 24.5013 14.5 24.5013C12.8841 24.5013 11.5095 23.5274 11 22.168" stroke="#64717C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <div className="absolute right-1 top-[2px] bg-[#34C759] h-[7px] w-[7px] rounded-full"></div>
                </div>
                <div className="flex gap-3 items-center">
                    {decodedPath.includes("Ümumi") ? (
                        <div className="h-[44px] min-w-[44px] w-[44px] rounded-full flex items-center justify-center bg-[#F2F2F2]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.84 18.1973C19.84 21.4933 15.32 21.8743 11.921 21.8743L11.6778 21.8741C9.5122 21.8688 4 21.7321 4 18.1773C4 14.9486 8.33835 14.5171 11.7115 14.5008L12.1642 14.5005C14.3296 14.5058 19.84 14.6425 19.84 18.1973ZM11.921 16.0003C7.66 16.0003 5.5 16.7323 5.5 18.1773C5.5 19.6353 7.66 20.3743 11.921 20.3743C16.181 20.3743 18.34 19.6423 18.34 18.1973C18.34 16.7393 16.181 16.0003 11.921 16.0003ZM11.921 2.00391C14.849 2.00391 17.23 4.38591 17.23 7.31391C17.23 10.2419 14.849 12.6229 11.921 12.6229H11.889C8.967 12.6139 6.6 10.2309 6.60997 7.31091C6.60997 4.38591 8.992 2.00391 11.921 2.00391ZM11.921 3.43191C9.78 3.43191 8.03798 5.17291 8.03798 7.31391C8.031 9.44791 9.76 11.1879 11.892 11.1959L11.921 11.9099V11.1959C14.061 11.1959 15.802 9.45391 15.802 7.31391C15.802 5.17291 14.061 3.43191 11.921 3.43191Z" fill="#2C2C2E" />
                            </svg>
                        </div>
                    ) : (
                        <img src={currentInfo.image} className="h-[44px] min-w-[44px] w-[44px] object-[90%] object-cover rounded-full" alt="" />
                    )}
                    <div className="hidden md:flex flex-col font-medium">
                        <h4 className="text-[#14171A]">  {currentInfo.name}</h4>
                        <p className="text-[#64717C] text-[.75rem]">{currentInfo.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashHeader