const stepHeader = [
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
const stepHeader2 = [
  {
    title: "Görüş zamanını seçin",
  },
  {
    title: "Ödənişi edin",
    latest: "Son",
  },
];
const StepperHeader = ({ count, varinat, count2 }) => {
  console.log(count2);

  return (
    <>
      {varinat === 1 ? (
        <div className="flex items-center  mb-[111px] ">
          {stepHeader.map((step, index) => (
            <div key={index} className="flex items-center  justify-center">
              <div className="flex items-center justify-center flex-col w-[203px] gap-[18px] h-[76px] ">
                <div
                  className={`w-[40px] h-[40px] rounded-full border flex items-center justify-center  text-sm text-[#AEAEB2] ${count === index
                    ? "border-[#30D158] "
                    : count > index
                      ? " bg-[#30D158]"
                      : "border-[#AEAEB2] "
                    }`}
                >
                  <p
                    className={`w-4 h-4  flex items-center rounded-full justify-center ${count === index
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
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </p>
                </div>
                <p className="text-[#2C2C2E] text-sm font-medium ">
                  {step.title}
                </p>
              </div>
              {step.line && index < stepHeader.length - 1 && (
                <div
                  className={`w-[56px] h-[2px] bg-[#AEAEB2] ${count > index ? "bg-[#30D158]" : "bg-[#AEAEB2]"
                    }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-[291px] mb-[74px]">
          {stepHeader2.map((stephead, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div
                className={`w-[40px] h-[40px] rounded-full border  flex items-center justify-center ${count2 === i + 1
                  ? "border-[#30D158] "
                  : count2 > i + 1
                    ? " bg-[#30D158]"
                    : "border-[#AEAEB2] "
                  }`}
              >
                {stephead.latest ? (
                  <span
                    className={`text-[#AEAEB2] text-sm  ${count2 === i + 1
                      ? "bg-[#30D158] w-4 h-4 rounded-full "
                      : count2 > i + 1
                        ? " bg-[#30D158]"
                        : "border-[#AEAEB2] "
                      } `}
                  >
                    {count2 === i + 1 ? null : stephead.latest}
                  </span>
                ) : (
                  <span
                    className={`w-4 h-4 rounded-full bg-[#30D158]  ${count2 === i + 1
                      ? "border-[#30D158] "
                      : count2 > i + 1
                        ? " bg-[#30D158]"
                        : "border-[#AEAEB2] "
                      }`}
                  >
                    {count2 > i + 1 && (
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
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>
              <p>{stephead.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StepperHeader;
