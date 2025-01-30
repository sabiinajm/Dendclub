import { Pagination } from "antd"
import BlogCard from "./BlogCard"

function Blogs() {
    return (
        <main className="bg-[#f2f5f8] pt-[24px]">
            <div className="max-w-[1224px] mx-auto px-2">
                <h1 className="pt-[7rem] text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-start">Həkimlərdən məsləhətlər!</h1>
                <div className="min-h-[245px] flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative">
                            <input type="text" placeholder="Axtarın " className="w-[250px] md:w-[500px] bg-white py-[15px] rounded-[16px] pl-4 placeholder:text-[#636366]" />
                            <div className="absolute bottom-[6px] flex justify-center items-center right-[7px] h-[42px] w-[42px] rounded-[12px] bg-[#0D9CD8]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.0004 20.9999L16.6504 16.6499" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <BlogCard key={index} />
                    ))}
                </div>
                <div className="flex justify-center items-center min-h-[300px] mb-[40px]]">
                    <Pagination
                        showSizeChanger={false}
                        defaultCurrent={1}
                        total={80}
                        className="custom-pagination"
                    />

                </div>
            </div>
        </main>)

}
export default Blogs