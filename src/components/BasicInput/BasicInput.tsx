import React, { FC, forwardRef } from 'react'

const BasicInput: FC<any> = forwardRef<HTMLInputElement>((props: any, ref) => {
  let classes = 'text-md sm:text-xl rounded-xl p-2'
  const { className, ...rest } = props

  if (className) {
    classes += ' ' + className
  }

  return <input className={classes} ref={ref} {...rest} type="text" />
})

export default BasicInput
