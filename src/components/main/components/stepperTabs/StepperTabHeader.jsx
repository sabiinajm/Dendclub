import clinicIcon from "../../../../../public/assets/icons/clinica.svg";
import videoIcon from "../../../../../public/assets/icons/video.svg";

const ityems = [
  {
    title: "Klinikada görüş",
    icon: clinicIcon,
  },
  {
    title: "Video görüş",
    icon: videoIcon,
  },
];

const StepperTabHeader = ({ handleTabChange,activeTab }) => {
  return (
    <div>
      <div className="flex items-center justify-center max-w-[1224px]      mb-4">
        {ityems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTabChange(item.title)}
            className={`cursor-pointer text-[#2C2C2E] text-[14px] font-normal border-b border-[#AEAEB2] flex items-center gap-2 w-[171px] pb-3 justify-center ${activeTab ===item.title ? "border-b-2 border-[#2C2C2E] text-[#2C2C2E]":"text-[#AEAEB2]"}`}
          >
            <span><img src={item.icon} alt="" /></span>
            <span> {item.title}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StepperTabHeader;
