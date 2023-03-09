import Car from '../Assets/car.png'
import Icon1 from '../Assets/HeroIcon1.png'
import Icon2 from '../Assets/HeroIcon2.png'
import Icon3 from '../Assets/HeroIcon3.png'
import Icon4 from '../Assets/HeroIcon4.png'
import { BiChevronRight } from 'react-icons/bi'

const Hero = () => {
    return (
        <div className='px-20 flex justify-between space-x-10'>
            <div className="max-w-[400px] mt-5">
                <h1 className='text-5xl my-6'><span className='text-[#8E44AD]'>Verify</span> that car <br /> with LegitCar</h1>
                <p className='text-[#475467] text-lg font-normal mb-7'>Whether you're looking to buy, sell, track or repair your vehicle, LegitCar could help save you more money and time.</p>
                <div className="grid grid-cols-2 gap-6 mb-4">
                    <div className="border border-[#D0D5DD] w-[202px] h-26 p-6 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon1} alt="" />
                        <p className='font-medium'>Verify</p>
                    </div>
                    <div className="border border-[#D0D5DD] w-[202px] h-26 p-6 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon2} alt="" />
                        <p className='font-medium'>Maintenance</p>
                    </div>
                    <div className="border border-[#D0D5DD] w-[202px] h-26 p-6 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon3} alt="" />
                        <p className='font-medium'>Verified listings</p>
                    </div>
                    <div className="border border-[#D0D5DD] w-[202px] h-26 p-6 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon4} alt="" />
                        <p className='font-medium'>Tracking</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-[#F2F4F7] w-[40px] h-[40px] rounded-[8px]" />
                    <div className="absolute bottom-[13px] left-[23px] flex z-20 items-center justify-center space-x-1">
                        <p className='text-sm font-medium w-full'>Report missing vehicle</p>
                        <BiChevronRight className='text-[#8E44AD]' />
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <div className="bg-[#FCF4FF] px-[13rem] h-[85vh] absolute right-0" />
                <img src={Car} alt="Car" className='absolute right-[30px] w-[550px] h-[379px] top-[140px]' />
            </div>
        </div>
    )
}

export default Hero