import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import FeedList from '../FeedList/FeedList'

interface Params {
  username: string | undefined
}

const UserInfo: FC = () => {
  // @ts-ignore
  const { username } = useParams<Params>()

  return (
    <>
      <div>Hi there 2 {username} </div>
      <FeedList username={username} />
    </>
  )
}

export default UserInfo
