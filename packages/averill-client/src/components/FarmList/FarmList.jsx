import React from 'react'
import FarmListItem from './FarmListItem.jsx'
export default function FarmList({ farmData }) {
  return (
    <div className="flex justify-center xl:px-48 flex-wrap">
      {farmData.length ? (
        farmData.map(farm => {
          return <FarmListItem key={farm.id} itemData={farm} />
        })
      ) : (
        <div className="my-16 pt-4">No farms created yet</div>
      )}
    </div>
  )
}
