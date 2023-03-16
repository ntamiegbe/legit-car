import Icon1 from '../Assets/Disrupt Africa .png'
import Icon2 from '../Assets/Techpoint africa.png'
import Icon3 from '../Assets/The Guardian.png'
import Icon4 from '../Assets/Founders Africa.png'

const Featured = () => {
    return (
        <div className="max-w-[95rem] mx-auto">
            <div className='px-32 bg-white py-14 w-full'>
                <div className="text-center flex items-center justify-center mb-10">
                    <h1 className="md:text-5xl text-3xl text-[#1D2939] text-center font-medium mb-8">As featured in</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between space-x-5">
                    <div className="w-[240px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px] mb-10 ml-5">
                        <img src={Icon1} alt="Icon" />
                    </div>
                    <div className="w-[240px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px] mb-10">
                        <img src={Icon2} alt="Icon" />
                    </div>
                    <div className="w-[240px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px] mb-10">
                        <img src={Icon3} alt="Icon" />
                    </div>
                    <div className="w-[240px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px] mb-10">
                        <img src={Icon4} alt="Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured