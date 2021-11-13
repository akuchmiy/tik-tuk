import React, { FC } from 'react'
import './App.css'
import TheHeader from './components/TheHeader/TheHeader'
import AppRoutes from './routes'
import TheFooter from './components/TheFooter/TheFooter'

const App: FC = () => {
  return (
    <>
      <TheHeader />
      <AppRoutes />
      <TheFooter />
    </>
  )
}

export default App
