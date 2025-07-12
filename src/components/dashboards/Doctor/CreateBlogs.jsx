import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
function CreateBlogs() {
    const [text, setText] = useState("");

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block"],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ["clean"],
        ],
    };
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] relative">
            <div className="flex items-center gap-2 pt-[24px] pb-[36px]">
                <Link to={'/Həkim-Dashboard/Bloq'} className="text-[#64717C] hover:underline">Bloqlar</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_1733_4556)">
                        <path d="M6 4L10 8L6 12" stroke="#D1D1D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1733_4556">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Bloq yarat
            </div>
            <div className="flex items-center justify-between pb-[48px]">
                <h2 className="text-2xl font-medium">Blog Yarat</h2>
                <div className="flex gap-3 py-[8px] px-[12px] bg-[#0D9CD8] text-white rounded-lg items-center">
                    Önizləmə
                </div>
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Blog yaradıcısı</h4>
                <input type="text" className="placeholder:text-[#636366] text-sm rounded-xl px-4 py-[14px] w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border " placeholder="Ad , soyad daxil edin" />
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Bloq Başlığı</h4>
                <input type="text" className="placeholder:text-[#636366] text-sm rounded-xl px-4 py-[14px] w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border " placeholder="Bloq başlığını qeyd edin" />
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Bloq Kateqoriyası</h4>
                <select className="rounded-xl px-4 py-[14px] w-full text-sm outline-none bg-[#F2F5F8] border-[#D1D1D6] border ">
                    <option value="Uşaq Sağlamlığı">Uşaq Sağlamlığı</option>
                </select>
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Şəkil Yükləyin</h4>
                <label className="flex flex-col items-center justify-center min-h-[182px] w-full cursor-pointer border border-dashed border-[#0D9CD8] rounded-xl bg-[#F2F5F8] text-gray-600 px-4 py-4 hover:bg-gray-200 transition">
                    <div className="mb-[16px] h-[98px] w-[112px] flex justify-center items-center border border-[#D1D1D6] rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 8H15.01M3 16L8 11C8.928 10.107 10.072 10.107 11 11L16 16M14 14L15 13C15.928 12.107 17.072 12.107 18 13L21 16M3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-sm">Şəkli bura buraxın və ya <span className="text-[#0D9CD8]">Seçin</span></span>
                    <input type="file" className="hidden" />
                </label>
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Bloqun Təsviri</h4>
                <div className="bg-[#F2F5F8] border border-[#D1D1D6] rounded-xl min-h-[201px]">
                    <ReactQuill theme="snow" value={text} onChange={setText} modules={modules} />
                </div>

            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Video URL (Şərti deyil)</h4>
                <input type="text" className="rounded-xl px-4 py-[14px] text-sm w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border placeholder:text-[#636366]" placeholder="youtube.com/videourlexample" />
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Açar Sözlər</h4>
                <input type="text" className="rounded-xl px-4 py-[14px] text-sm w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border placeholder:text-[#636366]" placeholder="Açar sözlər axtarın" />
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Referans linki (Şərti deyil)</h4>
                <input type="text" className="rounded-xl px-4 py-[14px] text-sm w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border placeholder:text-[#636366]" placeholder="https://referanslinkexample.com" />
            </div>
            <div className="py-[48px] w-full flex justify-end">
                <div className="flex gap-4 flex-wrap">
                    <button className="bg-[#D1D1D6] w-[120px] rounded-lg h-[36px]">Ləğv et</button>
                    <button className="bg-[#D1D1D6] w-[120px] rounded-lg h-[36px]">Yadda saxla</button>
                    <button className="bg-[#0D9CD8] text-white rounded-lg w-[120px] h-[36px]">Paylaş</button>
                </div>
            </div>
        </div>
    )
}
export default CreateBlogs