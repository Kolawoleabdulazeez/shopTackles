"use client"
import Navbar from '@/Component/Layout/Navbar'
import React from 'react'
import Hero from './LandingPage/Hero'
import CategoryPromo from './LandingPage/CategoryPromo'
import OurCategories from './LandingPage/Ourcategories'
import StoryAccessories from './LandingPage/StoryAccessories'
import TrendingItems from './LandingPage/Trendingitems'
import GiftBanner from './LandingPage/GiftBanner'
import Newsletter from './LandingPage/Newsletter'
import Footer from './LandingPage/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <CategoryPromo/>
        <OurCategories/>
        <StoryAccessories/>
        <TrendingItems/>
        <GiftBanner/>
        <Newsletter/>
        <Footer/>

    </div>
  )
}

export default LandingPage