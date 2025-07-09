const Stepper4 = () => {
  return (
    <div>
      <div className="text-sm text-[#000000] font-normal flex flex-col gap-2 mb-[22px]">
        Həkim üçün qeyd
        <div className="w-[336px] h-[103px] border border-[#D1D1D6] rounded-xl pl-4">
          <textarea
            name=""
            id=""
            className="resize-none outline-none w-full  mt-2"
            placeholder="Qeydi yazın"
          />
        </div>
      </div>
      <div className="text-sm text-[#000000] font-normal flex flex-col gap-2">
        Özünüz haqqında əlavə qeyd
        <div className="w-[336px] h-[103px] border border-[#D1D1D6] rounded-xl pl-4">
          <textarea
            name=""
            id=""
            className="resize-none outline-none w-full  mt-2"
            placeholder="Haqqınızda yazın"
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper4;
