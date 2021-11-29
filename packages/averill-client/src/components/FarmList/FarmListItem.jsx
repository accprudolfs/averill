import React from 'react'
import { Link } from 'react-router-dom'

export default function FarmListItem({ itemData }) {
  return (
    // TODO::change path to the right farm
    <Link to="/myFarm">
      <div
        className="w-56 h-20 md:w-72 xl:w-96 xl:h-24 xl:mx-4 md:mx-4 my-4
        border shadow-md rounded border-light-bg-green bg-green-600 
        divide-y-2 divide-black divide-opacity-25 cursor-pointer
        transition duration-300 ease-out hover:bg-light-bg-green transform hover:-translate-y-1 hover:scale-110 "
      >
        <div className="xl:py-2 pl-4 text-white text-lg">
          {itemData?.farmName ?? 'no data'}
        </div>
        <div className="flex flex-row justify-between px-4 pt-2">
          <p>Farmer: {itemData?.farmOwner ?? 'no data'}</p>
          <p> {itemData?.coins ?? 'no data'} coins </p>
        </div>
      </div>
    </Link>
  )
}
