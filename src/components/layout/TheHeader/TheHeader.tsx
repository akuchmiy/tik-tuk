import React, { Profiler } from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from './HeaderSearch'

function TheHeader() {
  return (
    <header
      className={
        'h-16 bg-pink-50 p-4 rounded-br-3xl rounded-bl-3xl border-b-2 border-pink-200 fixed top-0 left-0 w-full dark:bg-gray-700 dark:text-pink-400'
      }
    >
      <div className="h-full main-container mx-auto flex justify-between items-center">
        <div
          className={
            'center font-yuji text-2xl sm:text-3xl h-full hover:drop-shadow-sm'
          }
        >
          <Link to="/">Tik Tuk</Link>
        </div>
        <Profiler
          id={'search'}
          onRender={function () {
            console.log(arguments)
          }}
        >
          <HeaderSearch />
        </Profiler>
      </div>
    </header>
  )
}

export default TheHeader
