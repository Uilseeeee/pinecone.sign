"use client";

import React, { useEffect } from 'react'
import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import FinishedForm from './FinishedForm'


function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        email: "",
        password: "",
        comfirmPassword: "",
    });
    const [formError, setFormError] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        email: "",
        password: "",
        comfirmPassword: "",

    });
    function handleError(errors) {
        setFormError((prev) => ({ ...prev, ...errors }));
    }
    function clearError(name) {
        setFormError((prev) => ({ ...prev, [name]: "" }))
    }
    const Step = [StepOne, StepTwo, StepThree, FinishedForm][currentStep];
    function handleNextStep() {
        if (currentStep !== 3) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };
    function handleBackStep() {
        if (currentStep !== 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    useEffect(() => {
        const data = localStorage.getItem("formData")
        console.log(data);

    }, [])
    return (
        <div>
            <Step
                errors={formError}
                formValue={formValue}
                handleError={handleError}
                setFormValue={setFormValue}
                clearError={clearError}
                handleNextStep={handleNextStep}
                handleBackStep={handleBackStep}

            />
        </div>
    );
};

export default MultiStepForm
