import BlogCard from "./BlogCard"

function BlogDetails() {
    return (
        <main className="bg-[#f2f5f8] pt-[24px]">
            <div className="max-w-[1224px] mx-auto px-2">
                <h1 className="pt-[7rem] pb-[4rem] text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-start">Həkimlərdən məsləhətlər!</h1>
                <img src="/assets/images/blog.jpeg" alt="" className="w-full h-[500px] object-cover rounded-[12px]" />
                <div className="py-[20px] flex md:justify-between flex-wrap gap-4 justify-center">
                    <div className="flex gap-4 md:gap-16 flex-wrap">
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/ava.jpeg" className="h-[40px] w-[40px] object-[90%] object-cover rounded-full" alt="" />
                            <h4 className=" text-[#2C2C2E] text-[.8rem] md:text-[1.2rem]">Dr.Ayaz Əliyev</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-[12px] h-[12px] bg-[#0D9CD8] rounded-full">
                            </div>
                            <h4 className=" text-[#2C2C2E] text-[.8rem] md:text-[1.2rem]">Uşaq Sağlamlığı</h4>

                        </div>
                    </div>
                    <div className="flex gap-11 items-center text-[.8rem]">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            989
                        </div>
                        <p className="text-[#636366]">10.22.2024</p>
                    </div>
                </div>
                <h1 className=" py-[24px] text-[#030303] text-2xl md:text-[2rem] font-medium leading-[56px] text-start">Peyvəndlərin Əhəmiyyəti</h1>
                <ul className="list-disc w-full px-[28px] xl:w-[1128px] pb-[63px]">
                    <li className="px-[10px]">1. Yoluxucu Xəstəliklərin Qarşısının Alınması </li>
                    <p> Peyvəndlər immun sistemini gücləndirərək vərəm, qızılca, hepatit, poliomielit kimi təhlükəli xəstəliklərə qarşı qoruma təmin edir. Peyvənd proqramlarının geniş tətbiqi nəticəsində bir çox xəstəlik ya məhv edilmiş, ya da ciddi şəkildə azaldılmışdır (məsələn, çiçək xəstəliyinin tamamilə yox olması).</p>
                    <li className="px-[10px]">2. Kollektiv İmmunitet </li>
                    <p> Peyvənd olunan insanların sayı artdıqca, xəstəliklərin yayılması çətinləşir. Bu, peyvənd ala bilməyən və ya immun sistemi zəif olan şəxsləri də qoruyur. Buna kollektiv immunitet deyilir və bu, xüsusilə yeni doğulan körpələr, yaşlılar və immun sistemi zəif olan şəxslər üçün çox vacibdir.</p>
                </ul>
                <h1 className=" py-[24px] text-[#030303] text-2xl md:text-[2rem] font-medium leading-[56px] text-start">Peyvənd Cədvəli</h1>
                <div className="flex flex-wrap">
                    <div>
                        <p className="text-[#64717C] font-semibold py-[10px]">Doğuşdan 1 Yaşa Qədər:</p>
                        <ul className="list-disc px-[20px]">
                            <li>Doğuşda: BCG, Hepatit B.</li>
                            <li>2 aylıqda: DTP, Polio.</li>
                            <li>6 aylıqda: Hepatit B (3-cü doza).</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[#64717C] font-semibold py-[10px]">1 Yaşdan Yuxarı:</p>
                        <ul className="list-disc px-[20px]">
                            <li>12-15 ay: MMR.</li>
                            <li>4-6 yaş: Tetanus, difteriya.</li>
                        </ul>
                    </div>
                </div>
                <h1 className=" py-[24px] text-[#030303] text-2xl md:text-[2rem] font-medium leading-[56px] text-start">Peyvənddən Sonra Nəzarət</h1>
                <ul className="text-[#64717C] list-disc px-[20px]">
                    <li>Yüngül qızdırma və narahatlıq normaldır.</li>
                    <li>Şişkinlik və ya qızarıqlıq varsa, həkimə müraciət edin.</li>
                    <li>Uşağı rahat vəziyyətdə saxlayın və maye qəbulu təmin edin.</li>
                </ul>
                <h1 className="pt-[7rem] pb-[4rem] text-[#030303] text-2xl md:text-[2.5rem] leading-[56px] text-start">Bu Məqalələri Sizin üçün Seçdik!</h1>
                <div className="pb-[9rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <BlogCard key={index} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default BlogDetails