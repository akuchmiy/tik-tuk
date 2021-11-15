import React, { FC, useState } from 'react'
import { Feed } from '../../models/Feed'
import FeedItem from '../FeedItem/FeedItem'
import FeedControls from './FeedControls'

interface FeedListProps {
  className?: string
  feedList: Feed[]
}

const FeedList: FC<FeedListProps> = ({ feedList, className }) => {
  const [cols, setCols] = useState<number>(1)

  function changeColumns(direction: 'UP' | 'DOWN') {
    if (direction === 'UP') {
      setCols((cols) => cols + 1)
    } else {
      setCols((cols) => cols - 1)
    }
  }

  return (
    <div className={`grid grid-cols-${cols} ${className}`}>
      {feedList.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
      <FeedControls changeColumns={changeColumns} columns={cols} />
    </div>
  )
}

export default FeedList
