"use client"
import Navbar from '@/Component/Layout/Navbar'
import React from 'react'
import Hero from '../Component/Components/Hero'
import CategoryPromo from '../Component/Components/CategoryPromo'
import OurCategories from '../Component/Components/Ourcategories'
import StoryAccessories from '../Component/Components/StoryAccessories'
import TrendingItems from '../Component/Components/Trendingitems'
import GiftBanner from '../Component/Components/GiftBanner'
import Newsletter from '../Component/Components/Newsletter'
import Footer from '../Component/Components/Footer'

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