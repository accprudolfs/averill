import React from 'react'
import Header from '../components/Header.jsx'
import Farm from '../components/Farm/Farm.jsx'
import Shop from '../components/Shop/Shop.jsx'

export default function MyFarmView() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <Farm
          farmData={[
            {
              plant: 'potato',
              watered: true,
              x: 1,
              y: 3,
            },
            {
              plant: 'carrot',
              watered: false,
              x: 5,
              y: 4,
            },
          ]}
        />
        <Shop />
      </div>
    </div>
  )
}
