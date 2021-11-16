import React, { FC } from 'react'

const TheLoader: FC = (props) => {
  return (
    <div {...props} className="center">
      <div className="dot-1" />
      <div className="dot-2" />
      <div className="dot-3" />
    </div>
  )
}

export default TheLoader
