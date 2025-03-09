import { useState } from "react"
import { FaSortUp, FaSortDown } from "react-icons/fa";

function Table() {
    const initialData = [
        { id: 1, name: "Adil Əliyev", gender: "Kişi", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-03-05" },
        { id: 2, name: "Leyla Həsənli", gender: "Qadın", type: "Klinikada görüş", disease: "Obsessiv-Kompulsiv Pozuntu", date: "2024-02-20" },
        { id: 3, name: "Dilarə Babayeva", gender: "Qadın", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-03-08" },
        { id: 4, name: "Davud Əliyev", gender: "Kişi", type: "Video görüş", disease: "Bipolyar Pozuntu", date: "2024-01-15" },
    ]
    const [data, setData] = useState(initialData)
    const [sortOrder, setSortOrder] = useState(null)

    const handleSort = () => {
        let sortedData
        if (sortOrder === "asc") {
            sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date))
            setSortOrder("desc")
        } else {
            sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date))
            setSortOrder("asc")
        }
        setData(sortedData)
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white">
                <thead>
                    <tr>
                        <td className="px-4 py-2 text-left border font-medium">Xəstə</td>
                        <td className="px-4 py-2 text-left border font-medium">Cins</td>
                        <td className="px-4 py-2 text-left border font-medium">Görüş növü</td>
                        <td className="px-4 py-2 text-left border font-medium">Xəstəlik</td>
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
                            <td className="px-4 py-2 border">{item.name}</td>
                            <td className="px-4 py-2 border">{item.gender}</td>
                            <td className="px-4 py-2 border">{item.type}</td>
                            <td className="px-4 py-2 border">{item.disease}</td>
                            <td className="px-4 py-2">{item.date}</td>
                            <td className="px-4 flex justify-end border-none items-center h-[60px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#2C2C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#2C2C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#2C2C2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table