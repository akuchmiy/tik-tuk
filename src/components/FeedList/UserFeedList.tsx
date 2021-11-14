import React, { FC, useEffect, useState } from 'react'
import FeedList from './FeedList'
import { Feed } from '../../models/Feed'
import FeedService from '../../services/FeedService'

interface Props {
  username?: string
}

const UserFeedList: FC<Props> = ({ username }) => {
  const [feedList, setFeedList] = useState<Feed[]>([])

  useEffect(() => {
    document.title = `${username}'s profile`
  }, [username])

  useEffect(() => {
    ;(async () => {
      const data = await FeedService.getTrendingFeed()
      setFeedList(data)
      console.log(data)
    })()
  }, [username])

  return <FeedList feedList={feedList} />
}

export default UserFeedList
