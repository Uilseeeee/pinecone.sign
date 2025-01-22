"use client";

import React, { useState } from "react";
import stepOne from "./stepOne"
import stepTwo from "./stepTwo"
import StepThree from "./stepThree"
import formFinished from "./formFinished"

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [formValue, setFormValue] = useState({
        firstname: "",
        lastname: "",
        username: "",
        phonenumber: "",
    });

    const Step = [stepOne, StepTwo, stepThree, formFinished][currentStep];

    const handleNextStep = () => {
        if (currentStep !== 3) {
            setCurrentStep((prevStep) => prevStep - 1)
        }
    };
    const handleBackStep = () => {
        if (currentStep !==  0){
            setCurrentStep((prevStep) => -1);
        }
    };

    return (
        <div>
            <step handleNextStep={handleNextStep} handleBackStep={handleBackStep} />
        </div>
    );
};

export default MultiStepForm;