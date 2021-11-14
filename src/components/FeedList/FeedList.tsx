import React, { FC, useEffect, useMemo } from 'react'
import FeedService from '../../services/FeedService'
import { useLocation } from 'react-router-dom'

interface Props {
  username?: string
}

const FeedList: FC<Props> = (props) => {
  const location = useLocation()
  const [newTitle, isHashtag] = useMemo(() => {
    const queryParam = new URLSearchParams(location.search).get('query')
    if (props?.username) return [`${props.username}'s profile`, false]
    if (queryParam) return [`Trending for ${queryParam}`, true]
    return ['Feed', false]
  }, [location.search, props.username])

  useEffect(() => {
    document.title = newTitle
  }, [newTitle])

  FeedService.pass()

  return (
    <div className={'lg:flex justify-center items-center'}>
      This is feed list {newTitle}
    </div>
  )
}

export default FeedList
