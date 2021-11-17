import React, { FC, useEffect, useMemo, useState } from 'react'
import useQuery from '../../hooks/useQuery'
import FeedList from './FeedList'
import { Feed } from '../../models/Feed'
import FeedService from '../../services/FeedService'

interface WithDataProps {
  username?: string
  currentColumns?: number
  minColumns?: number
  maxColumns?: number
  showDescription?: boolean
}

const WithDataFeedList: FC<WithDataProps> = ({
  username,
  currentColumns = 1,
  minColumns = 1,
  maxColumns = 3,
  showDescription = false,
  children,
}) => {
  const query = useQuery()
  const queryParam = useMemo(() => query.get('query'), [query])
  const [feedList, setFeedList] = useState<Feed[]>([])

  const newTitle = useMemo(() => {
    if (username) return `${username}'s profile`
    if (!queryParam) return 'Trending'

    return `Trending for "${queryParam}"`
  }, [username, queryParam])

  useEffect(() => {
    document.title = newTitle
  }, [newTitle])

  useEffect(() => {
    setFeedList([])
    ;(async () => {
      const data = username
        ? await FeedService.getTrendingFeed() // FeedService.getUserFeed(username)
        : queryParam == null
        ? await FeedService.getTrendingFeed()
        : await FeedService.getHashtagFeed(queryParam)

      setFeedList(data)
    })()
  }, [username, queryParam, setFeedList])

  return (
    <>
      <h1
        className={
          'text-black font-yuji dark:text-gray-100 text-2xl md:text-5xl pl-7 mb-6 md:mb-16'
        }
      >
        {newTitle}
      </h1>
      {children}
      <FeedList
        showDescription={showDescription}
        currentColumns={currentColumns}
        minColumns={minColumns}
        maxColumns={maxColumns}
        className={'gap-4 gap-y-20'}
        feedList={feedList}
      />
    </>
  )
}

export default WithDataFeedList
