import React, { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollToTop: FC = () => {
  const [visible, setVisible] = useState(false)

  function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > window.innerHeight && !visible) {
        setVisible(true)
      } else if (window.scrollY < window.innerHeight && visible) {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', listener)

    return () => window.removeEventListener('scroll', listener)
  }, [setVisible, visible])

  return (
    <>
      {visible && (
        <button
          aria-label={'Scroll to top'}
          className={
            'w-12 h-12 center fixed bottom-5 border-2 border-transparent right-5 text-2xl text-black bg-pink-200 rounded-full ' +
            'dark:bg-gray-600 dark:border-gray-300 dark:text-gray-100'
          }
          onClick={toTop}
        >
          <FontAwesomeIcon
            className={'animate-bounce'}
            icon={['fas', 'angle-double-up']}
          />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
