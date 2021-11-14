import React, { FC, useEffect, useState } from 'react'
import FeedList from './FeedList'
import { Feed } from '../../models/Feed'

interface Props {
  username?: string
}

const UserFeedList: FC<Props> = ({ username }) => {
  const [feedList, setFeedList] = useState<Feed[]>([])

  useEffect(() => {
    document.title = `${username}'s profile`
  }, [username])

  return <FeedList feedList={feedList} />
}

export default UserFeedList
