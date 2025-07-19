import React, { useState } from "react";

const ClinicForm =  ({ onChange }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: "",
        email: "",
        type: "Clinic"
    });

   const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value };
    setFormData(updated);
    onChange(updated);
  };

    return (
        <form className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col gap-2">
                <label className="text-sm text-[#2C2C2E] font-normal">Klinika/Aptek adı</label>
                <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
                    <input
                        name="name"
                        type="text"
                        placeholder="Klinika/Aptek"
                        className="outline-none text-sm w-full"
                        value={formData.name}
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
                <label className="text-sm text-[#2C2C2E] font-normal">Email</label>
                <div className="w-[303px] border border-[#D1D1D6] rounded-xl h-12 px-4 flex items-center">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email adresinizi daxil edin"
                        className="outline-none text-sm w-full"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </form>
    );
};

export default ClinicForm;
