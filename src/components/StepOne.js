import React from 'react'
import PineLogo from '@/icons/PineconeLogo';
import { isStepOneValid } from '@/utils/StepOneValidetion';
function StepOne(props) {
    const { handleNextStep, errors, formValue, setFormValue, handleError, clearError } = props;
    function handleChange(event) {
        const { name, value } = event.target
        setFormValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        clearError(name);
    };
    function handleFormNextStep() {
        const { isValid, errors } = isStepOneValid(formValue)
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
            <div className='w-[480px] h-[655px] bg-white p-8 rounded-[8px] flex flex-col justify-between'>
                <div>
                    <div className='flex flex-col gap-[8px] mb-[28px]'>
                        <div>
                            <PineLogo />
                        </div>
                        <p className='text-[26px] font-semibold leading-[31,5px]'>Join Us!</p>
                        <p className='text-gray-400 text-[18px] font-normal'>Please provide all current information accurately.</p>
                    </div>

                    <div className='flex flex-col gap-[8px] mb-[12px]'>
                        <div className='flex'>
                            <p>First name</p>
                            <p className='text-red-600'>*</p>
                        </div>
                        <input
                            name={"firstName"}
                            className={`${errors.firstName.length > 0 ? "" : ""
                                }, w-[416px] h-[44px] border rounded-[10px] p-[5px]`}
                            placeholder='Your first name'
                            onChange={handleChange}
                        ></input>
                        {errors.firstName.length > 0 &&
                            (<p className='text-red-600'>Нэрээ бич</p>)}
                    </div>
                    <div className='flex flex-col gap-[8px] mb-[12px]'>
                        <div className='flex'>
                            <p>Last name</p>
                            <p className='text-red-600'>*</p>
                        </div>
                        <input
                            name={"lastName"}
                            className={`${errors.lastName.length > 0 ? "" : ""
                                }, w-[416px] h-[44px] border rounded-[10px] p-[5px]`}
                            placeholder='Your last name'
                            onChange={handleChange}
                        ></input>
                        {errors.lastName.length > 0 &&
                            (<p className='text-red-600'>Овгоо бич</p>)}
                    </div>
                    <div className='flex flex-col gap-[8px] mb-[12px]'>
                        <div className='flex'>
                            <p>Username</p>
                            <p className='text-red-600'>*</p>
                        </div>
                        <input
                            name={"userName"}
                            className='w-[416px] h-[44px] border rounded-[10px] p-[5px]'
                            placeholder='Your usename'
                            onChange={handleChange}
                        ></input>
                        {errors.userName.length > 0 &&
                            (<p className='text-red-600'>Хэрэглэгчийн нэрээ бич</p>)}
                    </div>
                </div>

                <div >
                    <button
                        className='h-[44px] w-[416px] rounded-[6px] text-white bg-black flex justify-center items-center'
                        onClick={handleFormNextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default StepOne

