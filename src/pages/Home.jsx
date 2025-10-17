import React from 'react'
import CoreBusinessDomains from '../components/home/CoreBusinessDomains'
import Banner from '../components/home/Hero'
import OurInnovativeSolutions from '../components/home/OurInnovativeSolutions'
import Hero from '../components/home/Hero'
import AIActionableIntelligence from '../components/home/AIActionableIntelligence'
import OurFounders from '../components/home/OurFounders'
import NewsArticles from '../components/home/NewsArticles'
import PartneringForGlobalImpact from '../components/home/PartneringForGlobalImpact'


// import BusinessDomains from '../components/home/BusinessDomains'
// import InnovativeSolutions from '../components/home/InnovativeSolutions'


const HomePage = () => {
  return (
    <>
      <Hero />
      <CoreBusinessDomains />
      <OurInnovativeSolutions />
      <AIActionableIntelligence />
      <OurFounders />
      <NewsArticles />
      <PartneringForGlobalImpact /> 
    </>
  )
}

export default HomePage
