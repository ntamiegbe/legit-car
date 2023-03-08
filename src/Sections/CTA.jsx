import { AiOutlineQuestionCircle } from 'react-icons/ai'

const CTA = () => {
    return (
        <div className='absolute top-[2830px] px-20 w-full'>
            <div className="bg-[#FCF4FF] h-[470px] rounded-[16px] flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center w-[608px]">
                        <h1 className="text-5xl text-[#1D2939] text-center font-medium mb-8">Join thousands of people using LegitCar</h1>
                        <p className="text-[#475467] font-normal mb-10 text-base text-center">Learn all there is to know about your next car</p>
                    </div>
                    <div className="mt-4">
                        <h1 className='text-start mb-3 text-[#1D2939] font-medium'>VIN / Chasis number</h1>
                        <div className="border border-[#D0D5DD] rounded-[8px] items-center bg-white">
                            <input type="text" className='px-5 py-3' placeholder='Enter 17 digits number' />
                            <button className='bg-[#8E44AD] mx-1 px-3 py-2 rounded-[8px] text-white font-medium'>Decode VIN</button>
                        </div>
                        <div className="mt-5 flex items-center justify-center space-x-2 text-[#8E44AD]">
                            <AiOutlineQuestionCircle />
                            <h1 className='text-lg'>Where to find VIN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA