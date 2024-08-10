import React from 'react'
import FarmerProfile from './FarmerProfile'
import Footer from './components/Footer'

function Farmer() {
  return (
    <div className=''>
      <div className="relative min-h-screen">
        {/* Top Half Background with Wavy Bottom */}
        <div className="absolute top-0 left-0 w-full h-2/3  bg-green-800 z-0">
          <svg
            className="absolute bottom-0 w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,181.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Bottom Half Background */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white z-0"></div>



        {/* Profile Section */}
        <div className="relative z-10 mt-32 p-24 flex justify-center">
          <FarmerProfile />
        </div>

        
      </div>




      {/* Footer Section */}
      <div className="mt-16 border-t-4 border-green-800">
        <Footer />
      </div>
    </div>
  )
}

export default Farmer