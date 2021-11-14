import React, { FC, useEffect, useMemo, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import FeedList from './FeedList'
import { Feed } from '../../models/Feed'
import FeedService from '../../services/FeedService'

const TrendingFeedList: FC = () => {
  const query = useQuery()
  const [feedList, setFeedList] = useState<Feed[]>([])

  const [newTitle, isHashtag] = useMemo(() => {
    const queryParam = query.get('query')
    if (!queryParam) return ['Feed', false]

    return [`Trending for ${queryParam}`, true]
  }, [query])

  useEffect(() => {
    document.title = newTitle
  }, [newTitle])

  useEffect(() => {
    ;(async () => {
      const data = await FeedService.getTrendingFeed()
      setFeedList(data)
      console.log(data)
    })()
  }, [])

  return <FeedList feedList={feedList} />
}

export default TrendingFeedList
