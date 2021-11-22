import React from 'react'
import Header from '../components/Header.jsx'
import Farm from '../components/Farm/Farm.jsx'

export default function MyFarmView() {
  return (
    <div>
      <Header />
      <Farm
        farmData={[
          {
            plant: 'potato',
            watered: true,
          },
          {},
          {},
        ]}
      />
    </div>
  )
}
