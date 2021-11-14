import React, { FC, useEffect, useMemo, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import FeedList from './FeedList'
import { Feed } from '../../models/Feed'
import FeedService from '../../services/FeedService'

const TrendingFeedList: FC = () => {
  const query = useQuery()
  const queryParam = useMemo(() => query.get('query'), [query])
  const [feedList, setFeedList] = useState<Feed[]>([])

  const newTitle = useMemo(() => {
    if (!queryParam) return 'Feed'

    return `Trending for "${queryParam}\"`
  }, [queryParam])

  useEffect(() => {
    document.title = newTitle
  }, [newTitle])

  useEffect(() => {
    ;(async () => {
      const data = await FeedService.getTrendingFeed()
      setFeedList(data)
      console.log(data)
    })()
  }, [query])

  return <FeedList feedList={feedList} />
}

export default TrendingFeedList
