import L from '../Assets/path5493.svg'
import { BsFacebook, BsTwitter, BsTelephone, BsEnvelope } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="flex justify-center items-center">
      <div className='py-16 px-8 md:px-28 w-full'>
        <div className="md:flex justify-between items-center">
          <div className="mb-14">
            <div className="flex items-center justify-start flex-row my-5">
              <img src={L} alt="" />
              <p className='font-bold text-2xl text-[#8E44AD]'>e</p>
              <p className='font-bold text-2xl text-[#8E44AD]'>g</p>
              <p className='font-bold text-2xl text-[#8E44AD]'>i</p>
              <p className='font-bold text-2xl text-[#8E44AD]'>t</p>
              <p className='font-bold text-2xl text-[#8E44AD]'>C</p>
              <p className='font-bold text-2xl text-[#8E44AD]'>a</p>
              <p className='font-bold text-2xl text-[#8E44AD]'>r</p>
            </div>
            <div className="w-full lg:w-[227px]">
              <p className='text-[#475467] text-sm font-normal'>LegitCar bridges the market transparency gap between used car buyers and sellers.</p>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col space-y-4 mb-10">
            <h1 className='text-[#1D2939] font-medium text-basex mb-3'>Company</h1>
            <h2 className='text-[#475467] font-normal'>About us</h2>
            <h2 className='text-[#475467] font-normal'>Contact us</h2>
            <h2 className='text-[#475467] font-normal'>FAQs</h2>
            <h2 className='text-[#475467] font-normal'>Blog</h2>
            <h2 className='text-[#475467] font-normal'>Terms and Conditions</h2>
          </div>
          <div className="flex items-start justify-center flex-col space-y-4 mb-10">
            <h1 className='text-[#1D2939] font-medium text-base mb-3'>Services</h1>
            <h2 className='text-[#475467] font-normal'>Verify</h2>
            <h2 className='text-[#475467] font-normal'>Maintenance</h2>
            <h2 className='text-[#475467] font-normal'>Vehicle listing</h2>
            <h2 className='text-[#475467] font-normal'>Tracking</h2>
            <h2 className='text-[#475467] font-normal'>Report misssing vehicle</h2>
          </div>
          <div className="flex items-start justify-center flex-col space-y-4 mb-10">
            <h1 className='text-[#1D2939] font-medium text-base mb-3'>Connect</h1>
            <span className="flex items-center space-x-2 text-[#475467] font-normal">
              <BsFacebook className='w-[15px] h-[15px]' />
              <h1>legitcar</h1>
            </span>
            <div className="flex items-center space-x-2 text-[#475467] font-normal">
              <BsTwitter className='w-[15px] h-[15px]' />
              <h1>@legit_car</h1>
            </div>
            <div className="flex items-center space-x-2 text-[#475467] font-normal">
              <AiOutlineInstagram className='w-[15px] h-[15px]' />
              <h1>@legit_carofficial</h1>
            </div>
            <div className="flex items-center space-x-2 text-[#475467] font-normal">
              <BsTelephone className='w-[15px] h-[15px]' />
              <h1>07040489327</h1>
            </div>
            <div className="flex items-center space-x-2 text-[#475467] font-normal">
              <BsEnvelope className='w-[15px] h-[15px]' />
              <h1>info@legitcar.com</h1>
            </div>
          </div>
        </div>
        <div className="mt-24 flex items-center space-x-2 text-[#475467]">
          <BiCopyright />
          <p className='font-medium'><span className='mr-2'> 2016 - 2023</span> LegitCar</p>
        </div>
      </div>
    </div>
  )
}

export default Footer