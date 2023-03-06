import Car from '../Assets/car.png'

const Hero = () => {
    return (
        <div className='px-20 relative flex'>
            <div className="absolute w-[420px] h-[112px] mt-16">
                <h1 className='text-5xl my-10'><span className='text-[#8E44AD]'>Verify</span> that car <br /> with LegitCar</h1>
                <p className='text-[#475467] text-lg font-normal'>Whether you're looking to buy, sell, track or repair your vehicle, LegitCar could help save you more money and time.</p>
            </div>
            <div className="bg-[#FCF4FF] w-[329px] h-[500px] absolute left-[872px]" />
            <img src={Car} alt="Car" className='absolute right-[100px] w-[550px] h-[379px] top-[120px]' />
        </div>
    )
}

export default Hero