import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div
    className={
      'center m-auto flex flex-col text-center bg-pink-200 dark:bg-gray-500 p-6 rounded-2xl'
    }
  >
    <h1 className={'text-3xl sm:text-6xl mb-4'}>
      Page not found <br />
      404
    </h1>
    <h2 className={'text-xl sm:text-4xl'}>
      <span className={'mr-2'}>Please visit</span>
      <Link className={'underline'} to={'/'}>
        home page
      </Link>
    </h2>
  </div>
)

export default NotFound
