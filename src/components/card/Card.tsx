import React from 'react'
import { Card as AntCard } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const { Meta } = AntCard

interface CardProps {
  title?: string
  description?: string
  cover?: string
  avatar?: React.ReactNode
  actions?: React.ReactNode[]
  loading?: boolean
  hoverable?: boolean
}

const Card: React.FC<CardProps> = ({
  title = "Moonfall",
  description = "2022 | Action",
  cover = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
  avatar,
  loading = false,
  hoverable = true
}) => {
  return (
    <div style={{ position: 'relative', width: 348 }}>
      <AntCard
        hoverable={hoverable}
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
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: '20px 20px 16px 20px',
              background: 'linear-gradient(0deg, rgba(0,0,0,0.60) 80%, rgba(0,0,0,0.10) 100%)',
            }}>
              <div style={{ color: 'white', fontWeight: 600, fontSize: 20, marginBottom: 4 }}>
                {title}
              </div>
              <div style={{ color: 'white', opacity: 0.85, fontSize: 16 }}>
                {description}
              </div>
            </div>
          </div>
        }
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          margin: 0,
          padding: 0,
        }}
        bodyStyle={{ display: 'none' }}
      />
    </div>
  )
}

export default Card