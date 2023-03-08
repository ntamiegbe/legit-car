import Car from '../Assets/car.png'
import Icon1 from '../Assets/HeroIcon1.png'
import Icon2 from '../Assets/HeroIcon2.png'
import Icon3 from '../Assets/HeroIcon3.png'
import Icon4 from '../Assets/HeroIcon4.png'
import { BiChevronRight } from 'react-icons/bi'

const Hero = () => {
    return (
        <div className='px-20 relative flex'>
            <div className="absolute max-w-[420px] my-5">
                <h1 className='text-5xl my-6'><span className='text-[#8E44AD]'>Verify</span> that car <br /> with LegitCar</h1>
                <p className='text-[#475467] text-lg font-normal mb-10'>Whether you're looking to buy, sell, track or repair your vehicle, LegitCar could help save you more money and time.</p>
                <div className="flex gap-[16px] mb-4">
                    <div className="border border-[#D0D5DD] w-[202px] py-3 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon1} alt="" />
                        <p className='font-medium'>Verify</p>
                    </div>
                    <div className="border border-[#D0D5DD] w-[202px] py-3 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon2} alt="" />
                        <p className='font-medium'>Maintenance</p>
                    </div>
                </div>
                <div className="flex gap-[16px] mb-6    ">
                    <div className="border border-[#D0D5DD] w-[202px] py-3 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon3} alt="" />
                        <p className='font-medium'>Verified listings</p>
                    </div>
                    <div className="border border-[#D0D5DD] w-[202px] py-3 bg-white rounded-[8px] flex flex-col space-y-3 items-center justify-center">
                        <img src={Icon4} alt="" />
                        <p className='font-medium'>Tracking</p>
                    </div>
                </div>
                {/* <div className="bg-[#F2F4F7] px-16 py-6 relative rounded-[8px]">
                    <div className="absolute top-[4px] left-9 flex z-20 items-center justify-center space-x-1">
                        <p className='text-sm font-medium w-full'>Report missing vehicle</p>
                        <BiChevronRight className='text-[#8E44AD]' />
                    </div>
                </div> */}
                <div className="relative">
                    <div className="bg-[#F2F4F7] w-[40px] h-[40px] rounded-[8px]" />
                    <div className="absolute bottom-[13px] left-[23px] flex z-20 items-center justify-center space-x-1">
                        <p className='text-sm font-medium w-full'>Report missing vehicle</p>
                        <BiChevronRight className='text-[#8E44AD]' />
                    </div>
                </div>
            </div>
            <div className="bg-[#FCF4FF] w-[329px] h-[500px] absolute left-[872px]" />
            <img src={Car} alt="Car" className='absolute right-[100px] w-[550px] h-[379px] top-[120px]' />
        </div>
    )
}

export default Hero