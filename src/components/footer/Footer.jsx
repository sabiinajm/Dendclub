function Footer() {
    return (
            <div className="bg-[white] pt-[70px]">
                <div className="mx-auto max-w-[1224px] flex flex-col lg:flex-row justify-between px-4 pb-[80px]">
                    <div className="md:w-[450px]">
                        <h2 className="text-xl md:text-[35px] font-medium text-[#2C2C2E] leading-[48px]">Bizimlə əməkdaşlıq üçün
                            müraciət et!</h2>
                        <button className="w-[156px] h-[48px] rounded-[8px] bg-[#0D9CD8] text-white mt-[23px] md:mt-[48px]">Müraciət et</button>
                    </div>
                    <div className="flex flex-col justify-between items-start md:items-end py-4 md:py-0">
                        <div>
                            <p className="text-[#636366] text-[15px] pt-[20px] md:pt-0  md:text-[20px] text-right">Bizi sosial şəbəkələrdən izləyin</p>
                            <div className="flex pt-[20px] gap-6 w-full justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.5 7.5V7.51M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8ZM9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_610_1492)">
                                        <path d="M4 4L15.733 20H20L8.267 4H4Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4 20L10.768 13.232M13.228 10.772L20 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_610_1492">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 3.60001C14 9.60001 16 14.1 16.5 19.8M6.40002 19C9.90002 15.5 12.4 12.5 20.9 12.6M3.09998 10.75C8.09998 10.75 12.914 10.37 18.414 5.75M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <ul className="text-[#2C2C2E] text-[13px] py-4 md:text-[20px] flex-col md:flex-row flex gap-6">
                            <li><a href="#">Ana səhifə</a></li>
                            <li><a href="#">Haqqımızda</a></li>
                            <li><a href="#">Həkimlərimiz</a></li>
                            <li><a href="#">Klinikalar</a></li>
                            <li><a href="#">Bloglar</a></li>
                            <li><a href="#">Əlaqə</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center gap-3 text-[#2C2C2E] text-[12px] md:text-[14px] border-t py-[17px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M14.5 9.75C13.9171 9.23773 13.1592 8.96986 12.3838 9.00208C11.6085 9.0343 10.8754 9.36413 10.337 9.923C9.7994 10.4808 9.49902 11.2253 9.49902 12C9.49902 12.7747 9.7994 13.5192 10.337 14.077C10.8754 14.6359 11.6085 14.9657 12.3838 14.9979C13.1592 15.0301 13.9171 14.7623 14.5 14.25M3.5 12C3.5 13.1819 3.73279 14.3522 4.18508 15.4442C4.63738 16.5361 5.30031 17.5282 6.13604 18.364C6.97177 19.1997 7.96392 19.8626 9.05585 20.3149C10.1478 20.7672 11.3181 21 12.5 21C13.6819 21 14.8522 20.7672 15.9442 20.3149C17.0361 19.8626 18.0282 19.1997 18.864 18.364C19.6997 17.5282 20.3626 16.5361 20.8149 15.4442C21.2672 14.3522 21.5 13.1819 21.5 12C21.5 10.8181 21.2672 9.64778 20.8149 8.55585C20.3626 7.46392 19.6997 6.47177 18.864 5.63604C18.0282 4.80031 17.0361 4.13738 15.9442 3.68508C14.8522 3.23279 13.6819 3 12.5 3C11.3181 3 10.1478 3.23279 9.05585 3.68508C7.96392 4.13738 6.97177 4.80031 6.13604 5.63604C5.30031 6.47177 4.63738 7.46392 4.18508 8.55585C3.73279 9.64778 3.5 10.8181 3.5 12Z" stroke="#2C2C2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>2024 | Bütün hüquqlar qorunur</p>
                </div>
            </div>
    )
}
export default Footer