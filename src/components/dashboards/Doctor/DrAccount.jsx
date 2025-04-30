import { Rate } from "antd"
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi2";
import { LuArrowLeft, LuArrowLeftFromLine } from "react-icons/lu";
const menuItems = [
  { label: "Profilim" },
  { label: "Haqqımda" },
  { label: "Əlaqə" },
  { label: "Qr Kodun" },
  { label: "Xidmətlər" },
  { label: "Seanslar" },
  { label: "Rəylər" },
];
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_1754_4661)">
      <path d="M12.6665 5.80782L9.11119 3.04248C8.79918 2.79975 8.41516 2.66797 8.01986 2.66797C7.62455 2.66797 7.24053 2.79975 6.92852 3.04248L3.37252 5.80782C3.15882 5.974 2.98592 6.18683 2.86703 6.43005C2.74814 6.67326 2.6864 6.94043 2.68652 7.21115V12.0111C2.68652 12.3648 2.827 12.7039 3.07705 12.954C3.3271 13.204 3.66623 13.3445 4.01986 13.3445H12.0199C12.3735 13.3445 12.7126 13.204 12.9627 12.954C13.2127 12.7039 13.3532 12.3648 13.3532 12.0111V7.21115C13.3532 6.66248 13.0999 6.14448 12.6665 5.80782Z" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.6663 10C9.19301 10.8887 6.80501 10.8887 5.33301 10" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1754_4661">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function DrAccount() {
  const [selectedLabel, setSelectedLabel] = useState("Profilim");
  const [moreService, setMoreService] = useState(false);
  return (
    <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] pt-[20px]">
      <div className="flex flex-col xl:flex-row gap-[32px]">
        <div className="bg-white w-full xl:w-[330px] rounded-xl py-[20px] px-[17px] sm:px-[50px] lg:px-[40px] flex xl:flex-col">
          <div>
            <div className="w-[144px] h-[144px] bg-[#F2F5F8] rounded-[20px] mb-[20px] mx-auto">
              <img src="/assets/images/drAylin.png" alt="" />
            </div>
            <h4>Dr.Adilə Məmmədova </h4>
            <p className="text-[#64717C]">Uzman Psixoloq</p>
            <button className="px-[10px] py-[4px] flex bg-[#0D9CD8] text-white rounded-lg my-[11px]">
              Redaktə et
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M7.5 7.00011H6.5C5.96957 7.00011 5.46086 7.21082 5.08579 7.58589C4.71071 7.96097 4.5 8.46967 4.5 9.00011V18.0001C4.5 18.5305 4.71071 19.0392 5.08579 19.4143C5.46086 19.7894 5.96957 20.0001 6.5 20.0001H15.5C16.0304 20.0001 16.5391 19.7894 16.9142 19.4143C17.2893 19.0392 17.5 18.5305 17.5 18.0001V17.0001M16.5 5.00011L19.5 8.00011M20.885 6.58511C21.2788 6.19126 21.5001 5.65709 21.5001 5.10011C21.5001 4.54312 21.2788 4.00895 20.885 3.61511C20.4912 3.22126 19.957 3 19.4 3C18.843 3 18.3088 3.22126 17.915 3.61511L9.5 12.0001V15.0001H12.5L20.885 6.58511Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <div className='flex items-center'>
              <Rate style={{ color: '#F4B814' }} className='py-3' />
              <p className='text-[.8rem] sm:text-base px-1 text-[#636366]'>(4)</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-[#64717C] px-[30px] sm:px-[50px] xl:px-0  xl:py-[50px] xl:gap-[13px] flex-1 xl:flex-none content-evenly  grid xl:self-start ">
            {menuItems.map((item, idx) => (
              <li key={idx} className={`flex items-center gap-2 hover:text-[#0D9CD8] cursor-pointer pb-2 ${selectedLabel === item.label ? "text-[#0D9CD8] border-b-2 border-[#0D9CD8]" : ""
                }`}
                onClick={() => setSelectedLabel(item.label)}>
                <MenuIcon />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-white rounded-xl pl-[35px] py-[50px] px-[20px]">
          {selectedLabel === "Profilim" && (
            <>
              <div className="flex justify-between items-center">
                <h1 className="text-[#2C2C2E] pb-[24px] font-medium text-[.9rem] sm:text-[1.25rem]">Haqqında</h1>
                <div className="flex text-[#0D9CD8] text-sm font-medium items-end gap-2">
                  <h1>Redaktə et</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7.00011H6C5.46957 7.00011 4.96086 7.21082 4.58579 7.58589C4.21071 7.96097 4 8.46967 4 9.00011V18.0001C4 18.5305 4.21071 19.0392 4.58579 19.4143C4.96086 19.7894 5.46957 20.0001 6 20.0001H15C15.5304 20.0001 16.0391 19.7894 16.4142 19.4143C16.7893 19.0392 17 18.5305 17 18.0001V17.0001M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#0D9CD8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-[#64717C] text-sm max-w-[500px] mt-[15px]">Lorem ipsum dolor si amet lorem ipsum dolor sit amet.Lorem ipsum dolor si amet lorem ipsum dolor sit amet.Lorem ipsum dolor si amet lorem ipsum dolor sit amet.Lorem ipsum .</p>
              <div className="flex text-[#64717C] text-sm sm:text-base flex-wrap gap-6 pt-[50px]">
                <div className="flex items-center gap-2">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#0D9CD8] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_682_9146)">
                        <path d="M6 9.84885L8.99941 12.5L15 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_682_9146">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>Video görüş</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#0D9CD8] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clipPath="url(#clip0_682_9146)">
                        <path d="M6 9.84885L8.99941 12.5L15 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_682_9146">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>Klinikada görüş</p>
                </div>
              </div>
              <p className="text-[#64717C] py-[26px]">19 il iş təcrübəsi</p>
              <h3 className="text-xl text-[#2C2C2E]">Sosial şəbəkələr</h3>
              <div className="flex gap-4 py-[25px]">
                <div className="h-[50px] w-[50px] bg-white rounded-[12px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path d="M27.5 15.5C27.5 8.59644 21.9036 3 15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 21.7391 7.07107 26.9104 13.0469 27.8481V19.1133H9.87305V15.5H13.0469V12.7461C13.0469 9.61328 14.913 7.88281 17.7683 7.88281C19.1359 7.88281 20.5664 8.12695 20.5664 8.12695V11.2031H18.9902C17.4374 11.2031 16.9531 12.1667 16.9531 13.1552V15.5H20.4199L19.8657 19.1133H16.9531V27.8481C22.9289 26.9104 27.5 21.7391 27.5 15.5Z" fill="#1877F2" />
                    <path d="M19.8657 19.1133L20.4199 15.5H16.9531V13.1552C16.9531 12.1667 17.4374 11.2031 18.9902 11.2031H20.5664V8.12695C20.5664 8.12695 19.1359 7.88281 17.7683 7.88281C14.913 7.88281 13.0469 9.61328 13.0469 12.7461V15.5H9.87305V19.1133H13.0469V27.8481C13.6833 27.948 14.3355 28 15 28C15.6645 28 16.3167 27.948 16.9531 27.8481V19.1133H19.8657Z" fill="white" />
                  </svg>
                </div>
                <div className="h-[50px] w-[50px] bg-white rounded-[12px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path d="M15.0039 3C9.78557 3 8.25919 3.00537 7.96232 3.02979C6.89151 3.11914 6.22501 3.2876 5.49893 3.64943C4.93936 3.92726 4.49795 4.24954 4.06289 4.70121C3.26943 5.52446 2.78896 6.53767 2.61513 7.74179C2.53065 8.32628 2.50575 8.44591 2.50087 11.4323C2.49891 12.4279 2.50087 13.738 2.50087 15.4954C2.50087 20.7113 2.50673 22.2362 2.53163 22.5326C2.61806 23.5751 2.78163 24.2309 3.12782 24.9482C3.78945 26.3213 5.05264 27.352 6.54044 27.7368C7.05558 27.8696 7.62491 27.9424 8.35539 27.977C8.66496 27.9907 11.8202 28 14.9775 28C18.1347 28 21.2915 27.9961 21.5937 27.981C22.4399 27.9409 22.9311 27.875 23.4741 27.7349C24.9717 27.3481 26.2119 26.333 26.8867 24.9404C27.2261 24.2402 27.3979 23.5595 27.4761 22.5717C27.4932 22.3563 27.5 18.9217 27.5 15.4919C27.5 12.0617 27.4922 8.63341 27.4756 8.41807C27.397 7.41415 27.2246 6.73884 26.8745 6.02545C26.5869 5.44145 26.2681 5.00492 25.8047 4.55911C24.9775 3.76906 23.9663 3.28809 22.7612 3.11426C22.1767 3.03027 22.0605 3.00537 19.0727 3H15.0039Z" fill="url(#paint0_radial_682_7330)" />
                    <path d="M15.0039 3C9.78557 3 8.25919 3.00537 7.96232 3.02979C6.89151 3.11914 6.22501 3.2876 5.49893 3.64943C4.93936 3.92726 4.49795 4.24954 4.06289 4.70121C3.26943 5.52446 2.78896 6.53767 2.61513 7.74179C2.53065 8.32628 2.50575 8.44591 2.50087 11.4323C2.49891 12.4279 2.50087 13.738 2.50087 15.4954C2.50087 20.7113 2.50673 22.2362 2.53163 22.5326C2.61806 23.5751 2.78163 24.2309 3.12782 24.9482C3.78945 26.3213 5.05264 27.352 6.54044 27.7368C7.05558 27.8696 7.62491 27.9424 8.35539 27.977C8.66496 27.9907 11.8202 28 14.9775 28C18.1347 28 21.2915 27.9961 21.5937 27.981C22.4399 27.9409 22.9311 27.875 23.4741 27.7349C24.9717 27.3481 26.2119 26.333 26.8867 24.9404C27.2261 24.2402 27.3979 23.5595 27.4761 22.5717C27.4932 22.3563 27.5 18.9217 27.5 15.4919C27.5 12.0617 27.4922 8.63341 27.4756 8.41807C27.397 7.41415 27.2246 6.73884 26.8745 6.02545C26.5869 5.44145 26.2681 5.00492 25.8047 4.55911C24.9775 3.76906 23.9663 3.28809 22.7612 3.11426C22.1767 3.03027 22.0605 3.00537 19.0727 3H15.0039Z" fill="url(#paint1_radial_682_7330)" />
                    <path d="M15.0039 3C9.78557 3 8.25919 3.00537 7.96232 3.02979C6.89151 3.11914 6.22501 3.2876 5.49893 3.64943C4.93936 3.92726 4.49795 4.24954 4.06289 4.70121C3.26943 5.52446 2.78896 6.53767 2.61513 7.74179C2.53065 8.32628 2.50575 8.44591 2.50087 11.4323C2.49891 12.4279 2.50087 13.738 2.50087 15.4954C2.50087 20.7113 2.50673 22.2362 2.53163 22.5326C2.61806 23.5751 2.78163 24.2309 3.12782 24.9482C3.78945 26.3213 5.05264 27.352 6.54044 27.7368C7.05558 27.8696 7.62491 27.9424 8.35539 27.977C8.66496 27.9907 11.8202 28 14.9775 28C18.1347 28 21.2915 27.9961 21.5937 27.981C22.4399 27.9409 22.9311 27.875 23.4741 27.7349C24.9717 27.3481 26.2119 26.333 26.8867 24.9404C27.2261 24.2402 27.3979 23.5595 27.4761 22.5717C27.4932 22.3563 27.5 18.9217 27.5 15.4919C27.5 12.0617 27.4922 8.63341 27.4756 8.41807C27.397 7.41415 27.2246 6.73884 26.8745 6.02545C26.5869 5.44145 26.2681 5.00492 25.8047 4.55911C24.9775 3.76906 23.9663 3.28809 22.7612 3.11426C22.1767 3.03027 22.0605 3.00537 19.0727 3H15.0039Z" fill="url(#paint2_radial_682_7330)" />
                    <path d="M15.0039 3C9.78557 3 8.25919 3.00537 7.96232 3.02979C6.89151 3.11914 6.22501 3.2876 5.49893 3.64943C4.93936 3.92726 4.49795 4.24954 4.06289 4.70121C3.26943 5.52446 2.78896 6.53767 2.61513 7.74179C2.53065 8.32628 2.50575 8.44591 2.50087 11.4323C2.49891 12.4279 2.50087 13.738 2.50087 15.4954C2.50087 20.7113 2.50673 22.2362 2.53163 22.5326C2.61806 23.5751 2.78163 24.2309 3.12782 24.9482C3.78945 26.3213 5.05264 27.352 6.54044 27.7368C7.05558 27.8696 7.62491 27.9424 8.35539 27.977C8.66496 27.9907 11.8202 28 14.9775 28C18.1347 28 21.2915 27.9961 21.5937 27.981C22.4399 27.9409 22.9311 27.875 23.4741 27.7349C24.9717 27.3481 26.2119 26.333 26.8867 24.9404C27.2261 24.2402 27.3979 23.5595 27.4761 22.5717C27.4932 22.3563 27.5 18.9217 27.5 15.4919C27.5 12.0617 27.4922 8.63341 27.4756 8.41807C27.397 7.41415 27.2246 6.73884 26.8745 6.02545C26.5869 5.44145 26.2681 5.00492 25.8047 4.55911C24.9775 3.76906 23.9663 3.28809 22.7612 3.11426C22.1767 3.03027 22.0605 3.00537 19.0727 3H15.0039Z" fill="url(#paint3_radial_682_7330)" />
                    <path d="M15.0003 6.40918C12.5314 6.40918 12.2215 6.42017 11.252 6.46414C10.284 6.50858 9.62358 6.66151 9.04574 6.88659C8.44784 7.11885 7.94068 7.42948 7.43543 7.93461C6.92971 8.43974 6.6193 8.94726 6.38625 9.54462C6.16085 10.1229 6.00756 10.7838 5.9641 11.751C5.92064 12.7207 5.90918 13.0308 5.90918 15.4996C5.90918 17.9684 5.92016 18.2776 5.9641 19.2472C6.00851 20.215 6.1618 20.8754 6.38625 21.4536C6.61882 22.0515 6.92923 22.5585 7.43496 23.0641C7.94021 23.5697 8.44737 23.8813 9.04478 24.1136C9.6231 24.3382 10.284 24.4916 11.2515 24.536C12.2215 24.58 12.5309 24.591 14.9998 24.591C17.4688 24.591 17.7778 24.58 18.7477 24.536C19.7157 24.4916 20.3771 24.3387 20.9554 24.1136C21.5533 23.8813 22.0595 23.5702 22.5647 23.0646C23.0705 22.5595 23.3809 22.052 23.6139 21.4546C23.8374 20.8764 23.9907 20.2154 24.0361 19.2482C24.0795 18.2785 24.091 17.9693 24.091 15.5006C24.091 13.0318 24.0795 12.7216 24.0361 11.752C23.9907 10.7843 23.8374 10.1238 23.6139 9.54557C23.3809 8.94773 23.0705 8.44069 22.5647 7.93508C22.059 7.42948 21.5533 7.11885 20.9549 6.88659C20.3752 6.66198 19.7142 6.50858 18.7467 6.46414C17.7768 6.42017 17.4683 6.40918 14.9984 6.40918H15.0003ZM14.1851 8.04739C14.4273 8.04691 14.6971 8.04739 15.0008 8.04739C17.4282 8.04739 17.7157 8.05599 18.6741 8.09948C19.5605 8.1401 20.0414 8.28824 20.3618 8.4125C20.7859 8.57737 21.0886 8.77426 21.4067 9.09253C21.7247 9.41081 21.922 9.71379 22.0872 10.1382C22.2118 10.4583 22.3599 10.9391 22.4005 11.8256C22.4439 12.7838 22.4535 13.0719 22.4535 15.4977C22.4535 17.9239 22.4439 18.2116 22.4005 19.1698C22.3599 20.0563 22.2118 20.5371 22.0872 20.8572C21.9224 21.2816 21.7252 21.5836 21.4067 21.9014C21.0886 22.2197 20.7863 22.4166 20.3618 22.5815C20.0418 22.7067 19.5605 22.8543 18.6741 22.8945C17.7157 22.938 17.4277 22.9475 15.0008 22.9475C12.5734 22.9475 12.2854 22.938 11.3275 22.8945C10.4411 22.8534 9.96025 22.7057 9.63933 22.581C9.21527 22.4161 8.91202 22.2192 8.59397 21.901C8.27592 21.5827 8.0787 21.2807 7.91346 20.8563C7.78882 20.5361 7.64078 20.0553 7.60019 19.1689C7.55673 18.2107 7.54814 17.9225 7.54814 15.4953C7.54814 13.0676 7.55673 12.7814 7.60019 11.8232C7.64078 10.9367 7.78882 10.456 7.91346 10.1353C8.07822 9.71092 8.27545 9.40794 8.59397 9.08967C8.91202 8.77139 9.21527 8.5745 9.63933 8.40915C9.95977 8.28394 10.4411 8.13628 11.3275 8.09565C12.1661 8.0579 12.4913 8.04643 14.1856 8.04452L14.1851 8.04739ZM19.8532 9.55704C19.251 9.55704 18.7625 10.045 18.7625 10.6476C18.7625 11.2497 19.251 11.7386 19.8532 11.7386C20.4554 11.7386 20.9439 11.2502 20.9439 10.6476C20.9439 10.045 20.4554 9.55657 19.8532 9.55704ZM15.0003 10.8316C12.422 10.8316 10.3318 12.9219 10.3318 15.5001C10.3318 18.0783 12.422 20.1676 15.0003 20.1676C17.5786 20.1676 19.6679 18.0783 19.6679 15.5001C19.6679 12.9219 17.5786 10.8316 15.0003 10.8316ZM15.0003 12.4698C16.6737 12.4698 18.0309 13.8265 18.0309 15.5001C18.0309 17.1737 16.6741 18.5304 15.0003 18.5304C13.3265 18.5304 11.9698 17.1737 11.9698 15.5001C11.9703 13.826 13.327 12.4698 15.0003 12.4698Z" fill="white" />
                    <defs>
                      <radialGradient id="paint0_radial_682_7330" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.6929 14.7182) rotate(164.25) scale(15.9737 11.5084)">
                        <stop stop-color="#FF005F" />
                        <stop offset="1" stop-color="#FC01D8" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_682_7330" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.14038 29.9261) rotate(-90) scale(19.9559 21.1725)">
                        <stop stop-color="#FFCC00" />
                        <stop offset="0.1242" stop-color="#FFCC00" />
                        <stop offset="0.5672" stop-color="#FE4A05" />
                        <stop offset="0.6942" stop-color="#FF0F3F" />
                        <stop offset="1" stop-color="#FE0657" stop-opacity="0" />
                      </radialGradient>
                      <radialGradient id="paint2_radial_682_7330" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.6315 27.6478) rotate(-59.8701) scale(8.2519 10.743)">
                        <stop stop-color="#FFCC00" />
                        <stop offset="1" stop-color="#FFCC00" stop-opacity="0" />
                      </radialGradient>
                      <radialGradient id="paint3_radial_682_7330" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.89193 4.01883) rotate(164.274) scale(15.7965 5.38195)">
                        <stop stop-color="#780CFF" />
                        <stop offset="1" stop-color="#820BFF" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="h-[50px] w-[50px] bg-white rounded-[12px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                    <path d="M23.75 3H6.25C4.17893 3 2.5 4.67893 2.5 6.75V24.25C2.5 26.3211 4.17893 28 6.25 28H23.75C25.8211 28 27.5 26.3211 27.5 24.25V6.75C27.5 4.67893 25.8211 3 23.75 3Z" fill="#00C70A" />
                    <path d="M21.938 20.3692C23.0347 19.6532 23.75 18.6002 23.75 17.4209C23.75 15.2729 21.3658 13.546 18.4571 13.546C15.5484 13.546 13.2119 15.2729 13.2119 17.4209C13.2119 19.5689 15.5484 21.2958 18.4571 21.2958C19.077 21.2958 19.6492 21.2115 20.1737 21.0852C20.3644 21.0431 20.5552 21.0852 20.6029 21.1273L21.795 21.717C21.938 21.8012 22.0811 21.717 22.0334 21.5485L21.7473 20.6219C21.7473 20.4955 21.8426 20.4113 21.938 20.3692ZM16.6928 16.7891C16.5869 16.8139 16.476 16.8169 16.3686 16.7978C16.2612 16.7787 16.1602 16.7381 16.0734 16.6791C15.9866 16.6201 15.9163 16.5442 15.8679 16.4574C15.8195 16.3706 15.7944 16.2752 15.7944 16.1784C15.7944 16.0817 15.8195 15.9862 15.8679 15.8994C15.9163 15.8126 15.9866 15.7368 16.0734 15.6778C16.1602 15.6188 16.2612 15.5781 16.3686 15.5591C16.476 15.54 16.5869 15.5429 16.6928 15.5677C16.8453 15.6034 16.9802 15.6826 17.0765 15.7931C17.1727 15.9036 17.2249 16.039 17.2249 16.1784C17.2249 16.3178 17.1727 16.4533 17.0765 16.5637C16.9802 16.6742 16.8453 16.7534 16.6928 16.7891ZM20.2214 16.7891C20.1155 16.8139 20.0046 16.8169 19.8972 16.7978C19.7898 16.7787 19.6888 16.7381 19.602 16.6791C19.5152 16.6201 19.4449 16.5442 19.3965 16.4574C19.3482 16.3706 19.323 16.2752 19.323 16.1784C19.323 16.0817 19.3482 15.9862 19.3965 15.8994C19.4449 15.8126 19.5152 15.7368 19.602 15.6778C19.6888 15.6188 19.7898 15.5781 19.8972 15.5591C20.0046 15.54 20.1155 15.5429 20.2214 15.5677C20.3739 15.6034 20.5088 15.6826 20.6051 15.7931C20.7013 15.9036 20.7535 16.039 20.7535 16.1784C20.7535 16.3178 20.7013 16.4533 20.6051 16.5637C20.5088 16.6742 20.3739 16.7534 20.2214 16.7891ZM12.5443 9.25C9.06335 9.25 6.25 11.3559 6.25 13.9251C6.25 15.315 7.06063 16.5785 8.39578 17.4209C8.53883 17.5051 8.6342 17.6315 8.58651 17.8421L8.25272 18.8529C8.20504 19.0635 8.39578 19.1478 8.53883 19.1056L9.96935 18.3896C10.1124 18.3054 10.3031 18.2633 10.4939 18.3054C11.7337 18.6423 12.7827 18.5581 12.9257 18.5581C11.7813 15.0202 15.7391 12.9985 18.7909 13.167C18.314 10.9768 15.6914 9.25 12.5443 9.25ZM10.4462 13.167C10.32 13.1938 10.1885 13.195 10.0617 13.1705C9.93494 13.146 9.81609 13.0964 9.71413 13.0254C9.61217 12.9545 9.52975 12.864 9.47309 12.7609C9.41642 12.6577 9.38698 12.5446 9.38698 12.4299C9.38698 12.3153 9.41642 12.2021 9.47309 12.099C9.52975 11.9958 9.61217 11.9054 9.71413 11.8344C9.81609 11.7634 9.93494 11.7138 10.0617 11.6893C10.1885 11.6648 10.32 11.666 10.4462 11.6928C10.6335 11.7327 10.8003 11.8271 10.9195 11.9608C11.0388 12.0945 11.1036 12.2597 11.1036 12.4299C11.1036 12.6001 11.0388 12.7654 10.9195 12.8991C10.8003 13.0328 10.6335 13.1271 10.4462 13.167ZM14.6901 13.167C14.5639 13.1938 14.4324 13.195 14.3056 13.1705C14.1788 13.146 14.06 13.0964 13.958 13.0254C13.856 12.9545 13.7736 12.864 13.717 12.7609C13.6603 12.6577 13.6308 12.5446 13.6308 12.4299C13.6308 12.3153 13.6603 12.2021 13.717 12.099C13.7736 11.9958 13.856 11.9054 13.958 11.8344C14.06 11.7634 14.1788 11.7138 14.3056 11.6893C14.4324 11.6648 14.5639 11.666 14.6901 11.6928C14.8774 11.7327 15.0441 11.8271 15.1634 11.9608C15.2826 12.0945 15.3475 12.2597 15.3475 12.4299C15.3475 12.6001 15.2826 12.7654 15.1634 12.8991C15.0441 13.0328 14.8774 13.1271 14.6901 13.167Z" fill="white" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl text-[#2C2C2E] pb-[25px]">Əlaqə vasitələri</h3>
              <div className="flex text-[#64717C] pb-[15px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.6282 14.8901L16.0842 14.4371L15.0252 13.3731L14.5712 13.8261L15.6282 14.8901ZM17.6132 14.2471L19.5242 15.2861L20.2392 13.9681L18.3292 12.9301L17.6132 14.2471ZM19.8912 17.3501L18.4712 18.7631L19.5282 19.8261L20.9482 18.4141L19.8912 17.3501ZM17.6052 19.2171C16.1552 19.3531 12.4052 19.2321 8.34322 15.1941L7.28522 16.2571C11.7172 20.6641 15.9362 20.8801 17.7452 20.7111L17.6052 19.2171ZM8.34322 15.1941C4.47222 11.3441 3.83022 8.10708 3.75022 6.70208L2.25222 6.78708C2.35222 8.55508 3.14722 12.1431 7.28522 16.2571L8.34322 15.1941ZM9.71822 9.01408L10.0052 8.72808L8.94922 7.66508L8.66222 7.95008L9.71822 9.01408ZM10.2332 5.09308L8.97322 3.40908L7.77222 4.30908L9.03222 5.99208L10.2332 5.09308ZM4.73222 3.04208L3.16222 4.60208L4.22022 5.66608L5.78922 4.10608L4.73222 3.04208ZM9.19022 8.48208C8.66022 7.95008 8.66022 7.95008 8.66022 7.95208H8.65822L8.65522 7.95608C8.6077 8.00399 8.56515 8.05659 8.52822 8.11308C8.47422 8.19308 8.41522 8.29808 8.36522 8.43108C8.2435 8.77441 8.21317 9.14349 8.27722 9.50208C8.41122 10.3671 9.00722 11.5101 10.5332 13.0281L11.5912 11.9641C10.1622 10.5441 9.82222 9.68008 9.75922 9.27208C9.72922 9.07808 9.76022 8.98208 9.76922 8.96008C9.77522 8.94675 9.77522 8.94475 9.76922 8.95408C9.76031 8.96788 9.75027 8.98092 9.73922 8.99308L9.72922 9.00308L9.71922 9.01208L9.19022 8.48208ZM10.5332 13.0281C12.0602 14.5461 13.2092 15.1381 14.0752 15.2701C14.5182 15.3381 14.8752 15.2841 15.1462 15.1831C15.298 15.1276 15.4398 15.0479 15.5662 14.9471L15.6162 14.9021L15.6232 14.8961L15.6262 14.8931L15.6272 14.8911C15.6272 14.8911 15.6282 14.8901 15.0992 14.3581C14.5692 13.8261 14.5722 13.8251 14.5722 13.8251L14.5742 13.8231L14.5762 13.8211L14.5822 13.8161L14.5922 13.8061L14.6302 13.7761C14.6396 13.7701 14.6372 13.7707 14.6232 13.7781C14.5982 13.7871 14.5002 13.8181 14.3032 13.7881C13.8892 13.7241 13.0192 13.3841 11.5912 11.9641L10.5332 13.0281ZM8.97322 3.40808C7.95322 2.04808 5.94922 1.83208 4.73222 3.04208L5.78922 4.10608C6.32122 3.57708 7.26522 3.63208 7.77222 4.30908L8.97322 3.40808ZM3.75122 6.70308C3.73122 6.35708 3.89022 5.99508 4.22022 5.66708L3.16122 4.60308C2.62422 5.13708 2.20122 5.89308 2.25222 6.78708L3.75122 6.70308ZM18.4712 18.7631C18.1972 19.0371 17.9012 19.1911 17.6062 19.2181L17.7452 20.7111C18.4802 20.6421 19.0812 20.2721 19.5292 19.8271L18.4712 18.7631ZM10.0052 8.72808C10.9902 7.74908 11.0632 6.20208 10.2342 5.09408L9.03322 5.99308C9.43622 6.53208 9.37622 7.23908 8.94822 7.66608L10.0052 8.72808ZM19.5252 15.2871C20.3422 15.7311 20.4692 16.7771 19.8922 17.3511L20.9502 18.4141C22.2902 17.0811 21.8772 14.8581 20.2402 13.9691L19.5252 15.2871ZM16.0842 14.4381C16.4682 14.0561 17.0862 13.9621 17.6142 14.2481L18.3302 12.9311C17.2462 12.3411 15.9022 12.5041 15.0262 13.3741L16.0842 14.4381Z" fill="#0D9CD8" />
                </svg>
                <p className="pl-3">0507777777</p>
              </div>
              <div className="flex text-[#64717C]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.1099 3C18.8978 3 21 5.36867 21 8.50974V14.4972C21 16.1048 20.4541 17.5572 19.462 18.5877C18.5721 19.5109 17.4176 20 16.1233 20H7.87423C6.58242 20 5.42874 19.5118 4.53795 18.5877C3.54586 17.5572 3 16.1048 3 14.4972V8.50974C3 5.36867 5.10223 3 7.89014 3H16.1099ZM16.1099 4.30769H7.89014C5.78456 4.30769 4.25581 6.07482 4.25581 8.50974V14.4972C4.25581 15.7552 4.67107 16.879 5.42456 17.661C6.07423 18.3366 6.92233 18.6923 7.87674 18.6923H16.1099C16.1115 18.6906 16.1182 18.6923 16.1233 18.6923C17.0785 18.6923 17.9258 18.3366 18.5754 17.661C19.3298 16.879 19.7442 15.7552 19.7442 14.4972V8.50974C19.7442 6.07482 18.2154 4.30769 16.1099 4.30769ZM17.4293 8.34306C17.6478 8.6229 17.6068 9.03439 17.338 9.2628L13.6175 12.4117C13.147 12.8005 12.5844 12.995 12.0226 12.995C11.4625 12.995 10.9041 12.8023 10.4369 12.417L6.68205 9.26454C6.41163 9.03788 6.36977 8.62552 6.5866 8.3448C6.80512 8.06495 7.20028 8.02049 7.46986 8.24629L11.2214 11.3952C11.6927 11.784 12.3567 11.784 12.8313 11.3917L16.5452 8.24803C16.8148 8.01875 17.21 8.06234 17.4293 8.34306Z" fill="#0D9CD8" />
                </svg>
                <p className="pl-3">dr.zarinababayeva@gmail.com</p>
              </div>
              <h3 className="text-xl text-[#2C2C2E] py-[25px]">İşlədiyi Klinikalar</h3>
              <div className="pb-[14px]">
                <h5>Medical Plaza</h5>
                <p className="text-[#64717C]">Bakı,Süleyman Rüstəmov küçəsi</p>
              </div>
              <div className="pb-[14px]">
                <h5>İstanbul NS Klinika</h5>
                <p className="text-[#64717C]">Bakı,Süleyman Rüstəmov küçəsi</p>
              </div>
            </>
          )}
          {selectedLabel === "Haqqımda" && (
            <>
              <div className="flex justify-between items-center">
                <h1 className="text-[#2C2C2E] pb-[24px] font-medium text-[.9rem] sm:text-[1.25rem]">Təhsil</h1>
                <div className="flex text-[#0D9CD8] text-sm font-medium items-end gap-2">
                  <h1>Redaktə et</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 7.00011H6C5.46957 7.00011 4.96086 7.21082 4.58579 7.58589C4.21071 7.96097 4 8.46967 4 9.00011V18.0001C4 18.5305 4.21071 19.0392 4.58579 19.4143C4.96086 19.7894 5.46957 20.0001 6 20.0001H15C15.5304 20.0001 16.0391 19.7894 16.4142 19.4143C16.7893 19.0392 17 18.5305 17 18.0001V17.0001M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#0D9CD8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <div className="w-[1.5px] h-[338px] relative ml-[5px] border border-[#B8E5F8] border-dashed">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#0D9CD8] absolute top-[-2px] left-[-5px]"></div>
                  <div className="w-[10px] h-[10px] rounded-full bg-[#0D9CD8] absolute top-[184px] left-[-5px]"></div>
                </div>
                <div className="absolute top-[20px] left-[28px] text-[#2C2C2E]">
                  <div className="bg-[#F2F5F8] w-[89px] h-[28px] rounded-[36px] flex justify-center items-center">
                    <p className="text-[.7rem] ">1998-2005</p>
                  </div>
                  <h2 className="text-[1.2rem] font-medium pt-[16px]">Psixologiya Bakalavr</h2>
                  <h2 className="text-[1.1rem]">Azərbaycan Tibb Universiteti</h2>
                  <p className="text-[#64717C] py-[12px] text-[.7rem]">Lorem ipsum dolor sit amet consectetur. Enim lacus cras mattis lectus suspendisse eu cras. Lectus sed iaculis mi ac et condimentum.</p>
                  <div className="bg-[#F2F5F8] w-[89px] h-[28px] rounded-[36px] flex justify-center items-center">
                    <p className="text-[.7rem] ">2005-2011</p>
                  </div>
                  <h2 className="text-[1.2rem] font-medium pt-[16px]">Psixologiya Magistr</h2>
                  <h2 className="text-[1.1rem]">Azərbaycan Tibb Universiteti</h2>
                  <p className="text-[#64717C] py-[12px] text-[.7rem]">Lorem ipsum dolor sit amet consectetur. Enim lacus cras mattis lectus suspendisse eu cras. Lectus sed iaculis mi ac et condimentum.</p>
                </div>
              </div>
              <div className="pt-[40px]">
                <h2 className="text-[#2C2C2E] pb-[24px] font-medium text-[.9rem] sm:text-[1.25rem]">Təcrübə</h2>
                <div className="relative">
                  <div className="w-[1.5px] h-[338px] relative ml-[5px] border border-[#B8E5F8] border-dashed">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#0D9CD8] absolute top-[-2px] left-[-5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#0D9CD8] absolute top-[184px] left-[-5px]"></div>
                  </div>
                  <div className="absolute top-[20px] left-[28px] text-[#2C2C2E]">
                    <div className="bg-[#F2F5F8] w-[89px] h-[28px] rounded-[36px] flex justify-center items-center">
                      <p className="text-[.7rem] ">1998-2005</p>
                    </div>
                    <h2 className="text-[1.2rem] font-medium pt-[16px]">Psixoloq</h2>
                    <h2 className="text-[1.1rem]">Medical Plaza</h2>
                    <p className="text-[#64717C] py-[12px] text-[.7rem]">Lorem ipsum dolor sit amet consectetur. Enim lacus cras mattis lectus suspendisse eu cras. Lectus sed iaculis mi ac et condimentum.</p>
                    <div className="bg-[#F2F5F8] w-[89px] h-[28px] rounded-[36px] flex justify-center items-center">
                      <p className="text-[.7rem] ">2005-2011</p>
                    </div>
                    <h2 className="text-[1.2rem] font-medium pt-[16px]">Həkim</h2>
                    <h2 className="text-[1.1rem]">İstanbul NS Klinika</h2>
                    <p className="text-[#64717C] py-[12px] text-[.7rem]">Lorem ipsum dolor sit amet consectetur. Enim lacus cras mattis lectus suspendisse eu cras. Lectus sed iaculis mi ac et condimentum.</p>
                  </div>
                </div>
              </div>
              <div className="pt-[40px]">
                <h2 className="text-[#2C2C2E] pb-[24px] font-medium text-[.9rem] sm:text-[1.25rem]">Sertifikatlar</h2>
                <div className="relative">
                  <div className="w-[1.5px] h-[338px] relative ml-[5px] border border-[#B8E5F8] border-dashed">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#0D9CD8] absolute top-[-2px] left-[-5px]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#0D9CD8] absolute top-[184px] left-[-5px]"></div>
                  </div>
                  <div className="absolute top-[20px] left-[28px] text-[#2C2C2E]">
                    <div className="bg-[#F2F5F8] w-[89px] h-[28px] rounded-[36px] flex justify-center items-center">
                      <p className="text-[.7rem] ">20.10.2020</p>
                    </div>
                    <h2 className="text-[1.2rem] font-medium pt-[16px]">Psixoloq</h2>
                    <h2 className="text-[1.1rem]">Medical Plaza</h2>
                    <p className="text-[#64717C] py-[12px] text-[.7rem]">Lorem ipsum dolor sit amet consectetur. Enim lacus cras mattis lectus suspendisse eu cras. Lectus sed iaculis mi ac et condimentum.</p>
                    <div className="bg-[#F2F5F8] w-[89px] h-[28px] rounded-[36px] flex justify-center items-center">
                      <p className="text-[.7rem] ">20.10.2020</p>
                    </div>
                    <h2 className="text-[1.2rem] font-medium pt-[16px]">Həkim</h2>
                    <h2 className="text-[1.1rem]">İstanbul NS Klinika</h2>
                    <p className="text-[#64717C] py-[12px] text-[.7rem]">Lorem ipsum dolor sit amet consectetur. Enim lacus cras mattis lectus suspendisse eu cras. Lectus sed iaculis mi ac et condimentum.</p>
                  </div>
                </div>
              </div>

            </>
          )}
          {selectedLabel === "Əlaqə" && (
            <>
              <p className="text-[#636366] pb-[38px]">Profilinizdə göstərmək istədiyiniz əlaqə vasitələrini əlavə edin</p>
              <div className="flex flex-col justify-between w-full gap-[18px]">
                <div>
                  <label htmlFor="name" className="block text-[#2C2C2E] pb-2">Telefon nömrəsi</label>
                  <div
                    className="relative">
                    <input
                      type="text"
                      id="name"
                      className="placeholder:text-[#636366] w-full h-[48px] border pl-[80px] border-gray-300 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select name="" id="" className="text-[#636366] outline-none absolute top-[1px] h-[46px] left-[4px] rounded-[12px]">
                      <option value="" >+994</option>
                    </select>
                  </div>
                  <div className="rounded-full border w-[26px] h-[26px] flex justify-center items-center text-xl text-[#0D9CD8] border-black mt-2">
                    +
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-[#2C2C2E] pb-2">Email</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Email adresinizi daxil edin"
                    className="h-[48px] w-full border border-gray-300 placeholder:text-[#AEAEB2] pl-4 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-[#2C2C2E] pb-2">Sosial Şəbəkə Profilləri</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="http://"
                    className=" h-[48px] w-full border placeholder:text-[#AEAEB2] pl-4 border-gray-300 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="rounded-full border w-[26px] h-[26px] flex justify-center items-center text-xl text-[#0D9CD8] border-black mt-2">
                    +
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-[#2C2C2E] pb-2">İş ünvanı</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ünvanınızı daxil edin"
                    className=" h-[48px] w-full border placeholder:text-[#AEAEB2] pl-4 border-gray-300 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="rounded-full border w-[26px] h-[26px] flex justify-center items-center text-xl text-[#0D9CD8] border-black mt-2">
                    +
                  </div>
                </div>
              </div>
              <div className="pt-[38px] w-full">
                <button className="w-full h-[52px] text-white rounded-[8px] bg-[#0D9CD8]">
                  Yadda saxla
                </button>
              </div>
            </>
          )}
          {selectedLabel === "Qr Kodun" && (
            <>
              <div className="flex flex-col justify-center items-center">
                <img src="/assets/images/QR.png" alt="" className="height-[220px] width-[220px]" />
                <p className="text-[#0D9CD8] font-semibold text-lg">MedClub</p>
                <div className="bg-[#0D9CD8] rounded-lg text-white w-full sm:w-[361px] h-[44px] flex justify-center items-center my-[50px]">QR Kodu yüklə</div>
              </div>
              <p className="text-center">Profilimi Paylaş</p>
              <div className="flex gap-[18px] justify-center my-[15px] flex-wrap">
                <div className="border rounded-xl p-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path d="M26.1667 13.9987C26.1667 7.55537 20.9434 2.33203 14.5 2.33203C8.05671 2.33203 2.83337 7.55537 2.83337 13.9987C2.83337 19.8219 7.09971 24.6484 12.6771 25.5236V17.3711H9.71488V13.9987H12.6771V11.4284C12.6771 8.50443 14.4189 6.88932 17.0838 6.88932C18.3602 6.88932 19.6954 7.11719 19.6954 7.11719V9.98828H18.2242C16.7749 9.98828 16.323 10.8876 16.323 11.8102V13.9987H19.5586L19.0414 17.3711H16.323V25.5236C21.9004 24.6484 26.1667 19.8219 26.1667 13.9987Z" fill="#1877F2" />
                    <path d="M19.0413 17.3724L19.5586 14H16.3229V11.8115C16.3229 10.8889 16.7749 9.98958 18.2242 9.98958H19.6953V7.11849C19.6953 7.11849 18.3602 6.89062 17.0838 6.89062C14.4188 6.89062 12.6771 8.50573 12.6771 11.4297V14H9.71484V17.3724H12.6771V25.5249C13.2711 25.6181 13.8798 25.6667 14.5 25.6667C15.1202 25.6667 15.7289 25.6181 16.3229 25.5249V17.3724H19.0413Z" fill="white" />
                  </svg>
                </div>
                <div className="border rounded-xl p-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="28" viewBox="0 0 31 28" fill="none">
                    <path d="M15.5039 2.33203C10.2856 2.33203 8.75919 2.33704 8.46232 2.35983C7.39151 2.44323 6.72501 2.60046 5.99893 2.93816C5.43936 3.19748 4.99795 3.49826 4.56289 3.91982C3.76943 4.6882 3.28896 5.63385 3.11513 6.7577C3.03065 7.30322 3.00575 7.41488 3.00087 10.2022C2.99891 11.1314 3.00087 12.3542 3.00087 13.9944C3.00087 18.8626 3.00673 20.2858 3.03163 20.5625C3.11806 21.5355 3.28163 22.1475 3.62782 22.817C4.28945 24.0985 5.55264 25.0606 7.04044 25.4197C7.55558 25.5437 8.12491 25.6116 8.85539 25.6439C9.16496 25.6567 12.3202 25.6654 15.4775 25.6654C18.6347 25.6654 21.7915 25.6617 22.0937 25.6476C22.9399 25.6102 23.4311 25.5487 23.9741 25.4179C25.4717 25.057 26.7119 24.1095 27.3867 22.8097C27.7261 22.1562 27.8979 21.5209 27.9761 20.5989C27.9932 20.3979 28 17.1923 28 13.9912C28 10.7896 27.9922 7.58988 27.9756 7.3889C27.897 6.4519 27.7246 5.82162 27.3745 5.15578C27.0869 4.61072 26.7681 4.20329 26.3047 3.7872C25.4775 3.04982 24.4663 2.60092 23.2612 2.43867C22.6767 2.36029 22.5605 2.33704 19.5727 2.33203H15.5039Z" fill="url(#paint0_radial_843_9684)" />
                    <path d="M15.5039 2.33203C10.2856 2.33203 8.75919 2.33704 8.46232 2.35983C7.39151 2.44323 6.72501 2.60046 5.99893 2.93816C5.43936 3.19748 4.99795 3.49826 4.56289 3.91982C3.76943 4.6882 3.28896 5.63385 3.11513 6.7577C3.03065 7.30322 3.00575 7.41488 3.00087 10.2022C2.99891 11.1314 3.00087 12.3542 3.00087 13.9944C3.00087 18.8626 3.00673 20.2858 3.03163 20.5625C3.11806 21.5355 3.28163 22.1475 3.62782 22.817C4.28945 24.0985 5.55264 25.0606 7.04044 25.4197C7.55558 25.5437 8.12491 25.6116 8.85539 25.6439C9.16496 25.6567 12.3202 25.6654 15.4775 25.6654C18.6347 25.6654 21.7915 25.6617 22.0937 25.6476C22.9399 25.6102 23.4311 25.5487 23.9741 25.4179C25.4717 25.057 26.7119 24.1095 27.3867 22.8097C27.7261 22.1562 27.8979 21.5209 27.9761 20.5989C27.9932 20.3979 28 17.1923 28 13.9912C28 10.7896 27.9922 7.58988 27.9756 7.3889C27.897 6.4519 27.7246 5.82162 27.3745 5.15578C27.0869 4.61072 26.7681 4.20329 26.3047 3.7872C25.4775 3.04982 24.4663 2.60092 23.2612 2.43867C22.6767 2.36029 22.5605 2.33704 19.5727 2.33203H15.5039Z" fill="url(#paint1_radial_843_9684)" />
                    <path d="M15.5039 2.33203C10.2856 2.33203 8.75919 2.33704 8.46232 2.35983C7.39151 2.44323 6.72501 2.60046 5.99893 2.93816C5.43936 3.19748 4.99795 3.49826 4.56289 3.91982C3.76943 4.6882 3.28896 5.63385 3.11513 6.7577C3.03065 7.30322 3.00575 7.41488 3.00087 10.2022C2.99891 11.1314 3.00087 12.3542 3.00087 13.9944C3.00087 18.8626 3.00673 20.2858 3.03163 20.5625C3.11806 21.5355 3.28163 22.1475 3.62782 22.817C4.28945 24.0985 5.55264 25.0606 7.04044 25.4197C7.55558 25.5437 8.12491 25.6116 8.85539 25.6439C9.16496 25.6567 12.3202 25.6654 15.4775 25.6654C18.6347 25.6654 21.7915 25.6617 22.0937 25.6476C22.9399 25.6102 23.4311 25.5487 23.9741 25.4179C25.4717 25.057 26.7119 24.1095 27.3867 22.8097C27.7261 22.1562 27.8979 21.5209 27.9761 20.5989C27.9932 20.3979 28 17.1923 28 13.9912C28 10.7896 27.9922 7.58988 27.9756 7.3889C27.897 6.4519 27.7246 5.82162 27.3745 5.15578C27.0869 4.61072 26.7681 4.20329 26.3047 3.7872C25.4775 3.04982 24.4663 2.60092 23.2612 2.43867C22.6767 2.36029 22.5605 2.33704 19.5727 2.33203H15.5039Z" fill="url(#paint2_radial_843_9684)" />
                    <path d="M15.5039 2.33203C10.2856 2.33203 8.75919 2.33704 8.46232 2.35983C7.39151 2.44323 6.72501 2.60046 5.99893 2.93816C5.43936 3.19748 4.99795 3.49826 4.56289 3.91982C3.76943 4.6882 3.28896 5.63385 3.11513 6.7577C3.03065 7.30322 3.00575 7.41488 3.00087 10.2022C2.99891 11.1314 3.00087 12.3542 3.00087 13.9944C3.00087 18.8626 3.00673 20.2858 3.03163 20.5625C3.11806 21.5355 3.28163 22.1475 3.62782 22.817C4.28945 24.0985 5.55264 25.0606 7.04044 25.4197C7.55558 25.5437 8.12491 25.6116 8.85539 25.6439C9.16496 25.6567 12.3202 25.6654 15.4775 25.6654C18.6347 25.6654 21.7915 25.6617 22.0937 25.6476C22.9399 25.6102 23.4311 25.5487 23.9741 25.4179C25.4717 25.057 26.7119 24.1095 27.3867 22.8097C27.7261 22.1562 27.8979 21.5209 27.9761 20.5989C27.9932 20.3979 28 17.1923 28 13.9912C28 10.7896 27.9922 7.58988 27.9756 7.3889C27.897 6.4519 27.7246 5.82162 27.3745 5.15578C27.0869 4.61072 26.7681 4.20329 26.3047 3.7872C25.4775 3.04982 24.4663 2.60092 23.2612 2.43867C22.6767 2.36029 22.5605 2.33704 19.5727 2.33203H15.5039Z" fill="url(#paint3_radial_843_9684)" />
                    <path d="M15.5002 5.51562C13.0313 5.51562 12.7213 5.52588 11.7519 5.56692C10.7839 5.6084 10.1235 5.75113 9.54562 5.96121C8.94772 6.17798 8.44056 6.4679 7.93531 6.93936C7.42959 7.41081 7.11918 7.8845 6.88613 8.44204C6.66073 8.98173 6.50743 9.59859 6.46398 10.5014C6.42052 11.4064 6.40906 11.6958 6.40906 14C6.40906 16.3042 6.42004 16.5928 6.46398 17.4978C6.50839 18.401 6.66168 19.0174 6.88613 19.5571C7.1187 20.1151 7.42911 20.5884 7.93483 21.0603C8.44008 21.5322 8.94724 21.823 9.54466 22.0397C10.123 22.2494 10.7839 22.3925 11.7514 22.434C12.7213 22.4751 13.0308 22.4853 15.4997 22.4853C17.9687 22.4853 18.2776 22.4751 19.2476 22.434C20.2155 22.3925 20.877 22.2498 21.4553 22.0397C22.0532 21.823 22.5594 21.5326 23.0646 21.0607C23.5703 20.5892 23.8808 20.1156 24.1138 19.558C24.3373 19.0183 24.4906 18.4015 24.536 17.4987C24.5794 16.5937 24.5909 16.3051 24.5909 14.0009C24.5909 11.6967 24.5794 11.4072 24.536 10.5023C24.4906 9.59904 24.3373 8.98262 24.1138 8.44293C23.8808 7.88494 23.5703 7.4117 23.0646 6.9398C22.5589 6.4679 22.0532 6.17798 21.4548 5.96121C20.875 5.75158 20.2141 5.6084 19.2466 5.56692C18.2767 5.52588 17.9682 5.51562 15.4983 5.51562H15.5002ZM14.685 7.04462C14.9271 7.04417 15.197 7.04462 15.5007 7.04462C17.9281 7.04462 18.2156 7.05265 19.174 7.09324C20.0603 7.13115 20.5412 7.26942 20.8617 7.38539C21.2857 7.53927 21.5885 7.72303 21.9066 8.02009C22.2246 8.31715 22.4218 8.59993 22.5871 8.99601C22.7117 9.29485 22.8598 9.74355 22.9003 10.5709C22.9438 11.4652 22.9534 11.7342 22.9534 13.9982C22.9534 16.2627 22.9438 16.5313 22.9003 17.4255C22.8598 18.2529 22.7117 18.7016 22.5871 19.0005C22.4223 19.3966 22.2251 19.6785 21.9066 19.9751C21.5885 20.2721 21.2862 20.4559 20.8617 20.6098C20.5417 20.7266 20.0603 20.8644 19.174 20.9019C18.2156 20.9425 17.9276 20.9514 15.5007 20.9514C13.0733 20.9514 12.7853 20.9425 11.8274 20.9019C10.941 20.8636 10.4601 20.7257 10.1392 20.6093C9.71515 20.4554 9.4119 20.2717 9.09385 19.9746C8.7758 19.6776 8.57857 19.3957 8.41334 18.9996C8.2887 18.7007 8.14066 18.252 8.10007 17.4247C8.05661 16.5304 8.04801 16.2614 8.04801 13.996C8.04801 11.7302 8.05661 11.463 8.10007 10.5687C8.14066 9.74132 8.2887 9.29262 8.41334 8.99333C8.5781 8.59725 8.77533 8.31447 9.09385 8.01741C9.4119 7.72036 9.71515 7.53659 10.1392 7.38226C10.4596 7.2654 10.941 7.12758 11.8274 7.08967C12.6659 7.05443 12.9911 7.04373 14.6855 7.04194L14.685 7.04462ZM20.3531 8.45363C19.7509 8.45363 19.2624 8.90903 19.2624 9.47147C19.2624 10.0335 19.7509 10.4898 20.3531 10.4898C20.9553 10.4898 21.4438 10.0339 21.4438 9.47147C21.4438 8.90903 20.9553 8.45319 20.3531 8.45363ZM15.5002 9.6432C12.9219 9.6432 10.8317 11.5941 10.8317 14.0005C10.8317 16.4068 12.9219 18.3569 15.5002 18.3569C18.0785 18.3569 20.1678 16.4068 20.1678 14.0005C20.1678 11.5941 18.0785 9.6432 15.5002 9.6432ZM15.5002 11.1722C17.1735 11.1722 18.5307 12.4385 18.5307 14.0005C18.5307 15.5625 17.174 16.8288 15.5002 16.8288C13.8264 16.8288 12.4697 15.5625 12.4697 14.0005C12.4701 12.438 13.8269 11.1722 15.5002 11.1722Z" fill="white" />
                    <defs>
                      <radialGradient id="paint0_radial_843_9684" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.1929 13.269) rotate(165.253) scale(15.8977 10.7926)">
                        <stop stop-color="#FF005F" />
                        <stop offset="1" stop-color="#FC01D8" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_843_9684" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.64038 27.463) rotate(-90) scale(18.6255 21.1725)">
                        <stop stop-color="#FFCC00" />
                        <stop offset="0.1242" stop-color="#FFCC00" />
                        <stop offset="0.5672" stop-color="#FE4A05" />
                        <stop offset="0.6942" stop-color="#FF0F3F" />
                        <stop offset="1" stop-color="#FE0657" stop-opacity="0" />
                      </radialGradient>
                      <radialGradient id="paint2_radial_843_9684" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.1315 25.3367) rotate(-58.1253) scale(7.84402 10.5482)">
                        <stop stop-color="#FFCC00" />
                        <stop offset="1" stop-color="#FFCC00" stop-opacity="0" />
                      </radialGradient>
                      <radialGradient id="paint3_radial_843_9684" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.39193 3.28294) rotate(165.275) scale(15.7215 5.04711)">
                        <stop stop-color="#780CFF" />
                        <stop offset="1" stop-color="#820BFF" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="border rounded-xl p-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <g clip-path="url(#clip0_843_9692)">
                      <path d="M1.09752 13.8336C1.09686 16.1862 1.71636 18.4833 2.89433 20.508L0.984863 27.4257L8.11961 25.5694C10.093 26.6354 12.304 27.1939 14.5509 27.1941H14.5568C21.974 27.1941 28.0119 21.2052 28.015 13.8442C28.0165 10.2772 26.6178 6.92307 24.0766 4.3996C21.5358 1.87634 18.1566 0.486003 14.5562 0.484375C7.13808 0.484375 1.10069 6.4729 1.09763 13.8336" fill="url(#paint0_linear_843_9692)" />
                      <path d="M0.617031 13.8281C0.616266 16.2653 1.25797 18.6445 2.47794 20.7417L0.5 27.9074L7.89058 25.9846C9.92692 27.0863 12.2196 27.6671 14.5526 27.668H14.5586C22.242 27.668 28.4967 21.4637 28.5 13.8392C28.5013 10.144 27.0523 6.66932 24.4203 4.05544C21.788 1.44189 18.288 0.00151938 14.5586 0C6.87394 0 0.620094 6.20341 0.617031 13.8281ZM5.01839 20.3805L4.74244 19.9459C3.58241 18.1157 2.97012 16.0007 2.971 13.829C2.97341 7.49152 8.17134 2.3355 14.563 2.3355C17.6583 2.33681 20.5672 3.53408 22.7552 5.70636C24.943 7.87885 26.1469 10.7668 26.1461 13.8383C26.1433 20.1757 20.9452 25.3324 14.5586 25.3324H14.554C12.4745 25.3313 10.435 24.7772 8.65631 23.73L8.23303 23.4809L3.84731 24.6219L5.01839 20.3805Z" fill="url(#paint1_linear_843_9692)" />
                      <path d="M11.0741 8.04667C10.8132 7.47115 10.5385 7.45954 10.2904 7.44945C10.0871 7.44077 9.85483 7.44142 9.62273 7.44142C9.39042 7.44142 9.01297 7.52813 8.69392 7.87379C8.37455 8.21977 7.47461 9.05587 7.47461 10.7564C7.47461 12.4569 8.72291 14.1004 8.89692 14.3313C9.07116 14.5617 11.3068 18.163 14.8475 19.5485C17.7901 20.6999 18.3889 20.4709 19.0276 20.4131C19.6663 20.3556 21.0886 19.5772 21.3788 18.7701C21.6692 17.9631 21.6692 17.2714 21.5821 17.1268C21.4951 16.9828 21.2627 16.8963 20.9144 16.7235C20.566 16.5508 18.8533 15.7144 18.5341 15.5991C18.2147 15.4838 17.9825 15.4263 17.7502 15.7724C17.5179 16.1179 16.8508 16.8963 16.6475 17.1268C16.4443 17.3579 16.241 17.3866 15.8928 17.2137C15.5442 17.0403 14.4223 16.6758 13.0913 15.4984C12.0558 14.5822 11.3567 13.4508 11.1534 13.1047C10.9502 12.7591 11.1317 12.5718 11.3063 12.3996C11.4629 12.2447 11.6548 11.996 11.8292 11.7942C12.0028 11.5924 12.0608 11.4483 12.177 11.2178C12.2932 10.9871 12.235 10.7852 12.1481 10.6124C12.0608 10.4395 11.3839 8.73007 11.0741 8.04667Z" fill="white" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_843_9692" x1="1352.49" y1="2694.62" x2="1352.49" y2="0.484375" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1FAF38" />
                        <stop offset="1" stop-color="#60D669" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_843_9692" x1="1400.5" y1="2790.74" x2="1400.5" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F9F9F9" />
                        <stop offset="1" stop-color="white" />
                      </linearGradient>
                      <clipPath id="clip0_843_9692">
                        <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="border rounded-xl p-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <g clip-path="url(#clip0_843_9697)">
                      <path d="M14.5 0C10.7878 0 7.22437 1.47591 4.60156 4.10047C1.97606 6.72609 0.500751 10.2869 0.5 14C0.5 17.7115 1.97656 21.275 4.60156 23.8995C7.22437 26.5241 10.7878 28 14.5 28C18.2122 28 21.7756 26.5241 24.3984 23.8995C27.0234 21.275 28.5 17.7115 28.5 14C28.5 10.2885 27.0234 6.72503 24.3984 4.10047C21.7756 1.47591 18.2122 0 14.5 0Z" fill="url(#paint0_linear_843_9697)" />
                      <path d="M6.83723 13.854C10.9191 12.076 13.6404 10.9038 15.001 10.3374C18.8904 8.72016 19.6975 8.43929 20.2247 8.42977C20.3407 8.42791 20.5988 8.45657 20.7672 8.59274C20.9072 8.70758 20.9466 8.8629 20.9663 8.97194C20.9838 9.08088 21.0079 9.32916 20.9882 9.52297C20.7782 11.7367 19.866 17.1088 19.4022 19.5883C19.2075 20.6374 18.8204 20.9892 18.4463 21.0235C17.6325 21.0983 17.0157 20.4863 16.2282 19.9703C14.9966 19.1624 14.301 18.6597 13.1044 17.8716C11.7219 16.9607 12.6188 16.46 13.4063 15.6418C13.6119 15.4277 17.195 12.1694 17.2629 11.8739C17.2716 11.8369 17.2804 11.6991 17.1972 11.6265C17.1163 11.5536 16.996 11.5786 16.9085 11.5983C16.7838 11.6263 14.8172 12.9274 11.0022 15.5014C10.4444 15.8851 9.93911 16.0721 9.48411 16.0623C8.98536 16.0516 8.02286 15.7797 7.30755 15.5473C6.43255 15.2623 5.73473 15.1116 5.79598 14.6275C5.82661 14.3755 6.17442 14.1176 6.83723 13.854Z" fill="white" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_843_9697" x1="1400.5" y1="0" x2="1400.5" y2="2800" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2AABEE" />
                        <stop offset="1" stop-color="#229ED9" />
                      </linearGradient>
                      <clipPath id="clip0_843_9697">
                        <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </>
          )}
          {selectedLabel === "Xidmətlər" && (
            <>
              {
                !moreService &&
                (
                  <>
                    <p className="text-xl font-medium text-[#2C2C2E]">Xidmətlər</p>
                    <ul className="flex flex-col gap-5 py-8">
                      <li className="list-disc marker:text-[#0D9CD8]">
                        <div className="flex justify-between">
                          Ailə terapiyası
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 7.00011H6C5.46957 7.00011 4.96086 7.21082 4.58579 7.58589C4.21071 7.96097 4 8.46967 4 9.00011V18.0001C4 18.5305 4.21071 19.0392 4.58579 19.4143C4.96086 19.7894 5.46957 20.0001 6 20.0001H15C15.5304 20.0001 16.0391 19.7894 16.4142 19.4143C16.7893 19.0392 17 18.5305 17 18.0001V17.0001M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#797B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </li>
                      <li className="list-disc marker:text-[#0D9CD8]">
                        <div className="flex justify-between">
                          Ailədaxili Ünsiyyət Problemləri
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 7.00011H6C5.46957 7.00011 4.96086 7.21082 4.58579 7.58589C4.21071 7.96097 4 8.46967 4 9.00011V18.0001C4 18.5305 4.21071 19.0392 4.58579 19.4143C4.96086 19.7894 5.46957 20.0001 6 20.0001H15C15.5304 20.0001 16.0391 19.7894 16.4142 19.4143C16.7893 19.0392 17 18.5305 17 18.0001V17.0001M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="#797B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                    <div onClick={() => setMoreService(!moreService)} className="bg-[#0D9CD8] cursor-pointer w-full h-[44px] flex  justify-center items-center gap-3 text-white rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.625 3.4375C10.625 3.18886 10.5262 2.9504 10.3504 2.77459C10.1746 2.59877 9.93614 2.5 9.6875 2.5C9.43886 2.5 9.2004 2.59877 9.02459 2.77459C8.84877 2.9504 8.75 3.18886 8.75 3.4375V8.75H3.4375C3.18886 8.75 2.9504 8.84877 2.77459 9.02459C2.59877 9.2004 2.5 9.43886 2.5 9.6875C2.5 9.93614 2.59877 10.1746 2.77459 10.3504C2.9504 10.5262 3.18886 10.625 3.4375 10.625H8.75V15.9375C8.75 16.1861 8.84877 16.4246 9.02459 16.6004C9.2004 16.7762 9.43886 16.875 9.6875 16.875C9.93614 16.875 10.1746 16.7762 10.3504 16.6004C10.5262 16.4246 10.625 16.1861 10.625 15.9375V10.625H15.9375C16.1861 10.625 16.4246 10.5262 16.6004 10.3504C16.7762 10.1746 16.875 9.93614 16.875 9.6875C16.875 9.43886 16.7762 9.2004 16.6004 9.02459C16.4246 8.84877 16.1861 8.75 15.9375 8.75H10.625V3.4375Z" fill="white" />
                      </svg>
                      Xidmət əlavə et
                    </div>
                  </>
                )
              }
              {
                moreService &&
                (
                  <>
                  <FaArrowLeft onClick={()=> setMoreService(!moreService)} className="mb-[30px] cursor-pointer"/>
                    <div className="flex flex-col gap-[22px] min-h-[400px]">
                      <div>
                        <label htmlFor="name" className="block text-[#2C2C2E] pb-2 font-medium">Xidmətin adı</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Xidmətin adı daxil edin"
                          className="h-[48px] w-full border border-gray-300 placeholder:text-[#AEAEB2] pl-4 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-[#2C2C2E] pb-2 font-medium">Növbə Növü</label>
                        <input type="radio" name="" id="" className="mr-1" />Ödənişli
                        <input type="radio" name="" id="" className="ml-[26px] mr-1" />Ödənişsiz
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-[#2C2C2E] pb-2 font-medium">Qiymət</label>
                        <div
                          className="relative">
                          <input
                            type="text"
                            id="name"
                            placeholder="Qiyməti daxil edin"
                            className="placeholder:text-[#AEAEB2] w-full h-[48px] border border-gray-300 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <select name="" id="" className="text-[#636366] outline-none absolute top-[1px] h-[46px] right-[4px] rounded-[12px]">
                            <option value="" >AZN</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-[#2C2C2E] pb-2 font-medium">Xidmətin Kateqoriyası</label>
                        <div
                          className="relative">
                          <select name="" id="" className="text-[#AEAEB2] outline-none absolute top-[1px] h-[46px] right-[4px] w-full border border-gray-300 rounded-[12px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="" >Xidmətin kateqoriyasını seçin</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer bg-[#0D9CD8] w-full rounded-xl text-white h-[44px] flex justify-center items-center">
                      Əlavə et
                    </div>
                  </>
                )
              }
            </>
          )}
          {selectedLabel === "Seanslar" && (
            <>
              <p className="text-xl font-medium text-[#2C2C2E]">Seanslar</p>
              <p className="py-[15px]">Seanslardan görüntülər</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[60px] justify-self-start">
                <div className="relative">
                  <img src="/assets/images/seans1.jpg" alt="" className="object-cover h-[200px] min-w-[180px] w-[180px] rounded-xl" />
                  <div className="absolute w-[180px] h-[200px] bg-[#00000033] rounded-xl top-0 flex justify-center items-center">
                    <div className="bg-white border w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl font-normal rotate-45">+</div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/assets/images/seans2.png" alt="" className="object-cover h-[200px] min-w-[180px] w-[180px] rounded-xl" />
                  <div className="absolute w-[180px] h-[200px] bg-[#00000033] rounded-xl top-0 flex justify-center items-center">
                    <div className="bg-white border w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl font-normal rotate-45">+</div>
                  </div>
                </div>
                <div className="relative">
                  <img src="/assets/images/seans3.jpg" alt="" className="object-cover h-[200px] min-w-[180px] w-[180px] rounded-xl" />
                  <div className="absolute w-[180px] h-[200px] bg-[#00000033] rounded-xl top-0 flex justify-center items-center">
                    <div className="bg-white border w-[35px] h-[35px] rounded-full flex justify-center items-center text-2xl font-normal rotate-45">+</div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[114px] border flex justify-center items-center border-[#0D9CD8] border-dotted mt-[50px] rounded-xl">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                    <path d="M36.25 19.3333H36.2742M7.25 38.6667L19.3333 26.5833C21.576 24.4252 24.3407 24.4252 26.5833 26.5833L38.6667 38.6667M33.8333 33.8333L36.25 31.4167C38.4927 29.2586 41.2573 29.2586 43.5 31.4167L50.75 38.6667M7.25 14.5C7.25 12.5772 8.01384 10.7331 9.37348 9.37348C10.7331 8.01384 12.5772 7.25 14.5 7.25H43.5C45.4228 7.25 47.2669 8.01384 48.6265 9.37348C49.9862 10.7331 50.75 12.5772 50.75 14.5V43.5C50.75 45.4228 49.9862 47.2669 48.6265 48.6265C47.2669 49.9862 45.4228 50.75 43.5 50.75H14.5C12.5772 50.75 10.7331 49.9862 9.37348 48.6265C8.01384 47.2669 7.25 45.4228 7.25 43.5V14.5Z" stroke="#0D9CD8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div>
                    <h4 className="text-[#0D9CD8] text-sm">Şəkil əlavə et</h4>
                    <p className="text-[#D1D1D6] text-sm">PNG JPG (maks. 2mb)</p>
                  </div>
                </div>
              </div>

            </>
          )}
          {selectedLabel === "Rəylər" && (
            <>
              <p className="text-xl font-medium text-[#2C2C2E]">Rəylər</p>
              <div className="text-[#64717C] pb-[20px] pt-[35px]">
                <p>12 Rəy</p>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-2">
                    <div className="bg-[#52B6ED] text-[#fff] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                      D A
                    </div>
                    <div>
                      <h5 className="text-[#2C2C2E] font-medium">Dəniz Aydın</h5>
                      <p className="text-[#64717C] text-[.75rem]">12 Avqust 2024</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Rate style={{ color: '#F4B814' }} className='py-3' />
                    <p className='text-sm px-2 text-[#636366]'>(4)</p>
                  </div>
                  <p className="text-[#64717C] pb-[50px]">Lorem ipsum dolor sit amet consectetur. Turpis semper vitae tellus netus. Consequat neque felis consectetur egestas porttitor integer adipiscing. Massa etiam fusce a cursus netus lectus. Tellus eget rhoncus vel dolor leo. In vel mi facilisis amet morbi dui purus nulla purus.  <span className="font-medium underline">Daha çox</span></p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div className="bg-[#52B6ED] text-[#fff] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                      D A
                    </div>
                    <div>
                      <h5 className="text-[#2C2C2E] font-medium">Dəniz Aydın</h5>
                      <p className="text-[#64717C] text-[.75rem]">12 Avqust 2024</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Rate style={{ color: '#F4B814' }} className='py-3' />
                    <p className='text-sm px-2 text-[#636366]'>(4)</p>
                  </div>
                  <p className="text-[#64717C] pb-[50px]">Lorem ipsum dolor sit amet consectetur. Turpis semper vitae tellus netus. Consequat neque felis consectetur egestas porttitor integer adipiscing. Massa etiam fusce a cursus netus lectus. Tellus eget rhoncus vel dolor leo. In vel mi facilisis amet morbi dui purus nulla purus. <span className="font-medium underline">Daha çox</span></p>
                </div>
              </div>
              <h3 className="text-center font-medium pb-[32px]">Daha çox</h3>

            </>
          )}
        </div>
      </div>
    </div >
  )
}
export default DrAccount