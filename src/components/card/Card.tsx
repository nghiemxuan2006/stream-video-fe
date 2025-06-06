import React from 'react'
import { Card as AntCard } from 'antd'

const { Meta } = AntCard

interface CardProps {
  title?: string
  description?: string
  cover?: string
  avatar?: string
  actions?: React.ReactNode[]
  loading?: boolean
  hoverable?: boolean
}

const Card: React.FC<CardProps> = ({
  title = "Moonfall",
  description = "2022 | Action",
  cover = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQPXZbbodZSPWs0JVXyLyY9L-jrS2Wpy_9zoQ7v8iKYSWVlswmQ&psig=AOvVaw128sSXRFwsQGZsDaYIe0RR&ust=1749290976131000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLik8OvG3I0DFQAAAAAdAAAAABAE",
  avatar,
  actions,
  loading = false,
  hoverable = true
}) => {
  return (
    <AntCard
      hoverable={hoverable}
      loading={loading}
      cover={cover && <img alt={title} src={cover} />}
      actions={actions}
      style={{ width: 300 }}
    >
      <Meta
        avatar={avatar}
        title={title}
        description={description}
      />
    </AntCard>
  )
}

export default Card