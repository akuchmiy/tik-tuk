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

    return `Trending for "${queryParam}"`
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
  }, [query, setFeedList])

  return (
    <>
      <h1
        className={
          'text-black font-yuji dark:text-gray-100 text-5xl pl-7 mb-16'
        }
      >
        Trending <br />
        {queryParam ? `for "${queryParam}"` : ''}
      </h1>
      <FeedList className={'gap-4'} feedList={feedList} />
    </>
  )
}

export default TrendingFeedList
