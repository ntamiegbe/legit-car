import YoutubeIcon from '../Assets/Youtube.png'

const Services = () => {
    return (
        <div className="flex justify-center items-center bg-[#F9FAFB]">
            <div className='px-8 md:px-20 py-10 my-24'>
                <div className="flex items-center justify-center mb-10 mt-20">
                    <h1 className="md:text-5xl text-3xl text-[#1D2939] text-center font-medium">Numerous services and features under one umbrella</h1>
                </div>
                <div className="py-[6rem] md:py-[12rem] bg-[#1D2939] flex items-center justify-center rounded-[16px] mb-16">
                    <img src={YoutubeIcon} alt="Youtube" className='w-[100px] h-[100px]'/>
                </div>
                <div className="md:flex items-center justify-between space-x-3 px-4 mb-20">
                    <p className='text-[#1D2939] text-xl text-center mb-20 md:mb-0'>Numbers that <br /> speak volume</p>
                    <div className="flex flex-col space-y-4 mb-20 md:mb-0">
                        <h1 className='text-[#1D2939] font-normal text-center text-5xl'>1452+</h1>
                        <p className='text-[#1D2939] font-normal text-center text-2xl'>Vehicles reported</p>
                    </div>
                    <div className="flex flex-col space-y-4 mb-20 md:mb-0">
                        <h1 className='text-[#1D2939] font-normal text-center text-5xl'>22%</h1>
                        <p className='text-[#1D2939] font-normal text-center text-2xl'>In Federal Capital Territory </p>
                    </div>
                    <div className="flex flex-col space-y-4 mb-20 md:mb-0">
                        <h1 className='text-[#1D2939] font-normal text-center text-5xl'>8015+</h1>
                        <p className='text-[#1D2939] font-normal text-center text-2xl'>Searches made</p>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-10">
                    <h1 className="text-white py-[15px] text-[13px] rounded-[8px] px-[24px] bg-[#8E44AD] font-medium">Get started</h1>
                </div>
            </div>
        </div>
    )
}

export default Services