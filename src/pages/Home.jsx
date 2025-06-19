import React from 'react'
import { Menubar } from '../components/Menubar'
import { Header } from '../components/Header'

export const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Menubar />
      <div className="flex-grow-1 mt-40">
        <Header />
      </div>
    </div>
  )
}