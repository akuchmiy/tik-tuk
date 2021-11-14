import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import FeedList from '../components/FeedList/FeedList'
import UserInfo from '../components/UserInfo/UserInfo'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedList />} />
      <Route path="/user/:username" element={<UserInfo />} />
    </Routes>
  )
}

export default AppRoutes
