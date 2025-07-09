
const PaymentModal = ({setIsModal}) => {
  return (
    <div className="fixed w-full h-full  inset-0   z-50  flex items-center justify-center ">
        <div className="fixed w-full h-full  bg-black bg-opacity-30 " onClick={()=>setIsModal(false)}></div>
        <div className="w-[471px] bg-white h-[268px] py-12 px-[34px] rounded-2xl z-50">
             <p className="text-[#2C2C2E] font-medium text-2xl text-center mb-14 ">Növbənizi təsdiqləməkdə əminsiniz?</p>
             <div className="flex gap-3 justify-center ">
                <button className="w-[191px] bg-[#D1D1D6] h-[52px] rounded-lg text-[#2C2C2E] font-medium text-xl line-height-[28px] cursor-pointer" onClick={()=>setIsModal(false)}>Ləğv et</button>
                <button className="w-[191px] bg-[#34C759] text-[#FFFFFF] h-[52px] rounded-lg font-medium text-xl line-height-[28px] cursor-pointer">Təsdiq et</button>
             </div>
        </div>
    </div>
  )
}

export default PaymentModal