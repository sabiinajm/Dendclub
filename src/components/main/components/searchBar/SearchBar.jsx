import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <>
      <div className="py-[32px] flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Axtarın "
            value={value}
            onChange={e => onChange(e.target.value)}
            className="w-[260px] sm:w-[450px] md:min-w-[713px] outline-none bg-white py-[15px] rounded-[16px] pl-4 placeholder:text-[#636366]"
          />
          <div className="absolute bottom-[6px] flex justify-center cursor-pointer items-center right-[7px] h-[42px] w-[42px] rounded-full bg-[#0D9CD8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.0004 20.9999L16.6504 16.6499"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
