import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import UserFeedList from '../FeedList/UserFeedList'

interface Params {
  username: string | undefined
}

const UserInfo: FC = () => {
  // @ts-ignore
  const { username } = useParams<Params>()

  return (
    <>
      <h1
        className={
          'text-black font-yuji dark:text-gray-100 text-5xl pl-7 mb-16'
        }
      >
        {`${username}'s profile`}
      </h1>
      <UserFeedList username={username} />
    </>
  )
}

export default UserInfo
