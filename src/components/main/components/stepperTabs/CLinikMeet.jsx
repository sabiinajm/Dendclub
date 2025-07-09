import { useState } from "react";

const CLinikMeet = () => {
  const [active, setActive] = useState({
    stepone: false,
    steptwo: false,
  });
  function handleActiveTab(step) {
    if (step === 1) {
      setActive({
        stepone: true,
        steptwo: false,
      });
    } else if (step === 2) {
      setActive({
        stepone: false,
        steptwo: true,
      });
    }
  }

  return (
    <div>
      <div
        onClick={() => handleActiveTab(1)}
        className={`flex items-center gap-2 border px-4 py-[15px]  rounded-xl text-xs cursor-pointer mb-4 ${
          active.stepone && "border-[#0D9CD8] bg-[#E1F4FD]"
        } `}
      >
        {active.stepone ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="18" height="18" rx="9" fill="#0D9CD8" />
            <g clip-path="url(#clip0_1770_7104)">
              <path
                d="M6 10.8488L8.99941 13.5L15 7.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1770_7104">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="18" height="18" rx="9" fill="#AEAEB2" />
            <g clip-path="url(#clip0_1770_7117)">
              <rect x="3" y="3" width="14" height="14" rx="7" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1770_7117">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        <p>Medical Plaza - Nizami küçəsi, 23 məh.</p>
      </div>
      <div
        onClick={() => handleActiveTab(2)}
        className={`flex items-center gap-2 border px-4 py-[15px]  rounded-xl text-xs cursor-pointer ${
          active.steptwo && "border-[#0D9CD8] bg-[#E1F4FD]"
        } `}
      >
       {active.steptwo ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="18" height="18" rx="9" fill="#0D9CD8" />
            <g clip-path="url(#clip0_1770_7104)">
              <path
                d="M6 10.8488L8.99941 13.5L15 7.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1770_7104">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="18" height="18" rx="9" fill="#AEAEB2" />
            <g clip-path="url(#clip0_1770_7117)">
              <rect x="3" y="3" width="14" height="14" rx="7" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1770_7117">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
        <p>İstanbul NS Klinika - Nizami küçəsi, 23 məh.</p>
      </div>
    </div>
  );
};

export default CLinikMeet;
