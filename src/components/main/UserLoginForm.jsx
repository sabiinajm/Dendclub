import React from "react";

const UserLoginForm = () => {
  return (
    <div className="w-[528px]">
      {" "}
      <div className="flex flex-col mb-[30px] gap-2">
        <label className="text-sm text-[#2C2C2E] font-normal ">
          Telefon nömrəsi{" "}
        </label>
        <div className="w-full border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
          <input
            type="text"
            placeholder="Adınızı daxil edin"
            className="outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col mb-[21px] gap-2 ">
        <label className="text-sm text-[#2C2C2E] font-normal ">Şifrə </label>
        <div className="w-full border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
          <input
            type="password"
            placeholder="Parolu daxil edin"
            className="outline-none text-sm w-full"
          />
          <svg
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.275 15.296C2.425 14.192 2 13.639 2 12C2 10.36 2.425 9.809 3.275 8.704C4.972 6.5 7.818 4 12 4C16.182 4 19.028 6.5 20.725 8.704C21.575 9.81 22 10.361 22 12C22 13.64 21.575 14.191 20.725 15.296C19.028 17.5 16.182 20 12 20C7.818 20 4.972 17.5 3.275 15.296Z"
              stroke="#636366"
              stroke-width="1.5"
            />
            <path
              d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
              stroke="#636366"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
        <p className="text-sm font-normal text-[#000000] flex justify-end">
          Şifrəni unutmusunuz? <span className="underline">Bərpa edin</span>
        </p>
    </div>
  );
};

export default UserLoginForm;
