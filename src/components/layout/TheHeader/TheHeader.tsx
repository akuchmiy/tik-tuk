import React, { Profiler } from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from './HeaderSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TheHeader() {
  return (
    <header
      className={
        'h-16 bg-pink-50 p-4 rounded-br-3xl rounded-bl-3xl border-b-2 border-pink-200 fixed top-0 left-0 w-full ' +
        'dark:bg-gray-700 dark:text-gray-100 dark:border-gray-100 shadow-md z-50'
      }
    >
      <div className="h-full main-container mx-auto flex justify-between items-center">
        <div
          className={
            'group center font-yuji text-2xl sm:text-3xl h-full hover:drop-shadow-sm'
          }
        >
          <Link className={'flex align-baseline'} to="/">
            <span>Tik Tuk</span>
            <span
              className={
                'center ml-2 p-2.5 text-2xl rounded-full group-hover:bg-black group-hover:text-white transition-colors ' +
                'dark:text-white dark:group-hover:bg-white dark:group-hover:text-black'
              }
            >
              <FontAwesomeIcon icon={['fas', 'music']} />
            </span>
          </Link>
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
