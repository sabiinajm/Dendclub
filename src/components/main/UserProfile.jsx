import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

function UserProfile() {
    return (
        <div className="absolute top-0 left-0 px-4 bg-[#F2F5F8] min-h-screen w-full z-[999]">
            <div
                className="min-h-[112px] max-w-[1224px] mx-auto py-4 flex flex-wrap md:flex-nowrap justify-between items-center ">
                <img className="h-[112px] w-[240px] object-cover" src="/assets/images/logo.png" alt="Medclub Logo" />
                <div className="flex w-full justify-between md:justify-end px-4 gap-[30px]">
                    <div className="flex gap-3">
                        <div className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                <circle cx="24.5" cy="24.5" r="24.5" fill="#D9D9D9" />
                            </svg>
                            <div>
                                <p className="text-[##2C2C2E] font-medium">Məmmədov Akif</p>
                                <p className="text-[#AEAEB2]">İD:</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 6.99998H6C5.46957 6.99998 4.96086 7.2107 4.58579 7.58577C4.21071 7.96084 4 8.46955 4 8.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#2C2C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <button className="bg-[#0D9CD8] absolute top-[50px] right-[20px] h-[40px] min-w-[40px] flex justify-center items-center xs:hidden text-white rounded-full"><IoArrowBackOutline /></button>
                    <Link to={'/'} className="bg-[#0D9CD8] px-[32px] py-[12px] hidden xs:flex text-white rounded-lg">Çıxış et</Link>
                </div>
            </div>
            <div className="bg-white min-h-[942px] max-w-[1224px] mx-auto rounded-xl sm:pt-7">
                <div className="flex justify-evenly">
                    <div className="border-r-2 min-h-[880px] hidden md:flex w-[295px] lg:w-[395px]">
                        <ul className="flex w-full flex-col gap-5 px-[25px] pt-[40px] text-[#64717C]">
                            <li>Şəxsi Tibbi Kart</li>
                            <li>Növbələrim</li>
                            <li className="border-b-[1px] pb-6">Bəyəndiyim uzmanlar</li>
                            <li>Parametrlər</li>
                            <li>Bildirişlər</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-start mt-[40px] items-center w-full">
                        <div className="flex flex-col xs:flex-row justify-evenly min-h-[380px] md:h-[179px] items-center sm:shadow-[0px_1px_4.1px_0px_rgba(169,152,152,0.25)] rounded-xl w-full sm:w-[390px] mx-auto">
                            <img src="/assets/images/iwatch.png" alt="iwatch" className="h-[137px]" />
                            <div className="flex flex-col items-center gap-[14px] pr-3">
                                <h3 className="font-medium text-sm">Smart Saat İntegrasiyası</h3>
                                <h4 className="text-[#636366] text-xs text-center">Saat qoşulduqdan sonra məlumatlar avtomatik yenilənəcək</h4>
                                <button className="text-[#0D9CD8] rounded-md bg-[#f4f3f1] py-2 w-[90%] sm:w-[236px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                        <path d="M4.875 6.25838L12.78 12.6769C12.9615 12.8239 13.0523 12.8974 13.086 12.9844C13.116 13.0624 13.1175 13.1464 13.089 13.2244C13.0575 13.3121 12.969 13.3879 12.792 13.5394L10.1145 15.8269C9.7905 16.1044 9.62775 16.2439 9.48975 16.2499C9.43135 16.2524 9.37311 16.242 9.31918 16.2195C9.26525 16.1969 9.21696 16.1627 9.17775 16.1194C9.08925 16.0196 9.08925 15.8134 9.08925 15.4009V3.59888C9.08925 3.18638 9.08925 2.98013 9.17775 2.88038C9.21696 2.83703 9.26525 2.80285 9.31918 2.7803C9.37311 2.75774 9.43135 2.74736 9.48975 2.74988C9.62775 2.75588 9.78975 2.89463 10.1145 3.17213L12.8168 5.48213C12.9863 5.62613 13.071 5.69888 13.1033 5.78363C13.131 5.85863 13.1325 5.94113 13.1063 6.01613C13.0763 6.10238 12.9938 6.17663 12.828 6.32513L4.875 13.4621" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Bağlan
                                </button>
                            </div>
                        </div>
                        <ul className="w-[90%] py-7 ">
                            <li className="flex justify-between items-center w-full py-2">
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.6688 6.51797C19.6198 6.36752 19.5245 6.23639 19.3966 6.14336C19.2686 6.05033 19.1145 6.00015 18.9562 6H17.25V3.375C17.25 2.96016 16.9148 2.625 16.5 2.625H7.5C7.08516 2.625 6.75 2.96016 6.75 3.375V6H5.04375C4.88545 5.99979 4.73116 6.04983 4.60312 6.14291C4.47508 6.236 4.37988 6.36732 4.33125 6.51797L2.625 11.7656V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V11.7656L19.6688 6.51797ZM8.4375 4.3125H15.5625V6H8.4375V4.3125ZM19.6875 19.6875H4.3125V12.0328L5.72578 7.6875H18.2742L19.6875 12.0328V19.6875ZM15.2812 13.4062H12.75V10.875C12.75 10.7719 12.6656 10.6875 12.5625 10.6875H11.4375C11.3344 10.6875 11.25 10.7719 11.25 10.875V13.4062H8.71875C8.61562 13.4062 8.53125 13.4906 8.53125 13.5938V14.7188C8.53125 14.8219 8.61562 14.9062 8.71875 14.9062H11.25V17.4375C11.25 17.5406 11.3344 17.625 11.4375 17.625H12.5625C12.6656 17.625 12.75 17.5406 12.75 17.4375V14.9062H15.2812C15.3844 14.9062 15.4688 14.8219 15.4688 14.7188V13.5938C15.4688 13.4906 15.3844 13.4062 15.2812 13.4062Z" fill="black" />
                                    </svg>
                                    <p className="p-[2px] font-medium">Dərmanlarım</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                    <path d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z" fill="#636366" />
                                </svg>
                            </li>
                            <li className="flex justify-between items-center w-full py-2">
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 6V8M12 8V10M12 8H10M12 8H14M8 14H9M16 14H12M9 18H15M3 14V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C20.482 3.825 20.771 4.7 20.898 6M21 10V14C21 17.771 21 19.657 19.828 20.828C18.656 21.999 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3.518 20.175 3.229 19.3 3.102 18" stroke="black" stroke-width="1.3" stroke-linecap="round" />
                                    </svg>
                                    <p className="p-[2px] font-medium">Reseptlərin</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                    <path d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z" fill="#636366" />
                                </svg>
                            </li>
                            <li className="flex justify-between items-center w-full py-2">
                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 2.5H2V8.5H22V2.5Z" stroke="black" stroke-linejoin="round" />
                                        <path d="M2 20.515L8.088 14.365L11.3775 17.515L15.399 13.5L17.639 15.684" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22 8.08604V21.086M2 8.08604V15.086M6.508 21.5H22M8.5 5.50004H19M5 5.49854H5.5" stroke="black" stroke-linecap="round" />
                                    </svg>
                                    <p className="p-[2px] font-medium">Analiz nəticələri</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                    <path d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z" fill="#636366" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile