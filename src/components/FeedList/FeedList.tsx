import React, { useEffect, useMemo } from 'react'
import FeedService from '../../services/FeedService'
import { useLocation } from 'react-router-dom'

function FeedList() {
  const location = useLocation()
  const query = useMemo(() => {
    const query = new URLSearchParams(location.search)
    if (query.get('query')) {
      return query.get('query')
    } else if (location.hash) {
      return location.hash
    }
  }, [location.search, location.hash])

  useEffect(() => {
    if (!query) {
      document.title = 'Feed'
    } else {
      document.title = `Result for ${query}`
    }
  }, [query])

  return (
    <div className={'lg:flex justify-center items-center'}>
      Hi there {query}
    </div>
  )
}

export default FeedList
