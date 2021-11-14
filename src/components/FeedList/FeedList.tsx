import React, { FC } from 'react'
import { Feed } from '../../models/Feed'

interface FeedListProps {
  feedList: Feed[]
}

const FeedList: FC<FeedListProps> = ({ feedList }) => {
  return (
    <div className={'lg:flex justify-center items-center'}>
      This is feed list {feedList.length}
    </div>
  )
}

export default FeedList
