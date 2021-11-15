import React, { FC, forwardRef } from 'react'

const BasicInput: FC<any> = forwardRef<HTMLInputElement>((props: any, ref) => {
  const { className, ...rest } = props

  return (
    <input
      className={
        'text-md sm:text-xl rounded-2xl p-2 border-2 border-pink-200 focus:outline-none focus:border-pink-300 ' +
        'dark:bg-gray-700 dark:text-gray-100 dark:border-gray-200 dark:focus:bg-gray-600 dark:placeholder-gray-100 ' +
        className
      }
      ref={ref}
      {...rest}
      type="text"
    />
  )
})

export default BasicInput
