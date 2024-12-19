import { Link } from "react-router-dom"

function BlogCard({key}) {
    return (
        <Link to={`/Bloglar/${key}`} className="bg-white rounded-[12px] min-h-[552px] py-[16px] pt-[24px] pb-[28px] flex flex-col items-center">
            <div className="mx-5 ">
                <img src="/assets/images/blog.jpeg" alt="doctor" className="w-full rounded-[12px]" />
            </div>
            <div className='flex flex-col items-center pt-3 w-full px-5'>
                <div className="flex items-center justify-between w-full font-medium text-xs sm:text-sm md:text-base">
                    <div className="flex items-center justify-center gap-2">
                        <img src="/assets/images/ava.jpeg" className="h-[40px] w-[40px] object-[90%] object-cover rounded-full" alt="" />
                        <h4 className=" text-[#2C2C2E]">Dr.Ayaz Əliyev</h4>
                    </div>
                    <p className="text-[#64717C]">Uşaq Sağlığı</p>
                </div>
                <h3 className="text-[#2C2C2E] font-medium pt-[20px] pb-[8px] text-[1.25rem]">Valideynlərə uşaqlıq peyvəndləri barədə təlimat</h3>

                <p className='text-[#64717C] text-[.8rem] font-normal'>Uşaqlara vaxtında peyvənd vermək, onların sağlam gələcəyinin təminatıdır</p>
                <div className="flex justify-between w-full font-medium pt-[28px]">
                    <p className="text-[#64717C]">10.22.2024</p>
                    <p className="text-[#2C2C2E]">Ətraflı bax</p>
                </div>
            </div>
        </Link >
    )
}
export default BlogCard