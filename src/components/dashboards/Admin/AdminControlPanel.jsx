import BarChart from "../components/BarChart"
import DonutChart from "../components/DonutChart"
import Table from "../components/Table"

function AdminControlPanel() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] md:gap-[47px] pb-[32px]">
                <div className="bg-white rounded-xl min-h-[150px] pt-[27px] pl-[25px] pr-[16px] pb-[14px] flex flex-col justify-between">
                    <p>Yeni istifadəçilər</p>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-2xl font-medium">56</h2>
                            <p className="text-[#2AC670] text-[.75rem] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.38038 9.16565C1.89061 9.10634 1.59806 8.59825 1.79191 8.14502C2.01877 7.61462 2.5581 6.42446 3.42996 4.91436C4.30202 3.40391 5.06318 2.34161 5.40898 1.88016C5.70438 1.48596 6.29043 1.48481 6.58673 1.87941C6.93008 2.33666 7.68213 3.38611 8.56478 4.91491C9.44773 6.44421 9.98063 7.62053 10.2048 8.14621C10.3981 8.59958 10.105 9.10631 9.61628 9.16553C9.04538 9.2347 7.74893 9.36328 5.99783 9.36328C4.24775 9.36328 2.9518 9.23485 2.38038 9.16565Z" fill="#2AC670" />
                            </svg>
                                %10</p>
                        </div>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path opacity="0.21" fillRule="evenodd" clipRule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#0D9CD8" />
                            </svg>
                            <svg className="absolute top-[18px] left-[18px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 20.9989V18.9989C21.9993 18.1126 21.7044 17.2517 21.1614 16.5512C20.6184 15.8508 19.8581 15.3505 19 15.1289M16 3.12891C16.8604 3.34921 17.623 3.84961 18.1676 4.55122C18.7122 5.25283 19.0078 6.11574 19.0078 7.00391C19.0078 7.89208 18.7122 8.75499 18.1676 9.4566C17.623 10.1582 16.8604 10.6586 16 10.8789" stroke="#0D9CD8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl min-h-[150px] pt-[27px] pl-[25px] pr-[16px] pb-[14px] flex flex-col justify-between">
                    <p>Aktiv Klinikalar</p>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-2xl font-medium">200</h2>
                            <p className="text-[#FF6252] text-[.75rem] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.38038 1.83435C1.89061 1.89366 1.59806 2.40175 1.79191 2.85498C2.01877 3.38538 2.5581 4.57554 3.42996 6.08564C4.30202 7.59609 5.06318 8.65839 5.40898 9.11984C5.70438 9.51404 6.29043 9.51519 6.58673 9.12059C6.93008 8.66334 7.68213 7.61389 8.56478 6.08509C9.44773 4.55579 9.98063 3.37947 10.2048 2.85379C10.3981 2.40042 10.105 1.89369 9.61628 1.83447C9.04538 1.7653 7.74893 1.63672 5.99783 1.63672C4.24775 1.63672 2.9518 1.76515 2.38038 1.83435Z" fill="#FF6252" />
                            </svg>
                                %10</p>
                        </div>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path opacity="0.21" fillRule="evenodd" clipRule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#0DD887" />
                            </svg>
                            <svg className="absolute top-4 left-4" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.16699 14V18.6667H12.8337V14H8.16699ZM11.667 17.5V15.1667H9.33366V17.5H11.667Z" fill="#0DD887" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.0833 3.5C10.361 3.49982 9.65629 3.72315 9.06589 4.13934C8.4755 4.55553 8.02834 5.14419 7.78575 5.82458H3.5V7.27183L5.83333 9.03933V23.3333H4.08333C3.92862 23.3333 3.78025 23.3948 3.67085 23.5042C3.56146 23.6136 3.5 23.762 3.5 23.9167C3.5 24.0714 3.56146 24.2197 3.67085 24.3291C3.78025 24.4385 3.92862 24.5 4.08333 24.5H5.83333V24.5087H22.1667V24.5H23.9167C24.0714 24.5 24.2197 24.4385 24.3291 24.3291C24.4385 24.2197 24.5 24.0714 24.5 23.9167C24.5 23.762 24.4385 23.6136 24.3291 23.5042C24.2197 23.3948 24.0714 23.3333 23.9167 23.3333H22.1667V9.06033L24.7917 7.29283V5.824H14.3809C14.1382 5.14372 13.691 4.55518 13.1006 4.1391C12.5103 3.72302 11.8056 3.49978 11.0833 3.5ZM14.3844 8.16667C14.5165 7.79189 14.5837 7.39736 14.5833 7V6.99125H23.1507L21.4054 8.16667H14.3844ZM13.692 9.33333C13.3637 9.70037 12.9617 9.99399 12.5122 10.195C12.0626 10.3961 11.5758 10.5 11.0833 10.5C10.5909 10.5 10.104 10.3961 9.65451 10.195C9.20499 9.99399 8.80295 9.70037 8.47467 9.33333H7V23.3333H14V14H19.8333V23.3333H21V9.33333H13.692ZM7.58333 7C7.58333 7.40892 7.65333 7.8015 7.78225 8.16667H6.61267L5.061 6.99125H7.58333V7ZM11.6667 6.41667V5.25H10.5V6.41667H9.33333V7.58333H10.5V8.75H11.6667V7.58333H12.8333V6.41667H11.6667ZM18.6667 15.1667V23.3333H15.1667V15.1667H18.6667Z" fill="#0DD887" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl min-h-[150px] pt-[27px] pl-[25px] pr-[16px] pb-[14px] flex flex-col justify-between">
                    <p>Aktiv Apteklər</p>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-2xl font-medium">200</h2>
                            <p className="text-[#2AC670] text-[.75rem] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.38038 9.16565C1.89061 9.10634 1.59806 8.59825 1.79191 8.14502C2.01877 7.61462 2.5581 6.42446 3.42996 4.91436C4.30202 3.40391 5.06318 2.34161 5.40898 1.88016C5.70438 1.48596 6.29043 1.48481 6.58673 1.87941C6.93008 2.33666 7.68213 3.38611 8.56478 4.91491C9.44773 6.44421 9.98063 7.62053 10.2048 8.14621C10.3981 8.59958 10.105 9.10631 9.61628 9.16553C9.04538 9.2347 7.74893 9.36328 5.99783 9.36328C4.24775 9.36328 2.9518 9.23485 2.38038 9.16565Z" fill="#2AC670" />
                            </svg>
                                %10</p>
                        </div>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path opacity="0.21" fillRule="evenodd" clipRule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#0D28D8" />
                            </svg>
                            <svg className="absolute top-4 left-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="#0D28D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.9 18H10.1C9.94087 18 9.78826 17.9368 9.67574 17.8243C9.56321 17.7117 9.5 17.5591 9.5 17.4V15.1C9.5 14.9409 9.43679 14.7883 9.32426 14.6757C9.21174 14.5632 9.05913 14.5 8.9 14.5H6.6C6.44087 14.5 6.28826 14.4368 6.17574 14.3243C6.06321 14.2117 6 14.0591 6 13.9V10.1C6 9.94087 6.06321 9.78826 6.17574 9.67574C6.28826 9.56321 6.44087 9.5 6.6 9.5H8.9C9.05913 9.5 9.21174 9.43679 9.32426 9.32426C9.43679 9.21174 9.5 9.05913 9.5 8.9V6.6C9.5 6.44087 9.56321 6.28826 9.67574 6.17574C9.78826 6.06321 9.94087 6 10.1 6H13.9C14.0591 6 14.2117 6.06321 14.3243 6.17574C14.4368 6.28826 14.5 6.44087 14.5 6.6V8.9C14.5 9.05913 14.5632 9.21174 14.6757 9.32426C14.7883 9.43679 14.9409 9.5 15.1 9.5H17.4C17.5591 9.5 17.7117 9.56321 17.8243 9.67574C17.9368 9.78826 18 9.94087 18 10.1V13.9C18 14.0591 17.9368 14.2117 17.8243 14.3243C17.7117 14.4368 17.5591 14.5 17.4 14.5H15.1C14.9409 14.5 14.7883 14.5632 14.6757 14.6757C14.5632 14.7883 14.5 14.9409 14.5 15.1V17.4C14.5 17.5591 14.4368 17.7117 14.3243 17.8243C14.2117 17.9368 14.0591 18 13.9 18Z" stroke="#0D28D8" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl min-h-[150px] pt-[27px] pl-[25px] pr-[16px] pb-[14px] flex flex-col justify-between">
                    <p>Randevular</p>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-2xl font-medium">200</h2>
                            <p className="text-[#FF6252] text-[.75rem] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.38038 1.83435C1.89061 1.89366 1.59806 2.40175 1.79191 2.85498C2.01877 3.38538 2.5581 4.57554 3.42996 6.08564C4.30202 7.59609 5.06318 8.65839 5.40898 9.11984C5.70438 9.51404 6.29043 9.51519 6.58673 9.12059C6.93008 8.66334 7.68213 7.61389 8.56478 6.08509C9.44773 4.55579 9.98063 3.37947 10.2048 2.85379C10.3981 2.40042 10.105 1.89369 9.61628 1.83447C9.04538 1.7653 7.74893 1.63672 5.99783 1.63672C4.24775 1.63672 2.9518 1.76515 2.38038 1.83435Z" fill="#FF6252" />
                            </svg>
                                %10</p>
                        </div>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                <path opacity="0.21" fillRule="evenodd" clipRule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#D8940D" />
                            </svg>
                            <svg className="absolute top-4 left-4" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M13.0183 8.29174V10.0275M13.0183 10.0275V11.7632M13.0183 10.0275H11.4111M13.0183 10.0275H14.6254M9.80399 15.2346H10.6076M16.2326 15.2346H13.0183M10.6076 18.706H15.429M5.78613 15.2346V11.7632C5.78613 8.49048 5.78613 6.8537 6.72792 5.83744C7.6697 4.82118 9.18444 4.82031 12.2147 4.82031H13.8218C16.8521 4.82031 18.3676 4.82031 19.3086 5.83744C19.8342 6.40415 20.0664 7.16353 20.1685 8.29174M20.2504 11.7632V15.2346C20.2504 18.5073 20.2504 20.1441 19.3086 21.1603C18.3668 22.1766 16.8521 22.1775 13.8218 22.1775H12.2147C9.18444 22.1775 7.6689 22.1775 6.72792 21.1603C6.20238 20.5936 5.97015 19.8342 5.8681 18.706" stroke="#D8940D" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-[45px]">
                <div className="bg-white rounded-[20px] mt-[70px] py-[23px] px-[25px]">
                    <div className="w-full flex justify-between items-center gap-8">
                        <h3 className="font-medium">Hər həkim üzrə aylıq randevu sayı</h3>
                        <div className=" w-[79px]">
                            <select className="bg-[#F2F5F8] px-2 pl-2 py-[6px] rounded-[4px]">
                                <option>Fevral</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <BarChart />
                    </div>
                </div>
                <div className="bg-white rounded-[20px] mt-[70px] py-[23px] px-[25px]">
                    <div className="w-full flex justify-between items-center gap-8 pb-[49px]">
                        <h3 className="font-medium">Xidmətlər üzrə populyarlıq</h3>
                        <p className="text-sm">3 noyabr 2024</p>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col gap-3 pt-[20px]">
                            <div className="flex items-center gap-2">
                                <div className="w-[14px] h-[14px] bg-[#92BFFF] rounded-full"></div>
                                <p className="text-sm">Endokrinologiya</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-[14px] h-[14px] bg-[#94E9B8] rounded-full"></div>
                                <p className="text-sm">Pediatriya</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-[14px] h-[14px] bg-[#AEC7ED] rounded-full"></div>
                                <p className="text-sm">Kardiologiya</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-[14px] h-[14px] bg-[#9F9FF8] rounded-full"></div>
                                <p className="text-sm">Nevrologiya</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-[14px] h-[14px] bg-[#96E2D6] rounded-full"></div>
                                <p className="text-sm">Digər</p>
                            </div>
                        </div>
                        <DonutChart />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl pt-[46px] font-medium">Son randevular</h2>
                <div className="relative max-w-[485px] mt-[22px] mb-[31px]">
                    <input type="text" placeholder="Axtarın " className="w-full py-[16px] px-[16px] pl-[40px] border-[1.5px] rounded-xl bg-inherit border-[#AEAEB2]" />
                    <div className="absolute top-4 left-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.58317 17.5013C13.9554 17.5013 17.4998 13.9569 17.4998 9.58464C17.4998 5.21238 13.9554 1.66797 9.58317 1.66797C5.21092 1.66797 1.6665 5.21238 1.6665 9.58464C1.6665 13.9569 5.21092 17.5013 9.58317 17.5013Z" stroke="#AEAEB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.3332 18.3346L16.6665 16.668" stroke="#AEAEB2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="absolute top-4 right-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.25 12.0018H8.895M4.534 12.0018H2.75M4.534 12.0018C4.534 11.4237 4.76368 10.8692 5.17251 10.4604C5.58134 10.0515 6.13583 9.82184 6.714 9.82184C7.29217 9.82184 7.84666 10.0515 8.25549 10.4604C8.66432 10.8692 8.894 11.4237 8.894 12.0018C8.894 12.58 8.66432 13.1345 8.25549 13.5433C7.84666 13.9522 7.29217 14.1818 6.714 14.1818C6.13583 14.1818 5.58134 13.9522 5.17251 13.5433C4.76368 13.1345 4.534 12.58 4.534 12.0018ZM21.25 18.6088H15.502M15.502 18.6088C15.502 19.1871 15.2718 19.7423 14.8628 20.1512C14.4539 20.5601 13.8993 20.7898 13.321 20.7898C12.7428 20.7898 12.1883 20.5592 11.7795 20.1503C11.3707 19.7415 11.141 19.187 11.141 18.6088M15.502 18.6088C15.502 18.0305 15.2718 17.4764 14.8628 17.0675C14.4539 16.6586 13.8993 16.4288 13.321 16.4288C12.7428 16.4288 12.1883 16.6585 11.7795 17.0674C11.3707 17.4762 11.141 18.0307 11.141 18.6088M11.141 18.6088H2.75M21.25 5.39484H18.145M13.784 5.39484H2.75M13.784 5.39484C13.784 4.81667 14.0137 4.26218 14.4225 3.85335C14.8313 3.44452 15.3858 3.21484 15.964 3.21484C16.2503 3.21484 16.5338 3.27123 16.7983 3.38079C17.0627 3.49034 17.3031 3.65092 17.5055 3.85335C17.7079 4.05578 17.8685 4.2961 17.9781 4.56059C18.0876 4.82508 18.144 5.10856 18.144 5.39484C18.144 5.68113 18.0876 5.9646 17.9781 6.22909C17.8685 6.49358 17.7079 6.7339 17.5055 6.93634C17.3031 7.13877 17.0627 7.29935 16.7983 7.4089C16.5338 7.51846 16.2503 7.57484 15.964 7.57484C15.3858 7.57484 14.8313 7.34517 14.4225 6.93634C14.0137 6.52751 13.784 5.97302 13.784 5.39484Z" stroke="#636366" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
                <Table />
            </div>
        </div>
    )
}
export default AdminControlPanel