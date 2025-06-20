import StepperHeader from "./components/stepperHome/StepperHeader";
import Stepper1 from "./components/stepperHome/Stepper1";
import Stepper2 from "./components/stepperHome/Stepper2";
import Stepper3 from "./components/stepperHome/Stepper3";
import Stepper4 from "./components/stepperHome/Stepper4";
import { useState } from "react";
const steps = [
  {
    title: "Sahəni seç",
    description: "Hansı sahə üzrə növbə götürmək istəyirsiz?",
    components: Stepper1,
  },
  {
    title: "Həkimi seç",
    description: "Nevropatologiya üzrə hansı həkimə növbə götürmək istəyirsiz?",
    components: Stepper2,
  },
  {
    title: "Klinikanı seç",
    description: "Hansı klinikanı seçirsiniz?",
    components: Stepper3,
  },
  {
    title: "",
    description: "",
    components: Stepper4,
  },
];
const QueueCreatePage = () => {
  const [step, setStep] = useState(0);
  const StepperComponent = steps[step].components;
  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="max-w-[1224px] mx-auto px-2 flex flex-col items-center justify-center">
      <h2>Yeni növbə yarat</h2>
      <StepperHeader count={step} />
      <div >
        <h3 className=" text-[#2C2C2E]  text-2xl font-medium mb-4 text-left ">{steps[step].title}</h3>
        <p className="text-xl font-medium text-[#64717C]">{steps[step].description}</p>
      </div>
      <StepperComponent />
      <button
        onClick={handleNextStep}
        className="mt-[111px] w-[248px] bg-[#0D9CD8] text-white  text-[20px] h-[52px] rounded-lg cursor-pointer hover:bg-[#0a7bab] transition-all duration-300"
      >
        Davam et
      </button>
    </div>
  );
};

export default QueueCreatePage;
