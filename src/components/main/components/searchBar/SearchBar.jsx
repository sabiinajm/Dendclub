import React from "react";

function SearchBar() {
  return (
    <>
      <div className="py-[32px] flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Axtarın "
            className="w-[250px] md:min-w-[713px] bg-white py-[15px] rounded-[16px] pl-4 placeholder:text-[#636366]"
          />
          <div className="absolute bottom-[6px] flex justify-center items-center right-[7px] h-[42px] w-[42px] rounded-full bg-[#0D9CD8]">
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

export default SearchBar;



// import React, { useState } from "react";

// function SearchBar() {
//   const [searchValue, setSearchValue] = useState("");

//   const data = [
//     "Istanbul Klinika NS",
//     "Baku Medical Center",
//     "Ankara Clinic",
//     "London Health Care",
//     "Paris Medical Group",
//     "Berlin Klinik",
//   ];

//   const handleChange = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const filteredData = data.filter((item) =>
//     item.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <div className="py-[32px] flex flex-col items-center justify-center">
//       <div className="relative mb-6">
//         <input
//           type="text"
//           placeholder="Axtarın"
//           value={searchValue}
//           onChange={handleChange}
//           className="w-[250px] md:min-w-[713px] bg-white py-[15px] rounded-[16px] pl-4 placeholder:text-[#636366]"
//         />
//         <div className="absolute bottom-[6px] flex justify-center items-center right-[7px] h-[42px] w-[42px] rounded-full bg-[#0D9CD8]">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M21.0004 20.9999L16.6504 16.6499"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>

//       <div className="w-full max-w-[713px]">
//         {filteredData.length > 0 ? (
//           filteredData.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow p-4 mb-2 text-[#333]"
//             >
//               {item}
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-500">Heç nə tapılmadı.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;
