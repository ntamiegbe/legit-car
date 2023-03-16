import Icon1 from '../Assets/SectionIcon1.png'
import Icon2 from '../Assets/SectionIcon2.png'
import Icon3 from '../Assets/SectionIcon3.png'
import Icon4 from '../Assets/SectionIcon4.png'

const Advantages = () => {
    return (
        <section className='px-8 md:px-20 py-28 bg-white my-20 max-w-[95rem] mx-auto'>
            <div className="flex items-center justify-center mb-10">
                <div className="text-center">
                    <h1 className="md:text-5xl text-3xl text-[#1D2939] text-center font-medium mb-8">Why choose LegitCar?</h1>
                    <p className="text-[#475467] font-normal mb-10 text-base text-center w-[320px] md:w-full">LegitCar bridges the market transparency gap between used car buyers and sellers.</p>
                </div>
            </div>
            <div className="md:flex items-center justify-between space-x-2">
                <div className="flex flex-col items-center justify-center space-y-4 mb-20 md:mb-0">
                    <img src={Icon1} alt="Icon" />
                    <h3 className='font-medium text-center text-xl'>Save More Money</h3>
                    <p className='max-w-[250px] h-[48px] text-center'>LegitCar helps you shop smart when you’re buying a used car. </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 mb-20 md:mb-0">
                    <img src={Icon2} alt="Icon" />
                    <h3 className='font-medium text-center text-xl'>Buy used car smartly</h3>
                    <p className='max-w-[250px] h-[48px] text-center'>LegitCar VIN lookup gives you all you need to make an informed buying decision.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 mb-[6.5rem] md:mb-0">
                    <img src={Icon3} alt="Icon" />
                    <h3 className='font-medium text-center text-xl'>Leverage accurate data</h3>
                    <p className='max-w-[250px] h-[48px] text-center'>We partner with International car history companies to provide accurate reports. Avoid unwanted surprises and let LegitCar do the homework for you.</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 mb-20 md:mb-0">
                    <img src={Icon4} alt="Icon" />
                    <h3 className='font-medium text-center text-xl'>Be safe on the road</h3>
                    <p className='max-w-[250px] h-[48px] text-center'>Our maintenance plans are designed to inform you of schedules as advised by car manufactuurer.</p>
                </div>
            </div>
        </section>
    )
}

export default Advantages