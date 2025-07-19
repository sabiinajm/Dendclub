import { useState } from "react";
import UserLoginForm from "./UserLoginForm";
const tabs = [
  { key: "user", label: "İstifadəçi" },
  { key: "doctor", label: "Həkim" },
  { key: "clinic", label: "Klinika/Aptek" },
];
const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  const renderForm = () => {
    switch (activeTab) {
      case "user":
        return <UserLoginForm />;
      //   case "doctor":
      //     return <DoctorForm />;
      //   case "clinic":
      //     return <ClinicForm />;
      default:
        return null;
    }
  };
  return (
    <div className="max-w-[1400px] mx-auto ">
      <img src="/assets/images/logo.png" alt="" className="w-[240px] h-[99px] object-cover absolute top-0 z-[1000]" />
      <div className="flex items-center justify-center flex-col absolute top-0 left-0 z-50 bg-white w-full">
        <div className="max-w-[640px] pt-[100px]">
          <h2 className="flex items-center justify-center mb-16 font-medium text-[28px] text-[#2C2C2E] mt-7">
            Daxil ol
          </h2>
          <div className="flex items-center gap-4 mb-11 justify-center ">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`w-28 text-center py-[6px] font-normal text-base ${activeTab === tab.key
                  ? "border-b border-[#0D9CD8] text-[#0D9CD8]"
                  : ""
                  }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>{renderForm()}</div>
          <p className="mt-12 text-[#636366] text-[15px] font-light ">
            Qeydiyyatdan keçməklə siz bizim
            <div>
              <span className="text-[#0D9CD8] underline">
                {" "}
                istifadə şərtlərimizlə
              </span>{" "}
              və {" "}
              <span className="text-[#0D9CD8] underline">
                məxfilik siyasətimizlə{" "}
              </span>
              razılaşırsınız.
            </div>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 ">
          <button className="font-medium text-base text-white bg-[#0D9CD8] w-[528px] h-[52px] rounded-lg mb-5 ">
            Qeydiyyatdan keç
          </button>
          <div className="flex gap-[33px] mb-[33px] items-center">
            <div className="w-[203px] h-[1px] bg-[#D1D1D6]"></div>
            <p className="text-base font-normal text-[#2C2C2E]">Və ya</p>
            <div className="w-[203px] h-[1px] bg-[#D1D1D6]"></div>
          </div>
          <div className="w-[528px] h-[52px] border border-[#D7D7D7] rounded-[14px] flex items-center justify-center gap-[10px] cursor-pointer mb-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.828 1.63807C12.1176 0.00794709 13.9103 0 13.9103 0C13.9103 0 14.177 1.53259 12.8959 3.00897C11.528 4.58541 9.97326 4.32745 9.97326 4.32745C9.97326 4.32745 9.68131 3.08763 10.828 1.63807ZM10.1373 5.40103C10.8007 5.40103 12.0319 4.52641 13.6345 4.52641C16.3932 4.52641 17.4784 6.40908 17.4784 6.40908C17.4784 6.40908 15.3559 7.4499 15.3559 9.97542C15.3559 12.8244 18 13.8063 18 13.8063C18 13.8063 16.1517 18.7959 13.6551 18.7959C12.5084 18.7959 11.6169 18.0548 10.4087 18.0548C9.1775 18.0548 7.95568 18.8235 7.1599 18.8235C4.88013 18.8236 2 14.0904 2 10.2858C2 6.54251 4.43784 4.57885 6.72444 4.57885C8.21094 4.57885 9.36447 5.40103 10.1373 5.40103Z"
                fill="#2C2C2E"
              />
            </svg>
            Apple ilə daxil olun
          </div>
          <div className="w-[528px] h-[52px] border border-[#D7D7D7] rounded-[14px] flex items-center justify-center gap-[10px] cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8146 10.2222C19.8146 9.39995 19.7489 8.79995 19.6066 8.17773H10.3545V11.8888H15.7853C15.6758 12.8111 15.0846 14.1999 13.7706 15.1332L13.7522 15.2575L16.6775 17.5572L16.8802 17.5777C18.7416 15.8333 19.8146 13.2666 19.8146 10.2222Z"
                fill="#4285F4"
              />
              <path
                d="M10.3545 19.9988C13.0151 19.9988 15.2487 19.1098 16.8802 17.5766L13.7706 15.1321C12.9385 15.7209 11.8216 16.1321 10.3545 16.1321C7.74857 16.1321 5.53685 14.3877 4.74843 11.9766L4.63286 11.9865L1.59105 14.3754L1.55127 14.4876C3.17174 17.7543 6.50031 19.9988 10.3545 19.9988Z"
                fill="#34A853"
              />
              <path
                d="M4.74826 11.9763C4.54023 11.3541 4.41983 10.6874 4.41983 9.99851C4.41983 9.30958 4.54023 8.64294 4.73731 8.02072L4.7318 7.88821L1.65187 5.46094L1.5511 5.50958C0.883227 6.86515 0.5 8.3874 0.5 9.99851C0.5 11.6096 0.883227 13.1318 1.5511 14.4874L4.74826 11.9763Z"
                fill="#FBBC05"
              />
              <path
                d="M10.3545 3.86664C12.2049 3.86664 13.453 4.67775 14.1648 5.35557L16.9459 2.6C15.2378 0.988893 13.0151 0 10.3545 0C6.50031 0 3.17174 2.24443 1.55127 5.51107L4.73748 8.02221C5.53685 5.6111 7.74857 3.86664 10.3545 3.86664Z"
                fill="#EB4335"
              />
            </svg>
            Google ilə daxil olun
          </div>
          <p className="mt-[50px] text-base text-[#000000] font-normal ">
            Artıq hesabınız var?
            <span className="text-[#0D9CD8] underline">Daxil olun</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
