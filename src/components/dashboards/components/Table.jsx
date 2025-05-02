import { useEffect, useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Table() {
    const location = useLocation();

    const hekimTable = ["Xəstə", "Cins", "Görüş növü", "Xəstəlik"];
    const aptekTable = ["Müştəri", "Dərman adı", "Miqdarı", "Məbləğ", "Status"];

    const hekimData = [
        { id: 1, name: "Adil Əliyev", gender: "Kişi", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-03-05" },
        { id: 2, name: "Leyla Həsənli", gender: "Qadın", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-02-20" },
        { id: 3, name: "Dilarə Babayeva", gender: "Qadın", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-03-08" },
        { id: 4, name: "Davud Əliyev", gender: "Kişi", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-01-15" },
    ];

    const aptekData = [
        { id: 1, customer: "Adil Əliyev", medicineName: "Alora 100 ml", quantity: "01", cost: "20 AZN", status: "Gözləyir", date: "2024-03-01" },
        { id: 2, customer: "Leyla Həsənli", medicineName: "Alora 100 ml", quantity: "02", cost: "20 AZN", status: "Tamamlanıb", date: "2024-02-15" },
        { id: 3, customer: "Jalə Heydərli", medicineName: "Alora 100 ml", quantity: "01", cost: "20 AZN", status: "Ləğv edilib", date: "2024-01-28" },
    ];

    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        const decodedPath = decodeURIComponent(location.pathname); 
    
        if (decodedPath.includes("/Həkim-Dashboard")) {
            setData(hekimData);
        } else if (decodedPath.includes("/Aptek-Dashboard")) {
            setData(aptekData);
        } else {
            setData([]);
        }
    }, [location.pathname]);
    
    

    const handleSort = () => {
        const sorted = [...data].sort((a, b) =>
            sortOrder === "asc"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
        );
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setData(sorted);
    };

    const renderHeaders = () => {
        const decodedPath = decodeURIComponent(location.pathname); 
        if (decodedPath.includes("/Həkim-Dashboard")) {
            return hekimTable.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left border font-medium">{header}</th>
            ));
        } else if (decodedPath.includes("/Aptek-Dashboard")) {
            return aptekTable.map((header, index) => (
                <th key={index} className="px-4 py-2 text-left border font-medium">{header}</th>
            ));
        }
    };
    
    

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white">
                <thead>
                    <tr>
                        {renderHeaders()}
                        <td className="px-4 py-2 text-left cursor-pointer font-medium" onClick={handleSort}>
                            <div className="flex items-center gap-2">
                                Tarix
                                {sortOrder === "asc" ? <FaSortUp className="text-[#0D9CD8]" /> : <FaSortDown className="text-[#0D9CD8]" />}
                            </div>
                        </td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border text-[.9rem]">
                            <td className="px-4 py-2 border">{item.name || item.customer}</td>
                            <td className="px-4 py-2 border">{item.gender || item.medicineName}</td>
                            <td className="px-4 py-2 border">{item.type || item.quantity}</td>
                            <td className="px-4 py-2 border">{item.disease || item.cost}</td>
                            {location.pathname.includes("/Aptek-Dashboard") && (
                                <td className="px-4 py-2">{item.status}</td>
                            )}
                            <td className="px-4 py-2">{item.date}</td>
                            <td className="px-4 flex justify-end border-none items-center h-[60px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#2C2C2E" strokeWidth="2" />
                                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#2C2C2E" strokeWidth="2" />
                                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#2C2C2E" strokeWidth="2" />
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
