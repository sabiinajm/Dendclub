import React, { useState, useRef, useEffect } from "react";

const genderOptions = ["Kişi", "Qadın"];

const UserForm = ({ onChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    birthDate: "",
    phone: "",
    gender: "",
  });


  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    onChange(updated);
  };


  const [genderOpen, setGenderOpen] = useState(false);
  const genderRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genderRef.current && !genderRef.current.contains(event.target)) {
        setGenderOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectGender = (gender) => {
    setFormData((prev) => ({ ...prev, gender }));
    setGenderOpen(false);
     onChange(updated);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="flex flex-col gap-2 ">
        <label className="text-sm text-[#2C2C2E] font-normal">Ad</label>
        <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
          <input
            name="firstName"
            type="text"
            placeholder="Adınızı daxil edin"
            className="outline-none text-sm w-full"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <label className="text-sm text-[#2C2C2E] font-normal">Soyad</label>
        <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
          <input
            name="lastName"
            type="text"
            placeholder="Soyadınızı daxil edin"
            className="outline-none text-sm w-full"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <label className="text-sm text-[#2C2C2E] font-normal">Şifrə</label>
        <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center justify-between">
          <input
            name="password"
            type="password"
            placeholder="Parolu daxil edin"
            className="outline-none text-sm w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <label className="text-sm text-[#2C2C2E] font-normal">Doğum tarixi</label>
        <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
          <input
            name="birthDate"
            type="date"
            className="outline-none text-sm w-full"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <label className="text-sm text-[#2C2C2E] font-normal">Telefon nömrəsi</label>
        <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
          <input
            name="phone"
            type="tel"
            placeholder="Mobil nömrənizi daxil edin"
            className="outline-none text-sm w-full"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2" ref={genderRef}>
        <label className="text-sm text-[#2C2C2E] font-normal">Cinsiyyət</label>
        <div
          className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center justify-between cursor-pointer relative"
          onClick={() => setGenderOpen((open) => !open)}
        >
          <input
            type="text"
            placeholder="Cinsiyyətinizi seçin"
            className="outline-none text-sm cursor-pointer w-full"
            readOnly
            value={formData.gender}
            required
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${genderOpen ? "rotate-180" : "rotate-0"} transition-transform`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#636366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {genderOpen && (
            <ul className="absolute top-full left-0 w-full bg-white border border-[#D1D1D6] rounded-b-xl z-10">
              {genderOptions.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-[#0D9CD8] hover:text-white cursor-pointer"
                  onClick={() => selectGender(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserForm