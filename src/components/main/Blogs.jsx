import { useState, useMemo } from "react";
import { Pagination } from "antd";
import BlogCard from "./components/BlogCard/BlogCard";
import SearchBar from "./components/searchBar/SearchBar";

const fakeBlogs = [...Array(20)].map((_, i) => ({
    id: i + 1,
    title: `Məsləhət ${i + 1}`
}));

function Blogs() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBlogs = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) return fakeBlogs;

        const startsWith = str =>
            str
                .toLowerCase()
                .split(/\s+/)
                .some(word => word.startsWith(q));

        return fakeBlogs.filter(
            blog => startsWith(blog.title)
        );
    }, [searchTerm]);

    return (
        <main className="bg-[#f2f5f8] pt-[24px]">
            <div className="max-w-[1224px] mx-auto px-2">
                <h1 className="pt-[2rem] text-[#030303] text-2xl md:text-[2.2rem] leading-[56px] text-center">
                    Həkimlərdən məsləhətlər!
                </h1>
                <div className="min-h-[150px] flex items-center">
                    <div className="flex flex-wrap md:flex-row gap-2 sm:gap-5 items-center mb-4">
                        <SearchBar value={searchTerm} onChange={setSearchTerm} />
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
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} title={blog.title} />
                    ))}
                    {filteredBlogs.length === 0 && (
                        <p className="col-span-full text-gray-500 text-center">
                            Heç bir nəticə tapılmadı.
                        </p>
                    )}
                </div>

                <div className="flex justify-center items-center min-h-[300px] mb-[40px]">
                    <Pagination
                        showSizeChanger={false}
                        defaultCurrent={1}
                        total={80}
                        className="custom-pagination"
                    />
                </div>
            </div>
        </main>
    );
}

export default Blogs;
