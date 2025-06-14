import React from 'react'
import Card from '../../components/card/Card'

const Favourites = () => {
  return (
    <div className='!mt-8'>
      <h5>Favourites</h5>
      <div className='!mt-6 grid xl:grid-cols-5 sm:grid-cols-3 gap-5'>
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