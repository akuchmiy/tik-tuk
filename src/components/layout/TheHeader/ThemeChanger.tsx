import React, { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThemeChanger: FC = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const scheme = '(prefers-color-scheme: dark)'
    if (window?.matchMedia(scheme).matches) {
      setIsDark(true)
    }

    const listener = (e: any) => {
      setIsDark(e.matches)
    }

    window.matchMedia(scheme).addEventListener('change', listener)
    return () =>
      window.matchMedia(scheme).removeEventListener('change', listener)
  }, [])

  const classNames =
    'w-10 h-10 rounded-full absolute text-xl border-2 right-3 top-3'
  return (
    <>
      {!isDark ? (
        <button
          aria-hidden={true}
          className={`text-black border-black ${classNames}`}
          onClick={() => setIsDark(true)}
        >
          <FontAwesomeIcon icon={['fas', 'moon']} />
        </button>
      ) : (
        <button
          aria-hidden={true}
          className={`text-white border-pink-100 ${classNames}`}
          onClick={() => setIsDark(false)}
        >
          <FontAwesomeIcon icon={['fas', 'sun']} />
        </button>
      )}
    </>
  )
}

export default ThemeChanger
