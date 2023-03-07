import L from '../Assets/path5493.svg'
import { BsFacebook, BsTwitter, BsTelephone, BsEnvelope } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='absolute top-[3280px] py-16 px-28 w-full'>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
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
          <div className="w-[227px]">
            <p className='text-[#475467] text-sm font-normal'>LegitCar bridges the market transparency gap between used car buyers and sellers.</p>
          </div>
        </div>
        <div className="flex items-start justify-center flex-col space-y-4">
          <h1 className='text-[#1D2939] font-medium text-basex mb-3'>Company</h1>
          <h2 className='text-[#475467] font-normal'>About us</h2>
          <h2 className='text-[#475467] font-normal'>Contact us</h2>
          <h2 className='text-[#475467] font-normal'>FAQs</h2>
          <h2 className='text-[#475467] font-normal'>Blog</h2>
          <h2 className='text-[#475467] font-normal'>Terms and Conditions</h2>
        </div>
        <div className="flex items-start justify-center flex-col space-y-4">
          <h1 className='text-[#1D2939] font-medium text-base mb-3'>Services</h1>
          <h2 className='text-[#475467] font-normal'>Verify</h2>
          <h2 className='text-[#475467] font-normal'>Maintenance</h2>
          <h2 className='text-[#475467] font-normal'>Vehicle listing</h2>
          <h2 className='text-[#475467] font-normal'>Tracking</h2>
          <h2 className='text-[#475467] font-normal'>Report misssing vehicle</h2>
        </div>
        <div className="flex items-start justify-center flex-col space-y-5">
          <h1 className='text-[#1D2939] font-medium text-base mb-3'>Connect</h1>
          <div className="flex items-center space-x-2 text-[#475467] font-normal text-sm mt-20">
            <BsFacebook className='w-[17px] h-[17px]'/>
            <h1>legitcar</h1>
          </div>
          <div className="flex items-center space-x-2 text-[#475467] font-normal text-sm">
            <BsTwitter className='w-[17px] h-[17px]'/>
            <h1>@legit_car</h1>
          </div>
          <div className="flex items-center space-x-2 text-[#475467] font-normal text-sm">
            <AiOutlineInstagram className='w-[17px] h-[17px]'/>
            <h1>@legit_carofficial</h1>
          </div>
          <div className="flex items-center space-x-2 text-[#475467] font-normal text-sm">
            <BsTelephone className='w-[17px] h-[17px]'/>
            <h1>07040489327</h1>
          </div>
          <div className="flex items-center space-x-2 text-[#475467] font-normal text-sm">
            <BsEnvelope className='w-[17px] h-[17px]'/>
            <h1>info@legitcar.com</h1>
          </div>
        </div>
      </div>
      <div className="mt-24 flex items-center space-x-2 text-[#475467]">
        <BiCopyright />
        <p className='font-medium'>2016 - 2022   LegitCar</p>
      </div>
    </div>
  )
}

export default Footer