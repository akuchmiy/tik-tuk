import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

interface Params {
  userId: string | undefined
}

const UserInfo: FC = () => {
  // @ts-ignore
  const { userId } = useParams<Params>()

  return <div>SomeShit {userId} </div>
}

export default UserInfo
