import React from 'react'
import Card from '../../components/card/Card'

const Favourites = () => {
  return (
    <div className='!mt-8'>
      <h5>Favourites</h5>
      <div className='!mt-6 grid xl:grid-cols-5 gap-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>

      </div>
    </div>
  )
}

export default Favourites