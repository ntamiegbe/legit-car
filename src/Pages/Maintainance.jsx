import Navbar from '../Sections/Navbar'
import Footer from '../Sections/Footer'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Maintainance = () => {

  const navigate = useNavigate()

  return (
    <section className='bg-white'>
      <Navbar />
      <div className="px-8 flex flex-col items-center justify-center p-16">
        <h2 className='text-center text-[#1D2939] text-4xl mb-8'>Let’s handle your maintenance</h2>
        <p className='text-center text-[#475467]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra arcu platea suspendisse mi.</p>

        <div className="mt-4 w-[370px]">
          <h1 className='text-start mb-3 text-[#1D2939] font-medium'>VIN / Chasis number</h1>
          <div className="border border-[#D0D5DD] rounded-[8px] bg-white mb-5">
            <input type="text" className='px-5 py-3 rounded-[8px] focus:border-transparent focus:outline-none' placeholder='Enter 17 digits number' />
          </div>
          <button className='bg-[#8E44AD] w-full px-3 py-2 rounded-[8px] text-white font-medium' onClick={() => navigate("/maintainanceDetails")}>Decode VIN</button>
          <div className="mt-5 flex items-center justify-center space-x-2 text-[#8E44AD]">
            <AiOutlineQuestionCircle />
            <h1 className='text-lg'>Where to find VIN</h1>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Maintainance