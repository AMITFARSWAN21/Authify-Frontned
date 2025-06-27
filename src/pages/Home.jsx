import React from 'react'
import { Menubar } from '../components/Menubar'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { Features } from '../components/Features'
import { AboutInstitution } from '../components/AboutInstitution'
import { TopPlacements } from '../components/TopPlacements'
import EducationalFooter from '../components/EducationalFooter'


export const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="flex-grow-1 mt-10">
        <Banner/>
        <Header />
        <Features/>
        <AboutInstitution/>
        <TopPlacements/>
      </div>
      <EducationalFooter/>
    </div>
  )
}