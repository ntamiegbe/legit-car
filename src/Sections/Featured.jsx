import Icon1 from '../Assets/Disrupt Africa .png'
import Icon2 from '../Assets/Techpoint africa.png'
import Icon3 from '../Assets/The Guardian.png'
import Icon4 from '../Assets/Founders Africa.png'

const Featured = () => {
    return (
        <div className="flex justify-center items-center">
            <div className='px-32 bg-white py-20 w-full'>
                <div className="text-center flex items-center justify-center my-10">
                    <h1 className="text-5xl text-[#1D2939] text-center font-medium mb-8">As featured in</h1>
                </div>
                <div className="flex items-center justify-between space-x-5">
                    <div className="w-[270px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px]">
                        <img src={Icon1} alt="Icon" />
                    </div>
                    <div className="w-[270px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px]">
                        <img src={Icon2} alt="Icon" />
                    </div>
                    <div className="w-[270px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px]">
                        <img src={Icon3} alt="Icon" />
                    </div>
                    <div className="w-[270px] h-[140px] flex items-center justify-center bg-[#F9FAFB] rounded-[4px]">
                        <img src={Icon4} alt="Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured