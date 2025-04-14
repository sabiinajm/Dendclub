function MedDetails() {
    return (
        <main className="bg-[#f2f5f8] pb-[80px]">
            <div className="max-w-[1224px] mx-auto px-2">
                <div className="flex flex-col sm:flex-row items-center gap-[34px] pt-[17px] pb-[44px]"  >
                    <div className="flex flex-col sm:flex-row justify-between items-center flex-1">
                        <h1 className="text-[1.5rem] sm:text-[2.5rem]">Kanon Aptek</h1>
                        <h3 className="text-[#636366]  sm:text-2xl">İş saatları: 7/24</h3>
                    </div>
                    <div className="flex gap-[14px]">
                        <div className="flex items-center w-[116px] h-[44px] bg-[#0D9CD8] rounded-[48px] text-white justify-center gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.5489 20.7497C10.4883 20.7497 11.2499 19.9881 11.2499 19.0487C11.2499 18.1092 10.4883 17.3477 9.5489 17.3477C8.60946 17.3477 7.8479 18.1092 7.8479 19.0487C7.8479 19.9881 8.60946 20.7497 9.5489 20.7497Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.96 20.7497C17.8995 20.7497 18.661 19.9881 18.661 19.0487C18.661 18.1092 17.8995 17.3477 16.96 17.3477C16.0206 17.3477 15.259 18.1092 15.259 19.0487C15.259 19.9881 16.0206 20.7497 16.96 20.7497Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.606 5.555L7.616 11.919C7.925 12.897 8.079 13.386 8.376 13.748C8.636 14.068 8.975 14.315 9.358 14.468C9.793 14.641 10.305 14.641 11.331 14.641H15.186C16.212 14.641 16.724 14.641 17.158 14.468C17.542 14.315 17.88 14.068 18.141 13.748C18.437 13.386 18.591 12.897 18.901 11.919L19.31 10.623L19.55 9.857L19.881 8.807C19.9991 8.4325 20.0274 8.03544 19.9634 7.648C19.8995 7.26055 19.7452 6.89361 19.513 6.57691C19.2809 6.26021 18.9774 6.00266 18.6271 5.82511C18.2768 5.64757 17.8897 5.55503 17.497 5.555H5.606ZM5.606 5.555L5.595 5.518C5.55277 5.37656 5.50608 5.23649 5.455 5.098C5.25255 4.58554 4.90923 4.14082 4.46473 3.81523C4.02022 3.48963 3.49266 3.29645 2.943 3.258C2.84 3.25 2.727 3.25 2.5 3.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            0 AZN
                        </div>
                        <div className="bg-[#0D9CD8] rounded-full h-[44px] w-[44px] flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 2.75977C17.523 2.75977 22 7.23677 22 12.7598C22 18.2828 17.523 22.7598 12 22.7598C10.404 22.762 8.83083 22.3806 7.41301 21.6478L3.58701 22.7148C3.37355 22.7743 3.14809 22.7761 2.93373 22.7198C2.71937 22.6636 2.52382 22.5514 2.36712 22.3947C2.21041 22.2379 2.09818 22.0424 2.04194 21.828C1.98569 21.6137 1.98744 21.3882 2.04701 21.1748L3.11501 17.3518C2.38036 15.9327 1.99793 14.3577 2.00001 12.7598C2.00001 7.23677 6.47701 2.75977 12 2.75977ZM12 4.25977C9.74567 4.25977 7.58366 5.1553 5.9896 6.74936C4.39554 8.34342 3.50001 10.5054 3.50001 12.7598C3.50001 14.2298 3.87301 15.6428 4.57301 16.8968L4.72301 17.1668L3.61101 21.1508L7.59801 20.0388L7.86801 20.1888C9.00239 20.8195 10.2661 21.182 11.5624 21.2486C12.8586 21.3152 14.1528 21.084 15.3458 20.5729C16.5389 20.0617 17.599 19.2841 18.445 18.2998C19.2909 17.3154 19.9002 16.1504 20.2261 14.894C20.552 13.6377 20.5858 12.3234 20.325 11.052C20.0643 9.7805 19.5158 8.58565 18.7216 7.55903C17.9275 6.53241 16.9088 5.70129 15.7437 5.12939C14.5786 4.55749 13.2979 4.26001 12 4.25977ZM8.75001 13.7598H13.248C13.438 13.7598 13.6209 13.832 13.7598 13.9617C13.8987 14.0915 13.9831 14.2691 13.996 14.4586C14.009 14.6482 13.9495 14.8357 13.8296 14.9831C13.7097 15.1305 13.5383 15.2269 13.35 15.2528L13.248 15.2598H8.75001C8.55999 15.2597 8.37707 15.1875 8.23822 15.0578C8.09937 14.9281 8.01493 14.7505 8.00198 14.5609C7.98903 14.3713 8.04852 14.1839 8.16844 14.0365C8.28836 13.8891 8.45976 13.7927 8.64801 13.7668L8.75001 13.7598ZM8.75001 10.2598H15.255C15.4449 10.2601 15.6277 10.3324 15.7664 10.4622C15.905 10.5921 15.9893 10.7696 16.0021 10.9591C16.0149 11.1486 15.9553 11.336 15.8354 11.4833C15.7155 11.6306 15.5442 11.7269 15.356 11.7528L15.255 11.7598H8.75001C8.55999 11.7597 8.37707 11.6875 8.23822 11.5578C8.09937 11.4281 8.01493 11.2505 8.00198 11.0609C7.98903 10.8713 8.04852 10.6839 8.16844 10.5365C8.28836 10.3891 8.45976 10.2927 8.64801 10.2668L8.75001 10.2598Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="relative pb-[49px]">
                    <input type="text" className="bg-white w-full h-[60px] pl-[16px] rounded-2xl placeholder:text-[#AEAEB2]" placeholder="Dərman axtar..." />
                    <div className="absolute top-[18px] right-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2C2C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#2C2C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-[27px] flex-col md:flex-row">
                    <img src="/assets/images/derman2.png" className="w-[312px] h-[312px] rounded-[23px]" alt="" />
                    <div className="flex-1 border-b-2 border-b[#AEAEB2] pb-[44px]">
                        <div className="flex justify-between pb-[24px]">
                            <div className="gap-3 flex items-center">
                                <div className="rounded-[15px] bg-[#FF3B30] w-[30px] h-[30px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 3C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5C8 7.065 8.746 9.915 9.184 11.403C9.2368 11.5778 9.3451 11.7306 9.49252 11.8383C9.63994 11.946 9.81844 12.0028 10.001 12C10.1831 12.0027 10.3612 11.9461 10.5084 11.8388C10.6556 11.7315 10.7639 11.5792 10.817 11.405C11.255 9.925 12 7.09 12 5C12 4.46957 11.7893 3.96086 11.4142 3.58579C11.0391 3.21071 10.5304 3 10 3ZM7 5C7 4.20435 7.31607 3.44129 7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2C10.7956 2 11.5587 2.31607 12.1213 2.87868C12.6839 3.44129 13 4.20435 13 5C13 7.25 12.212 10.214 11.776 11.69C11.6614 12.071 11.4264 12.4046 11.1062 12.6408C10.786 12.877 10.3979 13.003 10 13C9.189 13 8.458 12.48 8.224 11.685C7.789 10.204 7 7.227 7 5ZM10 15C9.73478 15 9.48043 15.1054 9.29289 15.2929C9.10536 15.4804 9 15.7348 9 16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17C10.2652 17 10.5196 16.8946 10.7071 16.7071C10.8946 16.5196 11 16.2652 11 16C11 15.7348 10.8946 15.4804 10.7071 15.2929C10.5196 15.1054 10.2652 15 10 15ZM8 16C8 15.4696 8.21071 14.9609 8.58579 14.5858C8.96086 14.2107 9.46957 14 10 14C10.5304 14 11.0391 14.2107 11.4142 14.5858C11.7893 14.9609 12 15.4696 12 16C12 16.5304 11.7893 17.0391 11.4142 17.4142C11.0391 17.7893 10.5304 18 10 18C9.46957 18 8.96086 17.7893 8.58579 17.4142C8.21071 17.0391 8 16.5304 8 16Z" fill="white" />
                                    </svg>
                                </div>
                                <h4 className="text-[#636366]">Reseptlə satılır</h4>
                            </div>
                            <div className="bg-[#F59E0B] rounded-full text-white w-[126px] h-[44px] flex justify-center items-center">
                                Məhduddur
                            </div>
                        </div>
                        <div className="pb-[24px]">
                            <h2 className="text-[#2C2C2E] text-xl font-semibold">Levofasin tablet</h2>
                            <p className="text-[#636366]">Antibiotik, bakterial infeksiyaların müalicəsində istifadə olunur</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[55px] gap-y-[12px] md:max-w-[600px]">
                            <div className="bg-white h-[40px] rounded-lg flex justify-center items-center">
                                Tərkibi: Levofloksasin
                            </div>
                            <div className="bg-white h-[40px] rounded-lg flex justify-center items-center">
                                Məhsulun kodu: 156155
                            </div>
                            <div className="bg-white h-[40px] rounded-lg flex justify-center items-center">
                                Istehsalatçı ölkə: Hindistan
                            </div>
                            <div className="bg-white h-[40px] rounded-lg flex justify-center items-center">
                                Son istifadə tarixi: 04.04.2027
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MedDetails