import React, { FC } from 'react'
import './App.css'
import TheHeader from './components/layout/TheHeader/TheHeader'
import AppRoutes from './routes'
import TheFooter from './components/layout/TheFooter/TheFooter'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

console.log(document.cookie)

const App: FC = () => {
  return (
    <div className={'h-screen flex flex-col'}>
      <TheHeader />
      <main className={'bg-pink-50 flex-grow mt-16 dark:bg-gray-600'}>
        <div className={'main-container mx-auto pt-6'}>
          <AppRoutes />
        </div>
      </main>
      <ScrollToTop />
      <TheFooter />
    </div>
  )
}

export default App
