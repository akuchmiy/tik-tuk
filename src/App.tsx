import React, { FC } from 'react'
import './App.css'
import TheHeader from './components/TheHeader/TheHeader'
import AppRoutes from './routes'
import TheFooter from './components/TheFooter/TheFooter'

const App: FC = () => {
  return (
    <div className={'h-screen flex flex-col'}>
      <TheHeader />
      <main className={'flex-grow mt-16'}>
        <AppRoutes />
      </main>
      <TheFooter />
    </div>
  )
}

export default App
