function CreateBlogs() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] relative">
            <div className="flex items-center gap-2 pt-[24px] pb-[36px]">
                <p className="text-[#64717C]">Bloqlar</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_1733_4556)">
                        <path d="M6 4L10 8L6 12" stroke="#D1D1D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                <input type="text" className="rounded-xl px-4 py-[14px] w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border " placeholder="Ad , soyad daxil edin"/>
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Bloq Başlığı</h4>
                <input type="text" className="rounded-xl px-4 py-[14px] w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border " placeholder="Bloq başlığını qeyd edin"/>
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Bloq Kateqoriyası</h4>
                <select className="rounded-xl px-4 py-[14px] w-full outline-none bg-[#F2F5F8] border-[#D1D1D6] border ">
                    <option value="Uşaq Sağlamlığı">Uşaq Sağlamlığı</option>
                </select>
            </div>
            <div className="pb-[36px]">
                <h4 className="text-sm pb-[8px]">Şəkil Yükləyin</h4>
                <input type="text" className="rounded-xl px-4 py-[14px] w-full outline-none bg-[#F2F5F8] border-[#0D9CD8] border-dashed border " placeholder="Ad , soyad daxil edin"/>
            </div>
        </div>
    )
}
export default CreateBlogs