import React from 'react'
import Header from '../components/Header/Header.jsx'
import Farm from '../components/Farm/Farm.jsx'
import Shop from '../components/Shop/Shop.jsx'

export default function MyFarmView() {
  return (
    <div className="bg-dark-bg-green h-screen">
      <Header />
      <div className="flex justify-center">
        <Farm
          farmData={[
            {
              plant: 'potato',
              watered: true,
              x: 0,
              y: 0,
            },
            {
              plant: 'carrot',
              watered: false,
              x: 0,
              y: 1,
            },
            {
              plant: 'banana',
              watered: false,
              x: 0,
              y: 2,
            },
            {
              plant: 'apple',
              watered: false,
              x: 0,
              y: 3,
            },
          ]}
        />
        <Shop />
      </div>
    </div>
  )
}
