import { useState } from "react";

const formatExpiryDate = (value) => {
  const digits = value.replace(/\D/g, "");

  // 2) Heç nə yoxdursa, boş qaytar
  if (digits.length === 0) return "";

  // 3) Ay daxil olunur (1–2 rəqəm)
  if (digits.length <= 2) return digits;

  // 4) Ay + "/" + İl (maks. 4 rəqəm)
  return digits.slice(0, 2) + "/" + digits.slice(2, 6);
};
const formatCardNumber = (value) => {
  const onlyNums = value.replace(/\D/g, "");
  return onlyNums.replace(/(.{4})/g, "$1 ").trim();
};
const MakePayment = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const [expiry, setExpiry] = useState("");

  const handleChange2 = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiry(formatted);
  };
  return (
    <div className="mt-[54px]">
      <p className="text-2xl font-medium text-[#2C2C2E] mb-[19px]">
        Ödəniş detalları
      </p>
      <div className="flex  gap-4 items-center ">
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="" className="text-sm text-[#2C2C2E] font-medium ">
            Kart Sahibi
          </label>
          <input
            type="text"
            className="w-[304px] border border-[#D1D1D6] py-[10px] px-[14px] rounded-xl outline-none "
            placeholder="Adınızı yazın"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="" className="text-sm text-[#2C2C2E] font-medium ">
            İstifadə müddəti
          </label>
          <input
            className="w-[112px] border border-[#D1D1D6] py-[10px] px-[14px] rounded-xl outline-none "
            type="text"
            placeholder="MM/YYYY"
            value={expiry}
            onChange={handleChange2}
            maxLength={7}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="flex  gap-4 items-center mt-5">
        <div className="flex flex-col gap-[6px] ">
          <label>Kart Nömrəsi</label>
          <div className="w-[304px] border border-[#D1D1D6] flex items-center gap-2 rounded-xl py-[10px] px-[14px]">
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="33"
                height="23"
                rx="3.5"
                stroke="#F5F5F5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.179 16.8288C15.9949 17.8268 14.459 18.4293 12.7807 18.4293C9.03582 18.4293 6 15.4296 6 11.7293C6 8.02899 9.03582 5.0293 12.7807 5.0293C14.459 5.0293 15.9949 5.63179 17.179 6.62984C18.363 5.63179 19.8989 5.0293 21.5773 5.0293C25.3221 5.0293 28.358 8.02899 28.358 11.7293C28.358 15.4296 25.3221 18.4293 21.5773 18.4293C19.8989 18.4293 18.363 17.8268 17.179 16.8288Z"
                fill="#ED0006"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.179 16.8288C18.6369 15.5999 19.5614 13.7713 19.5614 11.7293C19.5614 9.68734 18.6369 7.85874 17.179 6.62984C18.363 5.63179 19.8989 5.0293 21.5772 5.0293C25.3221 5.0293 28.3579 8.02899 28.3579 11.7293C28.3579 15.4296 25.3221 18.4293 21.5772 18.4293C19.8989 18.4293 18.363 17.8268 17.179 16.8288Z"
                fill="#F9A000"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.179 16.8278C18.6369 15.5989 19.5614 13.7703 19.5614 11.7283C19.5614 9.6864 18.6369 7.85781 17.179 6.62891C15.7211 7.85781 14.7966 9.6864 14.7966 11.7283C14.7966 13.7703 15.7211 15.5989 17.179 16.8278Z"
                fill="#FF5E00"
              />
            </svg>
            <input
              className=" w-full  outline-none "
              type="text"
              maxLength={19} // 16 rəqəm + 3 boşluq
              value={cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              inputMode="numeric" // Mobil cihazlarda rəqəm klaviaturası açılır
            />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="" className="text-sm text-[#2C2C2E] font-medium ">
            CVV
          </label>
          <input
            className="w-[112px] border border-[#D1D1D6] py-[10px] px-[14px] rounded-xl outline-none  "
            type="password"
            placeholder="***"
            maxLength={3}
            inputMode="numeric"
          />
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
