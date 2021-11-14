import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import UserInfo from '../components/UserInfo/UserInfo'
import TrendingFeedList from '../components/FeedList/TrendingFeedList'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendingFeedList />} />
      <Route path="/user/:username" element={<UserInfo />} />
    </Routes>
  )
}

export default AppRoutes
