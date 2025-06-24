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
        <div className="flex flex-col gap-[6px]" >
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
            style={{
              width: "100px",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>
      <div>
        <label>Kart Nömrəsi</label>
        <input
          type="text"
          maxLength={19} // 16 rəqəm + 3 boşluq
          value={cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
          inputMode="numeric" // Mobil cihazlarda rəqəm klaviaturası açılır
        />
      </div>
    </div>
  );
};

export default MakePayment;
