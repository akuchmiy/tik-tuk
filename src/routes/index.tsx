import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import UserTab from '../components/UserTab/UserTab'
import WithDataFeedList from '../components/FeedList/WithDataFeedList'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WithDataFeedList maxColumns={2} />} />
      <Route path="/user/:username" element={<UserTab />} />
    </Routes>
  )
}

export default AppRoutes
