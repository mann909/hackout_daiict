import React from 'react'
import FarmingCards from './FarmingCards'
import UserHero from './UserHero'
import Footer from './Footer'


function User() {
  return (
    <div>
        < UserHero/>
        <h2 className="text-3xl text-center font-bold text-green-800 bg-green-100 pt-20">
        Discover and Grow Your Agri-Business
      </h2>
        <FarmingCards/>
        <Footer/>
    </div>
  )
}

export default User