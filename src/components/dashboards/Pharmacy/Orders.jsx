import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

function Orders() {

    const products = [
        { title: 'Alora 100 ml şərbət', salesAmount: 100, salesQuantity: 100 },
        { title: 'Alora 100 ml şərbət', salesAmount: 100, salesQuantity: 100 },
        { title: 'Alora 100 ml şərbət', salesAmount: 100, salesQuantity: 100 },
        { title: 'Alora 100 ml şərbət', salesAmount: 100, salesQuantity: 100 },
        { title: 'Alora 100 ml şərbət', salesAmount: 100, salesQuantity: 100 },
        { title: 'Alora 100 ml şərbət', salesAmount: 100, salesQuantity: 100 },
    ];

    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] py-10">
            <h3 className="font-medium pb-[30px]">Ən çox sifariş edilənlər</h3>
            <div className="flex gap-4 overflow-x-scroll lg:w-[920px] xlll:overflow-hidden xlll:w-auto pb-2">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        salesAmount={product.salesAmount}
                        salesQuantity={product.salesQuantity}
                    />
                ))}
            </div>
            <h3 className="py-[30px] font-medium text-xl">Bütün Sifarişlər</h3>
            <div className="flex pb-[40px] justify-between items-start gap-3 flex-col lg:flex-row">
                <input type="text" className="outline-none w-full lg:w-[520px] h-[48px] pl-3 rounded-xl" placeholder="Axtarın" />
                <button className="bg-[#0D9CD8] h-[40px] w-[170px] flex justify-center items-center text-white  rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.625 3.4375C10.625 3.18886 10.5262 2.9504 10.3504 2.77459C10.1746 2.59877 9.93614 2.5 9.6875 2.5C9.43886 2.5 9.2004 2.59877 9.02459 2.77459C8.84877 2.9504 8.75 3.18886 8.75 3.4375V8.75H3.4375C3.18886 8.75 2.9504 8.84877 2.77459 9.02459C2.59877 9.2004 2.5 9.43886 2.5 9.6875C2.5 9.93614 2.59877 10.1746 2.77459 10.3504C2.9504 10.5262 3.18886 10.625 3.4375 10.625H8.75V15.9375C8.75 16.1861 8.84877 16.4246 9.02459 16.6004C9.2004 16.7762 9.43886 16.875 9.6875 16.875C9.93614 16.875 10.1746 16.7762 10.3504 16.6004C10.5262 16.4246 10.625 16.1861 10.625 15.9375V10.625H15.9375C16.1861 10.625 16.4246 10.5262 16.6004 10.3504C16.7762 10.1746 16.875 9.93614 16.875 9.6875C16.875 9.43886 16.7762 9.2004 16.6004 9.02459C16.4246 8.84877 16.1861 8.75 15.9375 8.75H10.625V3.4375Z" fill="white" />
                    </svg>
                    Sifariş əlavə et
                </button>
            </div>
                <Table/>
        </div>
    )
}
export default Orders