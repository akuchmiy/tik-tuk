import React, { FC, useEffect, useState } from 'react'
import FeedList from './FeedList'
import { Feed } from '../../models/Feed'
import FeedService from '../../services/FeedService'

interface Props {
  username: string
}

const UserFeedList: FC<Props> = ({ username }) => {
  const [feedList, setFeedList] = useState<Feed[]>([])

  useEffect(() => {
    document.title = `${username}'s profile`
  }, [username])

  useEffect(() => {
    setFeedList([])
    ;(async () => {
      // const data = await FeedService.getUserFeed(username)
      const data = await FeedService.getTrendingFeed()

      setFeedList(data)
    })()
  }, [username])

  return (
    <FeedList
      className={'gap-3'}
      maxColumns={3}
      currentColumns={3}
      feedList={feedList}
    />
  )
}

export default UserFeedList
