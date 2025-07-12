import SteppetCard from "../StepperCard/SteppetCard";

const Stepper2 = () => {
  return (
    <>
      <div className="mt-[51px] flex items-center  justify-between gap-[37px]">
        <div className="flex items-center justify-between border border-[#E5E5EA] rounded-2xl h-[54px] w-[500px] pl-4 pr-1">
          <input
            type="text"
            placeholder="Axtarın "
            className="outline-none border-none w-full"
          />
          <div className="bg-[#0D9CD8] h-[42px] w-[42px] rounded-xl flex items-center justify-center cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.0004 21.0004L16.6504 16.6504"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          Şəhər və rayon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#2C2C2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[88px] max-w-[1224px] mx-auto px-2 mt-[90px]">
        {[...Array(9)].map((_, index) => (
          <SteppetCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Stepper2;
