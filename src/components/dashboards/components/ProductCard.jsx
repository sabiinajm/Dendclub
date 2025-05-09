const ProductCard = ({ title, salesAmount, salesQuantity }) => {
    return (
        <div className="bg-white min-w-[160px] rounded-[12px] min-h-[200px] text-sm">
            <div className="bg-[#10B981] text-white rounded-tl-xl w-[93px] h-[32px] flex justify-center items-center">
                Mövcuddur
            </div>
            <div className="px-2 py-4">
                <div className="flex pb-[20px]">
                    <img src="/assets/images/derman.png" className="w-[62px] h-[58px] object-cover" alt={title} />
                    <h5 className="font-medium">{title}</h5>
                </div>
                <p>Satış miqdarı: {salesQuantity}</p>
                <p>Satış məbləği: {salesAmount}</p>
            </div>
        </div>
    );
};

export default ProductCard;
