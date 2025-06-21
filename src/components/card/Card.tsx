import React from 'react'
import { Card as AntCard } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const { Meta } = AntCard

interface CardProps {
  title?: string
  description?: string
  cover?: string
  actions?: React.ReactNode[]
  loading?: boolean
}

const Card: React.FC<CardProps> = ({
  title = "Moonfall",
  description = "2022 | Action",
  cover = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
  loading = false,
}) => {
  return (
    <div className="relative w-full opacity-50 hover:opacity-100 cursor-pointer" >
      <AntCard
        loading={loading}
        cover={
          <div className='relative'>
            <img
              src={cover}
              alt={title}
              className='object-cover w-full h-64'
            />
            <div
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              <FontAwesomeIcon icon={faHeart} color="#7C3AED" size="lg" />
            </div>
            <div className="absolute left-0 right-0 bottom-0 !pt-5 !px-5 !pb-4 bg-gradient-to-t from-black/60 to-black/10" >
              <div className="text-white text-20 font-semibold mb-1">
                {title}
              </div>
              <div className="text-white opacity-80 text-16">
                {description}
              </div>
            </div>
          </div>
        }
        className="rounded-2xl overflow-hidden shadow-2xs m-0 p-0"
        styles={{ body: { display: 'none' } }}
      // bodyStyle={{ display: 'none' }}
      />
    </div>
  )
}

export default Card