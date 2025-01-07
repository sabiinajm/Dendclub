import { useState } from "react"
import { HiOutlineBars3BottomRight } from "react-icons/hi2"
import { IoCloseOutline } from "react-icons/io5"
import { RiRadioButtonLine } from "react-icons/ri"
import { Link } from "react-router-dom"

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu() {
        setShowMenu(!showMenu)
    }
    return (
        <header className="min-h-[131px] bg-white">
            <div
                className="min-h-[112px] max-w-[1224px] mx-auto py-4 flex justify-between items-center ">
                <img className="h-[112px] w-[240px] object-cover" src="/assets/images/logo.png" alt="Medclub Logo" />
                <nav className={`justify-center gap-6 lg:justify-between flex-col lg:flex-row fixed lg:static top-0 right-0 bg-[#fff] z-50 h-screen lg:h-auto shadow-lg lg:shadow-none items-center list-none flex overflow-hidden min-w-[320px] lg:w-[677px] ${showMenu ? 'translate-x-0' : 'translate-x-[400px] lg:translate-x-0'} transition-all duration-400`}>
                    <IoCloseOutline onClick={toggleMenu} className="absolute top-[55px] right-[10px] text-4xl hover:scale-125 transition-all cursor-pointer duration-160 hover:text-[#0D9CD8] lg:hidden" />
                    <li className="active border-b-2 border-[#0D9CD8] whitespace-nowrap"><Link to="/">Ana səhifə</Link></li>
                    <li><Link to={'/Haqqımızda'}>Haqqımızda</Link></li>
                    <li><Link to={'/Həkimlərimiz'}>Həkimlərimiz</Link></li>
                    <li><Link to={'/Klinikalarımız'}>Klinikalar</Link></li>
                    <li><Link to={'/Apteklərimiz'}>Apteklər</Link></li>
                    <li><Link to={'/Bloglar'}>Bloglar</Link></li>
                    <li><Link to={'/Əlaqə'}>Əlaqə</Link></li>
                </nav>
                <Link to={'/Çat'} className="rounded-full absolute xl:static top-[100px] right-[10px] flex justify-center xl:w-[145px] p-[8px] bg-[#0D9CD8] text-white xl:rounded-[12px]">
                    <RiRadioButtonLine className="xl:hidden" />
                    <p className="hidden xl:flex"> Canlı çat</p>
                </Link>
                <div className="flex items-center w-[121px] justify-between">
                    {/* <select name="" id="" className="cursor-pointer">
                        <option value="">Az</option>
                        <option value="">Ru</option>
                    </select> */}
                    <div className="relative cursor-pointer w-[40px] h-[40px] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_560_310)">
                                <path
                                    d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                                    stroke="#2C2C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                                    stroke="#2C2C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_560_310">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="absolute right-0 top-0 bg-[#34C759] h-[12px] w-[12px] rounded-full"></div>
                    </div>
                    <div className="h-[48px] w-[48px] flex cursor-pointer justify-center items-center bg-[#F2F5F8] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M19.84 18.1973C19.84 21.4933 15.32 21.8743 11.921 21.8743L11.6778 21.8741C9.5122 21.8688 4 21.7321 4 18.1773C4 14.9486 8.33835 14.5171 11.7115 14.5008L12.1642 14.5005C14.3296 14.5058 19.84 14.6425 19.84 18.1973ZM11.921 16.0003C7.66 16.0003 5.5 16.7323 5.5 18.1773C5.5 19.6353 7.66 20.3743 11.921 20.3743C16.181 20.3743 18.34 19.6423 18.34 18.1973C18.34 16.7393 16.181 16.0003 11.921 16.0003ZM11.921 2.00391C14.849 2.00391 17.23 4.38591 17.23 7.31391C17.23 10.2419 14.849 12.6229 11.921 12.6229H11.889C8.967 12.6139 6.6 10.2309 6.60997 7.31091C6.60997 4.38591 8.992 2.00391 11.921 2.00391ZM11.921 3.43191C9.78 3.43191 8.03798 5.17291 8.03798 7.31391C8.031 9.44791 9.76 11.1879 11.892 11.1959L11.921 11.9099V11.1959C14.061 11.1959 15.802 9.45391 15.802 7.31391C15.802 5.17291 14.061 3.43191 11.921 3.43191Z"
                                fill="#2C2C2E" />
                        </svg>
                    </div>
                    <div onClick={toggleMenu} className="px-2 text-3xl cursor-pointer lg:hidden">
                        <HiOutlineBars3BottomRight className="hover:scale-125 transition-all duration-150 hover:text-[#0D9CD8]" />
                    </div>
                </div>
            </div>
            {/* <div className="h-[48px] w-[90%] sm:w-[500px] relative mx-auto my-4">
                <input type="text" placeholder="Axtarın"
                    className="w-full  h-full pl-3 border border-[#D1D1D6] placeholder-[#D1D1D6] rounded-[16px]" />
                <button
                    className="absolute right-0 top-0 h-[80%] m-1 mr-2 w-[148px] rounded-[12px] bg-[#0D9CD8] text-white flex justify-evenly items-center">
                    Həkimlərimiz
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div> */}
        </header>
    )
}
export default Header