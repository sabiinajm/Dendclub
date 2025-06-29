import { Rate } from "antd"

function AdminPharmacy() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] py-10">
            <div className="w-full flex justify-end mb-[20px]">
                <button className="bg-[#0D9CD8] text-white rounded-lg w-[172px] h-[48px] flex justify-evenly items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.625 3.4375C10.625 3.18886 10.5262 2.9504 10.3504 2.77459C10.1746 2.59877 9.93614 2.5 9.6875 2.5C9.43886 2.5 9.2004 2.59877 9.02459 2.77459C8.84877 2.9504 8.75 3.18886 8.75 3.4375V8.75H3.4375C3.18886 8.75 2.9504 8.84877 2.77459 9.02459C2.59877 9.2004 2.5 9.43886 2.5 9.6875C2.5 9.93614 2.59877 10.1746 2.77459 10.3504C2.9504 10.5262 3.18886 10.625 3.4375 10.625H8.75V15.9375C8.75 16.1861 8.84877 16.4246 9.02459 16.6004C9.2004 16.7762 9.43886 16.875 9.6875 16.875C9.93614 16.875 10.1746 16.7762 10.3504 16.6004C10.5262 16.4246 10.625 16.1861 10.625 15.9375V10.625H15.9375C16.1861 10.625 16.4246 10.5262 16.6004 10.3504C16.7762 10.1746 16.875 9.93614 16.875 9.6875C16.875 9.43886 16.7762 9.2004 16.6004 9.02459C16.4246 8.84877 16.1861 8.75 15.9375 8.75H10.625V3.4375Z" fill="white" />
                    </svg>
                    Klinika əlavə et
                </button>
            </div>
            <div className="grid justify-self-center gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xlll:grid-cols-4">
                <div className="bg-white rounded-[20px] w-full pb-[28px] flex flex-col items-center">
                    <div className=" relative  w-[257px] flex justify-center items-end rounded-[12px]">
                        <img src="/assets/images/aptek.png" alt="doctor" className="w-full object-cover rounded-t-[20px] h-[184px]" />
                        <div className='bg-white rounded-[4px] font-normal text-sm gap-1 w-[66px] h-[24px] flex justify-center items-center top-[20px] left-[20px] absolute'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M9.41984 16.115C9.29743 16.2029 9.15053 16.2502 8.99984 16.2502C8.84914 16.2502 8.70224 16.2029 8.57984 16.115C4.95809 13.5335 1.11434 8.2235 5.00009 4.3865C6.06684 3.33714 7.50346 2.74934 8.99984 2.75C10.4998 2.75 11.9391 3.33875 12.9996 4.38575C16.8853 8.22275 13.0416 13.532 9.41984 16.115Z" stroke="#2C2C2E" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 9.5C9.39782 9.5 9.77936 9.34196 10.0607 9.06066C10.342 8.77936 10.5 8.39782 10.5 8C10.5 7.60218 10.342 7.22064 10.0607 6.93934C9.77936 6.65804 9.39782 6.5 9 6.5C8.60218 6.5 8.22064 6.65804 7.93934 6.93934C7.65804 7.22064 7.5 7.60218 7.5 8C7.5 8.39782 7.65804 8.77936 7.93934 9.06066C8.22064 9.34196 8.60218 9.5 9 9.5Z" stroke="#2C2C2E" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Bakı
                        </div>
                    </div>
                    <div className='flex flex-col pt-[11px]'>
                        <h1 className="text-xl">Kanon Aptek</h1>
                        <div className="flex text-[#636366] gap-3 py-2 items-center text-xs font-light">
                            09:00 - 18:00
                            <Rate />
                        </div>
                        <div className="mt-[12px] ">
                            <button className="bg-[#0D9CD8] text-white text-sm rounded-lg w-[108px] h-[40px] flex justify-evenly items-center">Daha ətraflı</button>
                        </div>
                    </div>
                </div >
            </div>
            <div>
                <img src="/assets/images/map2.jpg" alt="doctor" className="w-full rounded-xl mt-[40px] object-cover " />
            </div>
        </div>
    )
}
export default AdminPharmacy