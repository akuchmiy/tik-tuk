import React, { FC } from 'react'
import { Feed } from '../../models/Feed'
import FeedItem from '../FeedItem/FeedItem'

interface FeedListProps {
  feedList: Feed[]
}

const FeedList: FC<FeedListProps> = ({ feedList }) => {
  return (
    <div className={'grid sm:grid-cols-2 xl:grid-cols-3 gap-3'}>
      {feedList.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
    </div>
  )
}

export default FeedList
