const stepgeader = [
  {
    title: "Sahəni seç",
    line: true,
  },
  {
    title: "Həkimi seç",
    line: true,
  },
  {
    title: "Klinikanı seç",
    line: true,
  },
  {
    title: "Qeyd",
    line: false,
  },
];
const StepperHeader = ({ count }) => {
  return (
    <div className="flex items-center mt-[51px] mb-[111px] ">
      {stepgeader.map((step, index) => (
        <div key={index} className="flex items-center  justify-center">
          <div className="flex items-center justify-center flex-col w-[203px] gap-[18px] h-[76px] ">
            <div
              className={`w-[40px] h-[40px] rounded-full border flex items-center justify-center  text-sm text-[#AEAEB2] ${
                count === index
                  ? "border-[#30D158] "
                  : count > index
                  ? " bg-[#30D158]"
                  : "border-[#AEAEB2] "
              }`}
            >
              <p
                className={`w-4 h-4  flex items-center rounded-full justify-center ${
                  count === index
                    ? "bg-[#30D158] text-[#30D158]"
                    : "text-[#AEAEB2]"
                }`}
              >
                {count === index ? (
                  ""
                ) : count > index ? (
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.875 6L5.875 11L15.875 1"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </p>
            </div>
            <p className="text-[#2C2C2E] text-sm font-medium ">{step.title}</p>
          </div>
          {step.line && index < stepgeader.length - 1 && (
            <div
              className={`w-[56px] h-[2px] bg-[#AEAEB2] ${
                count > index ? "bg-[#30D158]" : "bg-[#AEAEB2]"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepperHeader;
