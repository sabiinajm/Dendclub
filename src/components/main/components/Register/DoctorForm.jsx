import React, { useState } from "react";

const DoctorForm = ({ onChange }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        birthDate: "",
        phone: "",
        specialty: "",
        type: "Doctor",
    });

   const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    onChange(updated);
  };


    return (
        <form  className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col gap-2">
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

            <div className="flex flex-col gap-2">
                <label className="text-sm text-[#2C2C2E] font-normal">Sahə</label>
                <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
                    <input
                        name="specialty"
                        type="text"
                        placeholder="İşlədiyiniz sahəni daxil edin"
                        className="outline-none text-sm w-full"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </form>
    );
};

export default DoctorForm;
