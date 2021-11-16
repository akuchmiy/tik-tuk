import React, { FC, useEffect, useState } from 'react'
import { Feed } from '../../models/Feed'
import FeedItem from '../FeedItem/FeedItem'
import FeedControls from './FeedControls'
import configService from '../../config/configService'
import TheLoader from '../TheLoader/TheLoader'

interface FeedListProps {
  className?: string
  feedList: Feed[]
  currentColumns?: number
  minColumns?: number
  maxColumns?: number
}

const FeedList: FC<FeedListProps> = ({
  feedList,
  className,
  currentColumns = 1,
  minColumns = 1,
  maxColumns = 3,
}) => {
  const [columns, setColumns] = useState<number>(currentColumns)
  const itemSize = columns - 1
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const listener = () => {
      if (
        window.innerWidth < configService.FEED_LIST_BREAKPOINT &&
        !isSmallScreen
      ) {
        setIsSmallScreen(true)
        setColumns(1)
      } else if (
        window.innerWidth >= configService.FEED_LIST_BREAKPOINT &&
        isSmallScreen
      ) {
        setIsSmallScreen(false)
      }
    }
    listener()
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [isSmallScreen, setIsSmallScreen, setColumns])

  return (
    <>
      {feedList.length === 0 ? (
        <div className={'w-full center flex-grow'}>
          <TheLoader />
        </div>
      ) : (
        <div className={`grid grid-cols-${columns} ${className}`}>
          {feedList.map((feed) => (
            <FeedItem
              showDescription={columns !== maxColumns}
              size={itemSize}
              key={feed.id}
              feed={feed}
            />
          ))}
          {!isSmallScreen && (
            <FeedControls
              minColumns={minColumns}
              maxColumns={maxColumns}
              setColumns={setColumns}
              columns={columns}
            />
          )}
        </div>
      )}
    </>
  )
}

export default FeedList
