import React from 'react'
import Header from '../components/Header/Header.jsx'
import Farm from '../components/Farm/Farm.jsx'
import Shop from '../components/Shop/Shop.jsx'

export default function MyFarmView() {
  return (
    <div className="bg-dark-bg-green h-screen">
      <Header />
      <div className="flex justify-center">
        <Farm />
        <Shop />
      </div>
    </div>
  )
}
