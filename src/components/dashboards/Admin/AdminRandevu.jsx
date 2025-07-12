import Table from "../components/Table"

const customTimeSlots = [
    { start: "07:30", end: "08:00" },
    { start: "08:30", end: "9:00" },
    { start: "9:30", end: "10:00" },
    { start: "10:30", end: "11:00" },
    { start: "11:30", end: "12:00" },
    { start: "12:30", end: "13:00" },
    { start: "13:30", end: "14:00" },
    { start: "14:30", end: "15:00" },
    { start: "15:30", end: "16:00" },
    { start: "16:30", end: "17:00" },
];
function AdminRandevu() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px]">
            <h1 className="py-5">Randevu Siyahısı</h1>
            <Table />
            <div className="pt-[32px]">
                <div className="flex justify-between items-center pb-[41px] flex-wrap gap-4">
                    <div className="flex gap-4">
                        <div className="px-3 py-2 border border-[#DCDFE3] rounded-[4px] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.1357 14.1656C10.9174 14.1656 10.6999 14.0806 10.5365 13.9114L7.31735 10.5781C7.00235 10.2506 7.00652 9.73141 7.32818 9.40974L10.6615 6.07641C10.9865 5.75057 11.514 5.75057 11.8399 6.07641C12.1649 6.40224 12.1649 6.92891 11.8399 7.25474L9.08568 10.0089L11.7349 12.7531C12.0549 13.0847 12.0457 13.6122 11.7149 13.9314C11.5524 14.0881 11.344 14.1656 11.1357 14.1656Z" fill="#666E7D" />
                            </svg>
                        </div>
                        <h2 className="font-semibold text-[#3B3E45] flex items-center">May 27, 2024
                            <span className="font-normal flex items-center text-[#666E7D] px-1"> Bugün <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99988 12.9182C9.78655 12.9182 9.57322 12.8365 9.41072 12.674L6.07738 9.34068C5.75155 9.01484 5.75155 8.48818 6.07738 8.16234C6.40322 7.83651 6.92988 7.83651 7.25572 8.16234L10.0099 10.9165L12.754 8.26651C13.0865 7.94734 13.6124 7.95651 13.9324 8.28734C14.2524 8.61818 14.2432 9.14651 13.9124 9.46568L10.579 12.684C10.4165 12.8407 10.2082 12.9182 9.99988 12.9182Z" fill="#666E7D" /></svg>
                            </span>
                        </h2>
                        <div className="px-3 py-2 border border-[#DCDFE3] rounded-[4px] flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.74956 14.1648C8.53622 14.1648 8.32289 14.0831 8.16039 13.9206C7.83456 13.5948 7.83456 13.0681 8.16039 12.7423L10.9146 9.98809L8.26456 7.24392C7.94539 6.91226 7.95456 6.38476 8.28539 6.06559C8.61706 5.74642 9.14456 5.75559 9.46372 6.08559L12.6821 9.41892C12.9979 9.74642 12.9937 10.2656 12.6721 10.5873L9.33872 13.9206C9.17622 14.0831 8.96289 14.1648 8.74956 14.1648Z" fill="#666E7D" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex">
                            <div className="px-3 py-2 bg-white rounded-s-[4px] border-y border-s border-[#DCDFE3]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.83333 13.3346C5.83333 12.8763 6.20833 12.5013 6.66667 12.5013C7.125 12.5013 7.5 12.8763 7.5 13.3346C7.5 13.793 7.125 14.168 6.66667 14.168C6.20833 14.168 5.83333 13.793 5.83333 13.3346ZM10 12.5013H13.3333C13.7917 12.5013 14.1667 12.8763 14.1667 13.3346C14.1667 13.793 13.7917 14.168 13.3333 14.168H10C9.54167 14.168 9.16667 13.793 9.16667 13.3346C9.16667 12.8763 9.54167 12.5013 10 12.5013ZM15 16.668H5C4.54083 16.668 4.16667 16.2938 4.16667 15.8346V10.8346H15.8333V15.8346C15.8333 16.2938 15.4592 16.668 15 16.668ZM5 5.0013H5.83333V5.83464C5.83333 6.29297 6.20833 6.66797 6.66667 6.66797C7.125 6.66797 7.5 6.29297 7.5 5.83464V5.0013H12.5V5.83464C12.5 6.29297 12.875 6.66797 13.3333 6.66797C13.7917 6.66797 14.1667 6.29297 14.1667 5.83464V5.0013H15C15.4592 5.0013 15.8333 5.37547 15.8333 5.83464V9.16797H4.16667V5.83464C4.16667 5.37547 4.54083 5.0013 5 5.0013ZM15 3.33464H14.1667V2.5013C14.1667 2.04297 13.7917 1.66797 13.3333 1.66797C12.875 1.66797 12.5 2.04297 12.5 2.5013V3.33464H7.5V2.5013C7.5 2.04297 7.125 1.66797 6.66667 1.66797C6.20833 1.66797 5.83333 2.04297 5.83333 2.5013V3.33464H5C3.62167 3.33464 2.5 4.4563 2.5 5.83464V15.8346C2.5 17.213 3.62167 18.3346 5 18.3346H15C16.3783 18.3346 17.5 17.213 17.5 15.8346V5.83464C17.5 4.4563 16.3783 3.33464 15 3.33464Z" fill="#666E7D" />
                                </svg>
                            </div>
                            <div className="px-3 py-2 bg-[#F3F4F6] rounded-e-[4px] border-e border-y border-[#DCDFE3]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5.83333C2.5 5.37333 2.87333 5 3.33333 5C3.79333 5 4.16667 5.37333 4.16667 5.83333C4.16667 6.29333 3.79333 6.66667 3.33333 6.66667C2.87333 6.66667 2.5 6.29333 2.5 5.83333ZM2.5 10C2.5 9.54 2.87333 9.16667 3.33333 9.16667C3.79333 9.16667 4.16667 9.54 4.16667 10C4.16667 10.46 3.79333 10.8333 3.33333 10.8333C2.87333 10.8333 2.5 10.46 2.5 10ZM3.33333 13.3333C2.87333 13.3333 2.5 13.7067 2.5 14.1667C2.5 14.6267 2.87333 15 3.33333 15C3.79333 15 4.16667 14.6267 4.16667 14.1667C4.16667 13.7067 3.79333 13.3333 3.33333 13.3333ZM6.61292 9.16667H16.7204C17.1496 9.16667 17.5004 9.5175 17.5004 9.94667V10.0533C17.5004 10.4825 17.1496 10.8333 16.7204 10.8333H6.61292C6.18375 10.8333 5.83375 10.4825 5.83375 10.0533V9.94667C5.83375 9.5175 6.18375 9.16667 6.61292 9.16667ZM16.7204 13.3333H6.61292C6.18375 13.3333 5.83375 13.6842 5.83375 14.1133V14.22C5.83375 14.6492 6.18375 15 6.61292 15H16.7204C17.1496 15 17.5004 14.6492 17.5004 14.22V14.1133C17.5004 13.6842 17.1496 13.3333 16.7204 13.3333ZM6.61292 5H16.7204C17.1496 5 17.5004 5.35083 17.5004 5.78V5.88667C17.5004 6.31583 17.1496 6.66667 16.7204 6.66667H6.61292C6.18375 6.66667 5.83375 6.31583 5.83375 5.88667V5.78C5.83375 5.35083 6.18375 5 6.61292 5Z" fill="#666E7D" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="px-3 py-2 bg-white rounded-s-[4px] border-y border-s border-[#DCDFE3]">
                                <p className="font-normal text-sm">Gün</p>
                            </div>
                            <div className="px-3 py-2 bg-[#F3F4F6] rounded-e-[4px] border-e border-y border-[#DCDFE3]">
                                <p className="font-normal text-sm">Ay</p>
                            </div>
                        </div>
                        <div className="px-3 py-2 bg-[#F3F4F6] rounded-[4px] border border-[#DCDFE3]">
                            <p className="font-normal text-sm flex items-center">Sahə<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99988 12.9182C9.78655 12.9182 9.57322 12.8365 9.41072 12.674L6.07738 9.34068C5.75155 9.01484 5.75155 8.48818 6.07738 8.16234C6.40322 7.83651 6.92988 7.83651 7.25572 8.16234L10.0099 10.9165L12.754 8.26651C13.0865 7.94734 13.6124 7.95651 13.9324 8.28734C14.2524 8.61818 14.2432 9.14651 13.9124 9.46568L10.579 12.684C10.4165 12.8407 10.2082 12.9182 9.99988 12.9182Z" fill="#666E7D" />
                            </svg></p>
                        </div>
                    </div>
                </div>
                {/* Calender */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-sm text-left text-gray-800">
                        <thead className="bg-white">
                            <tr>
                                <th className="border px-4 py-2 w-[40px] text-[#AEAEB2] font-normal">Dc</th>
                                <th className="py-2 px-3">
                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="16" fill="#DCDFE3" />
                                            <path d="M4.07324 26.6653C6.53791 22.6659 10.9578 20 16.0004 20C21.043 20 25.4629 22.6659 27.9275 26.6653C24.9978 29.9394 20.7397 32 16.0004 32C11.2611 32 7.00299 29.9394 4.07324 26.6653Z" fill="#F3F4F6" />
                                            <path d="M16.0004 18C19.8664 18 23.0004 14.866 23.0004 11C23.0004 7.13401 19.8664 4 16.0004 4C12.1344 4 9.00039 7.13401 9.00039 11C9.00039 14.866 12.1344 18 16.0004 18Z" fill="#F3F4F6" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold text-sm">Leyla Aliyeva</h2>
                                            <p className="text-xs font-normal text-[#666E7D]">Nevroloq, Medera </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="py-2 px-3">
                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="16" fill="#DCDFE3" />
                                            <path d="M4.07324 26.6653C6.53791 22.6659 10.9578 20 16.0004 20C21.043 20 25.4629 22.6659 27.9275 26.6653C24.9978 29.9394 20.7397 32 16.0004 32C11.2611 32 7.00299 29.9394 4.07324 26.6653Z" fill="#F3F4F6" />
                                            <path d="M16.0004 18C19.8664 18 23.0004 14.866 23.0004 11C23.0004 7.13401 19.8664 4 16.0004 4C12.1344 4 9.00039 7.13401 9.00039 11C9.00039 14.866 12.1344 18 16.0004 18Z" fill="#F3F4F6" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold text-sm">Leyla Aliyeva</h2>
                                            <p className="text-xs font-normal text-[#666E7D]">Nevroloq, Medera </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="py-2 px-3">
                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="16" fill="#DCDFE3" />
                                            <path d="M4.07324 26.6653C6.53791 22.6659 10.9578 20 16.0004 20C21.043 20 25.4629 22.6659 27.9275 26.6653C24.9978 29.9394 20.7397 32 16.0004 32C11.2611 32 7.00299 29.9394 4.07324 26.6653Z" fill="#F3F4F6" />
                                            <path d="M16.0004 18C19.8664 18 23.0004 14.866 23.0004 11C23.0004 7.13401 19.8664 4 16.0004 4C12.1344 4 9.00039 7.13401 9.00039 11C9.00039 14.866 12.1344 18 16.0004 18Z" fill="#F3F4F6" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold text-sm">Leyla Aliyeva</h2>
                                            <p className="text-xs font-normal text-[#666E7D]">Nevroloq, Medera </p>
                                        </div>
                                    </div>
                                </th>
                                <th className="py-2 px-3">
                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="16" r="16" fill="#DCDFE3" />
                                            <path d="M4.07324 26.6653C6.53791 22.6659 10.9578 20 16.0004 20C21.043 20 25.4629 22.6659 27.9275 26.6653C24.9978 29.9394 20.7397 32 16.0004 32C11.2611 32 7.00299 29.9394 4.07324 26.6653Z" fill="#F3F4F6" />
                                            <path d="M16.0004 18C19.8664 18 23.0004 14.866 23.0004 11C23.0004 7.13401 19.8664 4 16.0004 4C12.1344 4 9.00039 7.13401 9.00039 11C9.00039 14.866 12.1344 18 16.0004 18Z" fill="#F3F4F6" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <h2 className="font-semibold text-sm">Leyla Aliyeva</h2>
                                            <p className="text-xs font-normal text-[#666E7D]">Nevroloq, Medera </p>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {customTimeSlots.map((slot, index) => (
                                <tr key={index} className=" hover:bg-gray-50">
                                    <td className="border bg-white px-4 w-[40px] py-2 font-normal text-gray-700 ">
                                        <p>{slot.start}</p> <br />
                                        <p>{slot.end}</p>
                                    </td>
                                    <td className="border border-[#AEAEB2] bg-[#E9E6E6]"></td>
                                    <td className="border border-[#AEAEB2] bg-[#E9E6E6]"></td>
                                    <td className="border border-[#AEAEB2] bg-[#E9E6E6]"></td>
                                    <td className="border border-[#AEAEB2] bg-[#E9E6E6]"></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default AdminRandevu