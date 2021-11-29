import Header from '../components/Header/Header.jsx'
import React from 'react'
import FarmList from '../components/FarmList/FarmList.jsx'
import { useGetAllFarmsQuery } from '../store/services'
import Spinner from '../components/auth/Spinner.jsx'

// TODO::figure out good way to align last row to the left in case of missing elements and free space or just limit number
// so that there won't be any need to do that
// TODO::add pagination

export default function AllFarmsView() {
  // it works but currently there seems like no way to create farm so mock farms were used for demo
  /* eslint-disable */

  const { data = [], isLoading, isError, error } = useGetAllFarmsQuery()

  const mockData = [
    {
      farmName: 'farm1',
      farmId: '1',
      farmOwner: 'John',
      coins: 11,
    },
    {
      farmName: 'farm2',
      farmId: '2',
      farmOwner: 'Sam',
      coins: 50,
    },
    {
      farmName: 'farm3',
      farmId: '3',
      farmOwner: 'Dan',
      coins: 4,
    },
    {
      farmName: 'farm4',
      farmId: '4',
      farmOwner: 'Rick',
      coins: 0,
    },
    {
      farmName: 'farm5',
      farmId: '5',
      farmOwner: 'Lenny',
      coins: 320,
    },
    {
      farmName: 'farm6',
      farmId: '6',
      farmOwner: 'Morty',
      coins: 10,
    },
    {
      farmName: 'farm7',
      farmId: '7',
      farmOwner: 'Kenny',
      coins: 10,
    },
  ]

  return (
    <div className="bg-dark-bg-green h-screen">
      <Header />

      <h1 className="text-center py-10 text-2xl font-semibold text-white tracking-wider">
        Farms list
      </h1>

      {isLoading && !isError && (
        <div className="flex flex-col justify-center mt-16 text-center">
          <p className="py-4">Loading</p>
          <Spinner width={22} height={22} />
        </div>
      )}

      {!isLoading && !isError && <FarmList farmData={mockData} />}

      {isError && (
        <div className="flex flex-col py-16 text-center">
          Error occured while loading farms - {error.message}
        </div>
      )}
    </div>
  )
}
