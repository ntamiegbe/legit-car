import Navbar from '../Sections/Navbar'
import CTA from '../Sections/CTA'
import Footer from '../Sections/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#491A5D] pt-20 w-full">
        <div className="text-white text-center">
          <h2 className='text-3xl md:text-5xl mb-5'>Contact us</h2>
          <p className='text-base'>We're available around the clock. Let us know how we can help!</p>
        </div>
        <div className="max-w-2xl mx-auto mt-14 px-8">
          <form className="bg-white px-10 md:px-20 py-10 mb-4 rounded-t-[16px]">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  className="block text-[#1D2939] text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="border rounded w-full py-3 px-3 text-[#1D2939] focus:outline-none"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                />
              </div>

              <div className="w-full md:w-1/2 px-2 mb-6">
                <label
                  className="block text-[#1D2939] text-sm font-medium mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="border rounded w-full py-3 px-3 text-[#1D2939] focus:outline-none"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-[#1D2939] text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded w-full py-3 px-3 text-[#1D2939] focus:outline-none"
                id="email"
                type="email"
                placeholder="example@example.com"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-[#1D2939] text-sm font-medium mb-2"
                htmlFor="email"
              >
                Phone number
              </label>
              <div className="flex border">
                <div className="relative inline-block">
                  <select
                    className="block appearance-none w-full px-4 py-3 pr-8"
                  >
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+81">+81</option>
                    <option value="+86">+86</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5 8l5 5 5-5H5z"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  className="flex-1 appearance-none w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-[#1D2939] text-sm font-medium mb-2">
                How did you hear about LegitCar?
              </label>
              <textarea
                id="message"
                name="message"
                rows='4'
                placeholder="How can we help you?"
                className="appearance-none border rounded w-full py-3 px-3 text-[#1D2939] leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="flex items-start   text-[#1D2939] text-sm font-medium">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="agree"
                  name="agree"
                />
                <span>I would like to receive information on upcoming launches and product updates.</span>
              </label>
            </div>

            <button className='bg-[#8E44AD] w-full px-3 py-3 rounded-[8px] text-white font-medium'>Send message</button>
          </form>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  )
}

export default Contact