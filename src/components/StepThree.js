import React from 'react'
import PineLogo from '@/icons/PineconeLogo';

function StepThree(props) {
    const { handleNextStep, handleBackStep } = props;
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center  bg-slate-100'>
            <div className='w-[480px] h-[655px] bg-white p-8 rounded-[8px]'>
            <div className='flex flex-col gap-[8px] mb-[28px]'>
                    <div>
                        <PineLogo />
                    </div>
                    <p className='text-[26px] font-semibold leading-[31,5px]'>Join Us!</p>
                    <p className='text-gray-400 text-[18px] font-normal'>Please provide all current information accurately.</p>
                </div>
            <button onClick={handleBackStep}>back</button>
            <button onClick={handleNextStep}>next</button>
            </div>

        </div>
    )
}
export default StepThree ; 
