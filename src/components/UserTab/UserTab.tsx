import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WithDataFeedList from '../FeedList/WithDataFeedList'
import UserInfo from './UserInfo'
import userService from '../../services/userService'
import { UserData } from '../../models/UserData'
import TheLoader from '../TheLoader/TheLoader'

interface Params {
  username: string | undefined
}

const UserTab: FC = () => {
  // @ts-ignore
  const { username } = useParams<Params>()
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    setUserData(null)
    ;(async () => {
      const data = await userService.getUserInfo(username)
      console.log(data)
      setUserData(data)
    })()
  }, [username])

  return (
    <>
      {userData ? (
        <WithDataFeedList currentColumns={3} username={username}>
          <UserInfo userData={userData} />
        </WithDataFeedList>
      ) : (
        <TheLoader className={'m-auto'} />
      )}
    </>
  )
}

export default UserTab
