import SearchBar from "./components/searchBar/SearchBar"
import { useState, useMemo } from "react";
import HospitalCard from "./HospitalCard";

const fakeClinics = [...Array(20)].map((_, i) => ({
    id: i,
    name: `${["İstanbul NS Klinika", "Euromed Hospital", "Baku Medical Plaza", "Lor Hospital", "Saglam Aile"][i % 5]}`,
}));

function Hospitals() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredClinics = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) return fakeClinics;

        const startsWith = str =>
            str
                .toLowerCase()
                .split(/\s+/)
                .some(word => word.startsWith(q));

        return fakeClinics.filter(
            hos => startsWith(hos.name)
        );
    }, [searchTerm]);

    return (
        <main className="bg-[#f2f5f8] pt-[24px]">
            <div className="max-w-[1224px] mx-auto px-2">
                <h1 className="pt-[34px] pb-[30px] text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-center">Ən Müasir Klinikalarımız!</h1>
                <div className="flex justify-between flex-wrap gap-4 items-center md:justify-between">
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />
                    <div className="flex gap-3">
                        <div className="relative w-[136px]">
                            <select className="w-full pl-[20px]  h-[48px] rounded-[12px] bg-white outline-none appearance-none pr-10">
                                <option value="">Sahələr</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
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

                        <div className="relative w-[209px]">
                            <select className="w-full h-[48px] pl-[20px] rounded-[12px] bg-white outline-none appearance-none pr-10">
                                <option value="">Şəhər və rayon</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
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

                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pt-[65px] justify-center">
                    {filteredClinics.map((hos, idx) => (
                        <HospitalCard key={hos.id} hospital={hos} idx={idx} />
                    ))}
                    {filteredClinics.length === 0 && (
                        <p className="col-span-full text-gray-500 text-center">
                            Heç bir nəticə tapılmadı.
                        </p>
                    )}
                </div>
                <p className="text-[#2C2C2E] text-2xl font-medium text-center py-[80px] min-h-[350px]">Daha çox</p>
            </div>
        </main>
    )
}
export default Hospitals