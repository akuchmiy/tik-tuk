import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import UserTab from '../components/UserTab/UserTab'
import WithDataFeedList from '../components/FeedList/WithDataFeedList'
import NotFound from './NotFound'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<WithDataFeedList maxColumns={2} showDescription={true} />}
      />
      <Route path="/user/:username" element={<UserTab />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
