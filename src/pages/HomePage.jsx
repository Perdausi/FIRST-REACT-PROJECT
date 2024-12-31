import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import BrowseJob from '../components/BrowseJob'
import ViewAll from '../components/ViewAll'
const HomePage = () => {
  return (
   <>
     <Hero />
     <HomeCards />
     <BrowseJob isHome={true}/>
     <ViewAll />
   </>
  )
}

export default HomePage