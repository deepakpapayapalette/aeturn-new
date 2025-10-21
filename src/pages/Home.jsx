import React, { lazy, Suspense } from 'react'
import Loader from '../layouts/Loader'

const Hero = lazy(() => import('../components/home/Hero'))
const CoreBusinessDomains = lazy(() => import('../components/home/CoreBusinessDomains'))
const OurInnovativeSolutions = lazy(() => import('../components/home/OurInnovativeSolutions'))
const AIActionableIntelligence = lazy(() => import('../components/home/AIActionableIntelligence'))
const OurFounders = lazy(() => import('../components/home/OurFounders'))
const NewsArticles = lazy(() => import('../components/home/NewsArticles'))
const PartneringForGlobalImpact = lazy(() => import('../components/home/PartneringForGlobalImpact'))

const HomePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <CoreBusinessDomains />
      <OurInnovativeSolutions />
      <AIActionableIntelligence />
      <OurFounders />
      <NewsArticles />
      <PartneringForGlobalImpact />
    </Suspense>
  )
}

export default HomePage
