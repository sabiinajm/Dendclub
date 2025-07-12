import { Rate } from "antd";

import { Link } from "react-router-dom";

const SteppetCard = () => {
  return (
    <div>
      <div className="bg-white rounded-[12px] max-h-[433px] w-full xs:w-[288px] py-[16px] pt-[12px] pb-[28px] flex flex-col items-center border border-[#E5E5EA]">
        <div className="bg-[#F2F5F8] relative h-[203px] w-[90%] xs:w-[256px] flex justify-center items-end rounded-[12px]">
          <img
            src="/assets/images/drAylin.png"
            alt="doctor"
            className="w-[full] xs:w-[184px] h-[184px]"
          />
          <div className="w-[190px] absolute flex justify-center items-center bottom-[-20px] h-[40px] bg-[#0D9CD8] text-white rounded-[24px] text-base">
            <h1>Dr.Aylin Əliyev</h1>
          </div>
          <div className="bg-white rounded-full w-[44px] h-[44px] flex justify-center items-center top-[10px] right-[10px] absolute">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.262 2.50391C17.785 2.50391 22.262 6.98091 22.262 12.5039C22.262 18.0269 17.785 22.5039 12.262 22.5039C10.666 22.5061 9.09279 22.1247 7.67497 21.3919L3.84897 22.4589C3.63551 22.5185 3.41005 22.5202 3.1957 22.464C2.98134 22.4077 2.78579 22.2955 2.62908 22.1388C2.47237 21.9821 2.36015 21.7865 2.3039 21.5722C2.24765 21.3578 2.2494 21.1324 2.30897 20.9189L3.37697 17.0959C2.64232 15.6768 2.25989 14.1019 2.26197 12.5039C2.26197 6.98091 6.73897 2.50391 12.262 2.50391ZM12.262 4.00391C10.0076 4.00391 7.84562 4.89944 6.25156 6.4935C4.6575 8.08756 3.76197 10.2496 3.76197 12.5039C3.76197 13.9739 4.13497 15.3869 4.83497 16.6409L4.98497 16.9109L3.87297 20.8949L7.85997 19.7829L8.12997 19.9329C9.26435 20.5636 10.5281 20.9261 11.8243 20.9927C13.1205 21.0593 14.4148 20.8281 15.6078 20.317C16.8008 19.8059 17.861 19.0283 18.7069 18.0439C19.5529 17.0595 20.1621 15.8945 20.488 14.6382C20.8139 13.3818 20.8478 12.0675 20.587 10.7961C20.3262 9.52464 19.7777 8.32979 18.9836 7.30317C18.1895 6.27655 17.1708 5.44543 16.0057 4.87353C14.8405 4.30163 13.5599 4.00416 12.262 4.00391ZM9.01197 13.5039H13.51C13.7 13.504 13.8829 13.5762 14.0218 13.7059C14.1606 13.8356 14.245 14.0132 14.258 14.2028C14.2709 14.3924 14.2115 14.5798 14.0915 14.7272C13.9716 14.8746 13.8002 14.971 13.612 14.9969L13.51 15.0039H9.01197C8.82195 15.0038 8.63903 14.9317 8.50018 14.8019C8.36133 14.6722 8.2769 14.4946 8.26395 14.305C8.25099 14.1154 8.31049 13.928 8.4304 13.7806C8.55032 13.6332 8.72172 13.5368 8.90997 13.5109L9.01197 13.5039ZM9.01197 10.0039H15.517C15.7069 10.0042 15.8897 10.0766 16.0283 10.2064C16.167 10.3362 16.2512 10.5138 16.264 10.7033C16.2769 10.8928 16.2173 11.0801 16.0974 11.2274C15.9775 11.3747 15.8061 11.471 15.618 11.4969L15.517 11.5039H9.01197C8.82195 11.5038 8.63903 11.4317 8.50018 11.3019C8.36133 11.1722 8.2769 10.9946 8.26395 10.805C8.25099 10.6154 8.31049 10.428 8.4304 10.2806C8.55032 10.1332 8.72172 10.0368 8.90997 10.0109L9.01197 10.0039Z"
                fill="#636366"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center pt-[28px]">
          <h3> Uzman Nevropatoloq</h3>
          <div className="w-full xs:w-[256px]">
            <div className="flex items-center justify-center">
              <Rate
                style={{ color: "#F4B814" }}
                className="py-3"
                count={5}
                value={5}
              />
              <p className="text-sm px-2 text-[#636366]">(4)</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.87343 12.38C5.76463 12.4581 5.63405 12.5002 5.5001 12.5002C5.36614 12.5002 5.23557 12.4581 5.12676 12.38C1.90743 10.0853 -1.50924 5.36533 1.94476 1.95467C2.89299 1.0219 4.16999 0.499416 5.5001 0.5C6.83343 0.5 8.11276 1.02333 9.05543 1.954C12.5094 5.36467 9.09276 10.084 5.87343 12.38Z"
                  stroke="#636366"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.50008 6.50065C5.8537 6.50065 6.19284 6.36018 6.44289 6.11013C6.69294 5.86008 6.83341 5.52094 6.83341 5.16732C6.83341 4.8137 6.69294 4.47456 6.44289 4.22451C6.19284 3.97446 5.8537 3.83398 5.50008 3.83398C5.14646 3.83398 4.80732 3.97446 4.55727 4.22451C4.30722 4.47456 4.16675 4.8137 4.16675 5.16732C4.16675 5.52094 4.30722 5.86008 4.55727 6.11013C4.80732 6.36018 5.14646 6.50065 5.50008 6.50065Z"
                  stroke="#636366"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Bakı</span>
            </div>
            <div className="flex justify-between py-[28px] px-[10px] gap-2 xs:gap-0 xs:px-0 text-[.9rem]">
              <Link
                to={`/Həkimlərimiz/${1}`}
                className="w-[90%] xs:w-[120px] h-[40px] bg-[#F0F0F7] rounded-[8px] text-[#2C2C2E] flex justify-center items-center transition-all duration-300 hover:bg-[#d4d4db]"
              >
                Ətraflı bax
              </Link>
              <Link className="w-[90%] xs:w-[120px] h-[40px] bg-[#0D9CD8] hover:bg-[#0a7bab] rounded-[8px] text-white flex justify-center items-center transition-all duration-150">
                Növbə götür
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteppetCard;
