import { Step, StepLabel, Stepper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import RegistrationCompleted from "./RegistrationCompleted";
import UserData from "./UserData";

function RegistrationForm({ whenSending }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [getData, setGetData] = useState({});

  useEffect(() => {
    if (currentStep === form.length - 1) {
      whenSending(getData);
    }
  });

  const form = [
    <UserData whenSending={handleGetData} />,
    <PersonalData whenSending={handleGetData} />,
    <DeliveryData whenSending={handleGetData} />,
    <RegistrationCompleted />,
  ];

  function handleGetData(data) {
    setGetData({ ...getData, ...data });
    handleNextStep();
  }

  function handleNextStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel> Login </StepLabel>
        </Step>
        <Step>
          <StepLabel> Pessoal </StepLabel>
        </Step>
        <Step>
          <StepLabel> Endereço </StepLabel>
        </Step>
        <Step>
          <StepLabel> Finalização </StepLabel>
        </Step>
      </Stepper>
      {form[currentStep]}
    </>
  );
}

export default RegistrationForm;
