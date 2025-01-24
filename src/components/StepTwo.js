import React from 'react'
import PineLogo from '@/icons/PineconeLogo';
import { isStepTwoValid } from '@/utils/StepTwoValidation';
function StepTwo(props) {
    const { handleNextStep, handleBackStep, formValue, setFormValue, handleError, clearError, errors } = props;
    function handleChange(event) {
        const { name, value } = event.target
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        clearError(name);
    };
    function handleFormNextStep() {
        const { isValid, errors } = isStepTwoValid(formValue)
        if (isValid) {
            const localdata = {
                ...formValue,
                currentStep: 1
            }
            localStorage.setItem("formData", JSON.stringify(localdata))
            handleNextStep()
        }
        handleError(errors)
    };

    return (

        <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-100'>
            <div className='w-[480px] h-[655px] bg-white p-8 rounded-[8px]'>
                <div className='flex flex-col gap-[8px] mb-[28px]'>
                    <div>
                        <PineLogo />
                    </div>
                    <p className='text-[26px] font-semibold leading-[31,5px]'>Join Us!</p>
                    <p className='text-gray-400 text-[18px] font-normal'>Please provide all current information accurately.</p>
                </div>
                <div className='flex flex-col gap-[8px] mb-[12px]'>
                    <div className='flex'>
                        <p>Email</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input
                        name={"email"}
                        className='w-[416px] h-[44px] border rounded-[10px] p-[5px]'
                        placeholder='Your email'
                        onChange={handleChange}
                    ></input>
                    {errors.email.length > 0 &&
                        (<p className='text-red-600'>{errors.email}</p>)}
                </div>
                <div className='flex flex-col gap-[8px] mb-[12px]'>
                    <div className='flex'>
                        <p>Phone number</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input
                        name={"phoneNumber"}
                        className='w-[416px] h-[44px] border rounded-[10px] p-[5px] '
                        placeholder='Your phone number'
                        onChange={handleChange}
                    ></input>
                     {errors.phoneNumber.length > 0 &&
                        (<p className='text-red-600'>{errors.phoneNumber}</p>)}
                </div>
                <div className='flex flex-col gap-[8px] mb-[12px]'>
                    <div className='flex'>
                        <p>Password</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input className='w-[416px] h-[44px] border rounded-[10px] p-[5px]' placeholder='Your password'></input>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <div className='flex'>
                        <p>Comfirm password</p>
                        <p className='text-red-600'>*</p>
                    </div>
                    <input className='w-[416px] h-[44px] border rounded-[10px] p-[5px]' placeholder='Comfirm password'></input>
                </div>
                <div className='flex mt-[50px] g-[8px]'>
                    <button
                        className='h-[44px] w-[128px] rounded-[6px] border text-black flex justify-center items-center'
                        onClick={handleBackStep}>Back</button>
                    <button
                        className='h-[44px] w-[280px] rounded-[6px] border text-white bg-black flex justify-center items-center'
                        onClick={handleFormNextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default StepTwo
