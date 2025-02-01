import { Rate } from "antd";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

function UserProfile() {
    const options = ["Şəxsi Tibbi Kart", "Növbələrim", "Bəyəndiyim uzmanlar", "Parametrlər", "Bildirişlər"]
    const [selected, setSelected] = useState(options[0]);
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
                    <Link to={'/'} className="bg-[#0D9CD8] px-[32px] py-[12px] hidden xs:flex text-white rounded-lg">Çıxış et </Link>
                </div>
            </div>
            <div className="bg-white min-h-[942px] max-w-[1224px] mx-auto rounded-xl sm:pt-7">
                <div className="flex justify-evenly">
                    <div className="border-r-2 min-h-[880px] hidden md:flex w-[295px] lg:w-[395px]">
                        <ul className="w-full flex flex-col gap-5 px-6 pt-10 text-[#64717C]">
                            {options.map((item) => (
                                <li
                                    key={item}
                                    className={`cursor-pointer flex rounded-md ${selected === item ? "text-[#2C2C2E]" : ""
                                        }`}
                                    onClick={() => setSelected(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {selected === "Şəxsi Tibbi Kart" && (
                        <div className="flex flex-col justify-start mt-[40px] items-center w-full">
                            <div className="flex flex-col xs:flex-row justify-evenly min-h-[380px] md:min-h-[179px] items-center sm:shadow-[0px_1px_4.1px_0px_rgba(169,152,152,0.25)] rounded-xl w-full sm:w-[390px] mx-auto">
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
                                            <path d="M12 6V8M12 8V10M12 8H10M12 8H14M8 14H9M16 14H12M9 18H15M3 14V10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C20.482 3.825 20.771 4.7 20.898 6M21 10V14C21 17.771 21 19.657 19.828 20.828C18.656 21.999 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3.518 20.175 3.229 19.3 3.102 18" stroke="black" strokeWidth="1.3" strokeLinecap="round" />
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
                                            <path d="M22 2.5H2V8.5H22V2.5Z" stroke="black" strokeLinejoin="round" />
                                            <path d="M2 20.515L8.088 14.365L11.3775 17.515L15.399 13.5L17.639 15.684" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 8.08604V21.086M2 8.08604V15.086M6.508 21.5H22M8.5 5.50004H19M5 5.49854H5.5" stroke="black" strokeLinecap="round" />
                                        </svg>
                                        <p className="p-[2px] font-medium">Analiz nəticələri</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                        <path d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z" fill="#636366" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    )}
                    {selected === "Növbələrim" && (
                        <div className="flex ml-5 flex-col justify-start mt-[40px] w-full">
                            <h2 className="mb-[40px]">Növbələrim (1)</h2>
                            <div className="border-[1px] rounded-xl w-[90%] min-h-[350px] xs:p-9">
                                <div className="bg-[#f2f5f8] mb-[24px] w-full xs:w-[138px] h-[138px] rounded-xl flex flex-col xs:flex-row items-center xs:rounded-[20px]">
                                    <img src="/assets/images/drAylin.png" alt="doctor" className="w-[full] xs:w-[138px] h-[138px]" />
                                    <div className="px-4 w-full">
                                        <h2 className="font-medium text-sm xs:text-base pt-3">Dr.Zərinə Babayeva</h2>
                                        <div className='flex flex-col items-start'>
                                            <h3 className="text-[#64717C] text-xs">Uzman Psixoloq</h3>
                                            <div className='w-full sm:w-[256px] text-xs'>
                                                <div className='flex items-center'>
                                                    <Rate style={{ color: '#F4B814' }} className='py-3 flex flex-wrap xs:flex-nowrap' />
                                                    <p className=' px-2 text-[#636366]'>(4)</p>
                                                </div>
                                                <p className="text-[#64717C]">32 görüş</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t-[1px]">
                                    <div className="flex text-xs items-center py-[24px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2.5 17.5H17.5M4.16667 17.5V4.16667C4.16667 3.72464 4.34226 3.30072 4.65482 2.98816C4.96738 2.67559 5.39131 2.5 5.83333 2.5H14.1667C14.6087 2.5 15.0326 2.67559 15.3452 2.98816C15.6577 3.30072 15.8333 3.72464 15.8333 4.16667V17.5M7.5 17.5V14.1667C7.5 13.7246 7.67559 13.3007 7.98816 12.9882C8.30072 12.6756 8.72464 12.5 9.16667 12.5H10.8333C11.2754 12.5 11.6993 12.6756 12.0118 12.9882C12.3244 13.3007 12.5 13.7246 12.5 14.1667V17.5M8.33333 7.5H11.6667M10 5.83333V9.16667" stroke="#2C2C2E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h3>Klinikada görüş</h3>
                                    </div>
                                    <h1 className="text-[.9rem]">Medical Plaza</h1>
                                    <p className="text-[#64717C] text-[.9rem]">Bakı,Süleyman Rüstəmov küçəsi</p>
                                    <div className="flex justify-end">
                                        <button className="text-white bg-[#0D9CD8] w-[157px] h-[44px] rounded-lg">Növbəni ləğv et</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {selected === "Bəyəndiyim uzmanlar" && (
                        <div className="flex ml-5 flex-col justify-start mt-[40px] w-full">
                            <h2 className="mb-[40px]">Bəyəndiyim uzmanlar (1)</h2>
                            <div className="border-[1px] rounded-xl w-[90%] min-h-[350px] xs:p-9 flex flex-col justify-between">
                                <div className="bg-[#f2f5f8] mb-[24px] w-full xs:w-[138px] h-[138px] rounded-xl flex flex-col xs:flex-row items-center xs:rounded-[20px]">
                                    <img src="/assets/images/drAylin.png" alt="doctor" className="w-[full] xs:w-[138px] h-[138px]" />
                                    <div className="px-4 w-full">
                                        <h2 className="font-medium text-sm xs:text-base pt-3">Dr.Zərinə Babayeva</h2>
                                        <div className='flex flex-col items-start'>
                                            <h3 className="text-[#64717C] text-xs">Uzman Psixoloq</h3>
                                            <div className='w-full sm:w-[256px] text-xs'>
                                                <div className='flex items-center'>
                                                    <Rate style={{ color: '#F4B814' }} className='py-3 flex flex-wrap xs:flex-nowrap' />
                                                    <p className=' px-2 text-[#636366]'>(4)</p>
                                                </div>
                                                <p className="text-[#64717C]">32 görüş</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xs:border-t-[1px] text-[#64717C] flex flex-col gap-3 px-4 flex-wrap pb-4">
                                    <div className="flex text-xs items-center pt-[24px] gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                            <path d="M13.6282 12.8906L14.0842 12.4376L13.0252 11.3736L12.5712 11.8266L13.6282 12.8906ZM15.6132 12.2476L17.5242 13.2866L18.2392 11.9686L16.3292 10.9306L15.6132 12.2476ZM17.8912 15.3506L16.4712 16.7636L17.5282 17.8266L18.9482 16.4146L17.8912 15.3506ZM15.6052 17.2176C14.1552 17.3536 10.4052 17.2326 6.34322 13.1946L5.28522 14.2576C9.71722 18.6646 13.9362 18.8806 15.7452 18.7116L15.6052 17.2176ZM6.34322 13.1946C2.47222 9.34457 1.83022 6.10757 1.75022 4.70257L0.25222 4.78757C0.35222 6.55557 1.14722 10.1436 5.28522 14.2576L6.34322 13.1946ZM7.71822 7.01457L8.00522 6.72857L6.94922 5.66557L6.66222 5.95057L7.71822 7.01457ZM8.23322 3.09357L6.97322 1.40957L5.77222 2.30957L7.03222 3.99257L8.23322 3.09357ZM2.73222 1.04257L1.16222 2.60257L2.22022 3.66657L3.78922 2.10657L2.73222 1.04257ZM7.19022 6.48257C6.66022 5.95057 6.66022 5.95057 6.66022 5.95257H6.65822L6.65522 5.95657C6.6077 6.00448 6.56515 6.05708 6.52822 6.11357C6.47422 6.19357 6.41522 6.29857 6.36522 6.43157C6.2435 6.77489 6.21317 7.14398 6.27722 7.50257C6.41122 8.36757 7.00722 9.51057 8.53322 11.0286L9.59122 9.96457C8.16222 8.54457 7.82222 7.68057 7.75922 7.27257C7.72922 7.07857 7.76022 6.98257 7.76922 6.96057C7.77522 6.94723 7.77522 6.94523 7.76922 6.95457C7.76031 6.96837 7.75027 6.98141 7.73922 6.99357L7.72922 7.00357L7.71922 7.01257L7.19022 6.48257ZM8.53322 11.0286C10.0602 12.5466 11.2092 13.1386 12.0752 13.2706C12.5182 13.3386 12.8752 13.2846 13.1462 13.1836C13.298 13.128 13.4398 13.0483 13.5662 12.9476L13.6162 12.9026L13.6232 12.8966L13.6262 12.8936L13.6272 12.8916C13.6272 12.8916 13.6282 12.8906 13.0992 12.3586C12.5692 11.8266 12.5722 11.8256 12.5722 11.8256L12.5742 11.8236L12.5762 11.8216L12.5822 11.8166L12.5922 11.8066L12.6302 11.7766C12.6396 11.7706 12.6372 11.7712 12.6232 11.7786C12.5982 11.7876 12.5002 11.8186 12.3032 11.7886C11.8892 11.7246 11.0192 11.3846 9.59122 9.96457L8.53322 11.0286ZM6.97322 1.40857C5.95322 0.0485671 3.94922 -0.167433 2.73222 1.04257L3.78922 2.10657C4.32122 1.57757 5.26522 1.63257 5.77222 2.30957L6.97322 1.40857ZM1.75122 4.70357C1.73122 4.35757 1.89022 3.99557 2.22022 3.66757L1.16122 2.60357C0.62422 3.13757 0.20122 3.89357 0.25222 4.78757L1.75122 4.70357ZM16.4712 16.7636C16.1972 17.0376 15.9012 17.1916 15.6062 17.2186L15.7452 18.7116C16.4802 18.6426 17.0812 18.2726 17.5292 17.8276L16.4712 16.7636ZM8.00522 6.72857C8.99022 5.74957 9.06322 4.20257 8.23422 3.09457L7.03322 3.99357C7.43622 4.53257 7.37622 5.23957 6.94822 5.66657L8.00522 6.72857ZM17.5252 13.2876C18.3422 13.7316 18.4692 14.7776 17.8922 15.3516L18.9502 16.4146C20.2902 15.0816 19.8772 12.8586 18.2402 11.9696L17.5252 13.2876ZM14.0842 12.4386C14.4682 12.0566 15.0862 11.9626 15.6142 12.2486L16.3302 10.9316C15.2462 10.3416 13.9022 10.5046 13.0262 11.3746L14.0842 12.4386Z" fill="#0D9CD8" />
                                        </svg>
                                        <p>0507777777</p>
                                    </div>
                                    <div className="flex text-xs items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1099 3C18.8978 3 21 5.36867 21 8.50974V14.4972C21 16.1048 20.4541 17.5572 19.462 18.5877C18.5721 19.5109 17.4176 20 16.1233 20H7.87423C6.58242 20 5.42874 19.5118 4.53795 18.5877C3.54586 17.5572 3 16.1048 3 14.4972V8.50974C3 5.36867 5.10223 3 7.89014 3H16.1099ZM16.1099 4.30769H7.89014C5.78456 4.30769 4.25581 6.07482 4.25581 8.50974V14.4972C4.25581 15.7552 4.67107 16.879 5.42456 17.661C6.07423 18.3366 6.92233 18.6923 7.87674 18.6923H16.1099C16.1115 18.6906 16.1182 18.6923 16.1233 18.6923C17.0785 18.6923 17.9258 18.3366 18.5754 17.661C19.3298 16.879 19.7442 15.7552 19.7442 14.4972V8.50974C19.7442 6.07482 18.2154 4.30769 16.1099 4.30769ZM17.4293 8.34306C17.6478 8.6229 17.6068 9.03439 17.338 9.2628L13.6175 12.4117C13.147 12.8005 12.5844 12.995 12.0226 12.995C11.4625 12.995 10.9041 12.8023 10.4369 12.417L6.68205 9.26454C6.41163 9.03788 6.36977 8.62552 6.5866 8.3448C6.80512 8.06495 7.20028 8.02049 7.46986 8.24629L11.2214 11.3952C11.6927 11.784 12.3567 11.784 12.8313 11.3917L16.5452 8.24803C16.8148 8.01875 17.21 8.06234 17.4293 8.34306Z" fill="#0D9CD8" />
                                        </svg>
                                        <p>dr.zarinababayeva@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {selected === "Parametrlər" && (
                        <div className="flex ml-5 flex-col justify-start mt-[40px] w-full">
                            <h1 className="pb-[48px]">Parametrlər</h1>
                            <div className="grid xs:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2 w-[90%]">
                                    <label htmlFor="inputField" className="text-sm text-gray-700">Ad</label>
                                    <input
                                        id="inputField"
                                        type="text"
                                        className="border-[1px] border-gray-300 rounded-xl px-3 py-[14px] focus:outline-none focus:ring-2 focus:ring-[#0D9CD8]"
                                        placeholder="Ayaz"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-[90%]">
                                    <label htmlFor="inputField" className="text-sm text-gray-700">Soyad</label>
                                    <input
                                        id="inputField"
                                        type="text"
                                        className="border-[1px] border-gray-300 rounded-xl px-3 py-[14px] focus:outline-none focus:ring-2 focus:ring-[#0D9CD8]"
                                        placeholder="Aliyev"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-[90%]">
                                    <label htmlFor="inputField" className="text-sm text-gray-700">Email</label>
                                    <input
                                        id="inputField"
                                        type="text"
                                        className="border-[1px] border-gray-300 rounded-xl px-3 py-[14px] focus:outline-none focus:ring-2 focus:ring-[#0D9CD8]"
                                        placeholder="ayazaliyev@gmail.com"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-[90%]">
                                    <label htmlFor="inputField" className="text-sm text-gray-700">Nömrə</label>
                                    <input
                                        id="inputField"
                                        type="text"
                                        className="border-[1px] border-gray-300 rounded-xl px-3 py-[14px] focus:outline-none focus:ring-2 focus:ring-[#0D9CD8]"
                                        placeholder="50 211 11 23"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-start pt-7 gap-6 sm:justify-end  sm:p-8">
                                <button className="text-white bg-[#0D9CD8] w-[174px] h-[52px] rounded-lg">Yadda saxla</button>
                                <button className="text-[#2C2C2E] bg-[#F2F5F8] w-[174px] h-[52px] rounded-lg">Ləğv et</button>
                            </div>
                        </div>
                    )}
                    {selected === "Bildirişlər" && (
                        <div className="flex ml-5 flex-col justify-start mt-[40px] w-full">

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default UserProfile