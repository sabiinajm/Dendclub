import Table from "../components/Table"

function HsPatients() {
    return (
        <div className="bg-[#F2F5F8] min-h-screen px-[12px] md:px-[32px] py-10">
            <div className="pb-[24px]">
                <h2 className="text-xl">Sonuncu Pasientler</h2>
            </div>
            <div className="relative pb-[20px]">
                <input type="text" placeholder="Axtarın" className="pl-14 outline-none placeholder:text-[#64717C] border border-[#F2F5F8] rounded-full h-[48px] w-full md:w-[641px]" />
                <svg className="absolute top-3 left-6" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <g clip-path="url(#clip0_1199_13635)">
                        <path d="M3.5 10C3.5 10.9193 3.68106 11.8295 4.03284 12.6788C4.38463 13.5281 4.90024 14.2997 5.55025 14.9497C6.20026 15.5998 6.97194 16.1154 7.82122 16.4672C8.6705 16.8189 9.58075 17 10.5 17C11.4193 17 12.3295 16.8189 13.1788 16.4672C14.0281 16.1154 14.7997 15.5998 15.4497 14.9497C16.0998 14.2997 16.6154 13.5281 16.9672 12.6788C17.3189 11.8295 17.5 10.9193 17.5 10C17.5 9.08075 17.3189 8.1705 16.9672 7.32122C16.6154 6.47194 16.0998 5.70026 15.4497 5.05025C14.7997 4.40024 14.0281 3.88463 13.1788 3.53284C12.3295 3.18106 11.4193 3 10.5 3C9.58075 3 8.6705 3.18106 7.82122 3.53284C6.97194 3.88463 6.20026 4.40024 5.55025 5.05025C4.90024 5.70026 4.38463 6.47194 4.03284 7.32122C3.68106 8.1705 3.5 9.08075 3.5 10Z" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.5 21L15.5 15" stroke="#64717C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1199_13635">
                            <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <Table />
        </div>
    )
}
export default HsPatients