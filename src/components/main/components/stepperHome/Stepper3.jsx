import { useState } from "react";
import StepperTabHeader from "../stepperTabs/StepperTabHeader"
import CLinikMeet from "../stepperTabs/CLinikMeet";
import ClinicVideoMeet from "../stepperTabs/ClinicVideoMeet";

const Stepper3 = () => {
    const [activeTab, setActiveTab] = useState('Klinikada görüş');

  const renderContent = () => {
    switch (activeTab) {
      case 'Klinikada görüş':
        return   <CLinikMeet/>;
      case 'Video görüş':
        return <ClinicVideoMeet/>;
      default:
        return null;
    }
  };
  function handleTabChange(tab) {
    setActiveTab(tab);
  }
  return (
    <div className="w-[392px] border border-[#F2F5F8] rounded-xl mt-12 h-[212px] px-[19px] py-6">
        <StepperTabHeader handleTabChange={handleTabChange} activeTab={activeTab}/>

        {renderContent()}

    </div>
  )
}

export default Stepper3