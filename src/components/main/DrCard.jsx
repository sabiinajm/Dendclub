import { Rate } from 'antd';
function DrCard() {
    return (
        <div className="bg-white rounded-[12px] min-h-[433px] w-[288px] py-[16px] pt-[12px] pb-[28px] flex flex-col items-center">
            <div className="bg-[#F2F5F8] relative h-[203px] w-[256px] flex justify-center items-end rounded-[12px]">
                <img src="/assets/images/drAylin.png" alt="doctor" className="w-[184px] h-[184px]" />
                <div className='w-[190px] absolute flex justify-center items-center bottom-[-20px] h-[40px] bg-[#0D9CD8] text-white rounded-[24px] text-base'>
                    <h1>Dr.Aylin Əliyev</h1>
                </div>
                <div className='bg-white rounded-full w-[44px] h-[44px] flex justify-center items-center top-[10px] right-[10px] absolute'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M22.7495 14.6673L13.9995 23.3333L5.24954 14.6673C4.67239 14.1057 4.21779 13.4306 3.91434 12.6847C3.6109 11.9388 3.46519 11.1381 3.4864 10.3331C3.5076 9.52803 3.69526 8.73612 4.03755 8.00719C4.37985 7.27826 4.86936 6.62809 5.47527 6.09764C6.08118 5.56718 6.79036 5.16793 7.55815 4.92502C8.32594 4.68211 9.13571 4.60081 9.93647 4.68623C10.7372 4.77165 11.5116 5.02195 12.2109 5.42135C12.9102 5.82076 13.5192 6.36063 13.9995 7.00696C14.482 6.36532 15.0917 5.83017 15.7905 5.435C16.4893 5.03983 17.2621 4.79315 18.0606 4.7104C18.8591 4.62765 19.6661 4.71061 20.4311 4.95409C21.1961 5.19756 21.9026 5.59631 22.5063 6.12539C23.1101 6.65446 23.5982 7.30246 23.94 8.02884C24.2819 8.75521 24.4701 9.54433 24.4929 10.3468C24.5157 11.1493 24.3727 11.9478 24.0727 12.6924C23.7727 13.4371 23.3223 14.1118 22.7495 14.6743" stroke="#4D4D50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col items-center pt-[28px]'>
                <h3>Uzman Psixoloq</h3>
                <div className='w-[256px]'>
                    <div className='flex items-center justify-center'>
                        <Rate style={{ color: '#F4B814' }} className='py-3' />
                        <p className='text-sm px-2 text-[#636366]'>(4)</p>
                    </div>
                    <p className='text-[#636366] text-[.75rem] text-center'>Lorem ipsum dolor sit amet lorem ipsum ipsum lorem ipsum dolor sit at</p>
                    <div className='flex justify-between py-[28px]'>
                        <button className='w-[120px] h-[40px] bg-[#F0F0F7] rounded-[8px] text-[#2C2C2E]'>Ətraflı bax</button>
                        <button className='w-[120px] h-[40px] bg-[#0D9CD8] rounded-[8px] text-white'>Növbə götür</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DrCard