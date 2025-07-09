import StepperHeader from "./components/stepperHome/StepperHeader";
import Stepper1 from "./components/stepperHome/Stepper1";
import Stepper2 from "./components/stepperHome/Stepper2";
import Stepper3 from "./components/stepperHome/Stepper3";
import Stepper4 from "./components/stepperHome/Stepper4";
import ChooseMeet from "./components/paymentStepper/ChooseMeet";
import MakePayment from "./components/paymentStepper/MakePayment";
import { useState } from "react";
import PaymentModal from "./components/modals/paymentModal/PaymentModal";
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

const paymentStep = [
  {
    title: "Görüş zamanını seçin",
    desc: "Sizə uyğun olan tarixi ve saatı seçin.",
    components: ChooseMeet,
  },
  {
    title: "Ödəniş detallarını əlavə edin",
    desc: "Seçdiyiniz kartın məlumatlarını düzgün daxil edin. ",
    components: MakePayment,
  },
];

const QueueCreatePage = () => {
  const [step, setStep] = useState(0);
  const [step2, setStep2] = useState(0);
  const [finshedStep, setFinishedStep] = useState(false);
  const [isModal,setIsModal]= useState(false)
  const [varinat,setVariant]= useState(1)
  const StepperComponent = steps[step].components;
  const StepperComponent2 = paymentStep[step2 - 1]?.components;
  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else if (step == steps.length - 1) {
      setFinishedStep(true);
      setVariant(2)
      if (step2 <= paymentStep.length - 1) {
        setStep2(step2 + 1);
      }  else if (step2 == paymentStep.length){
        setIsModal(true)
      }
    }
  };
  
  return (
    <div className="max-w-[1224px] mx-auto px-2 flex flex-col items-center justify-center">
      <h2 className="mb-[74px] text-[#2C2C2E] text-2xl font-medium ">Yeni növbə yarat</h2>
      <StepperHeader count={step}  varinat={varinat} count2 = {step2}/>
      {!finshedStep ? (
        <div>
          <h3 className=" text-[#2C2C2E]  text-2xl font-medium mb-4 text-left ">
            {steps[step].title}
          </h3>
          <p className="text-xl font-medium text-[#64717C]">
            {steps[step].description}
          </p>
        </div>
      ) : (
        <div>
          <h3 className=" text-[#2C2C2E]  text-2xl font-medium mb-4 text-left ">
            {paymentStep[step2 - 1]?.title}
          </h3>
          <p className="text-xl font-medium text-[#64717C]">
            {paymentStep[step2 - 1]?.desc}
          </p>
        </div>
      )}

      {!finshedStep ? <StepperComponent /> : <StepperComponent2 />}

      {
        isModal &&     <PaymentModal  setIsModal = {setIsModal}/>
      }
   
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
