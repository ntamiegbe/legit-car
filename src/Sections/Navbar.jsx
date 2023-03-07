import L from '../Assets/path5493.svg'
import {BiChevronDown} from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className='w-full h-[80px] py-4 border-b px-20'>
            <div className="flex justify-between items-center ">
                <div className="flex flex-row justify-center items-center space-x-10">
                    <div className="flex items-center justify-center flex-row">
                        <img src={L} alt="" />
                        <p className='font-bold text-2xl text-[#8E44AD]'>e</p>
                        <p className='font-bold text-2xl text-[#8E44AD]'>g</p>
                        <p className='font-bold text-2xl text-[#8E44AD]'>i</p>
                        <p className='font-bold text-2xl text-[#8E44AD]'>t</p>
                        <p className='font-bold text-2xl text-[#8E44AD]'>C</p>
                        <p className='font-bold text-2xl text-[#8E44AD]'>a</p>
                        <p className='font-bold text-2xl text-[#8E44AD]'>r</p>
                    </div>
                    <div className="flex items-center space-x-1 text-[#475467] text-[16px] font-medium">
                        <p>Services</p>
                        <BiChevronDown />
                    </div>
                    <div className="flex items-center space-x-1 text-[#475467] text-[16px] font-medium">
                        <p>Learn</p>
                        <BiChevronDown />
                    </div>
                    <div className="flex items-center text-[#475467] text-[16px] font-medium">
                        <p>Sample Report</p>
                    </div>
                    <div className="flex items-center text-[#475467] text-[16px] font-medium">
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="flex justify-between items-center space-x-12">
                    <div className="flex items-center text-[#475467] text-[16px] font-medium">
                        <p>Login</p>
                    </div>
                    <div className="flex items-center text-white py-[15px] text-[13px] rounded-[8px] px-[24px] bg-[#8E44AD] font-medium">
                        <p>Sign up for free</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar