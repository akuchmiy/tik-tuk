import React, { FC } from 'react'
import { Feed } from '../../models/Feed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberService from '../../services/NumberService'

interface VideoStatisticsProps {
  feed: Feed
  className?: string
}

const VideoStatistics: FC<VideoStatisticsProps> = ({
  feed,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col gap-y-3.5 absolute bottom-5 right-2 text-black dark:text-gray-100 leading-5 ${className}`}
    >
      <button
        className={
          'relative w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full border-l-2 border-t-2 border-black dark:border-gray-100 transition-colors duration-100 hover:opacity-80'
        }
      >
        <FontAwesomeIcon className={'text-md'} icon={['fas', 'heart']} />
        <br />
        <span>{NumberService.formatNumber(feed.diggCount, 1)}</span>
      </button>
      <button
        className={
          'relative w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full border-l-2 border-t-2 border-black dark:border-gray-100 transition-colors duration-100 hover:opacity-80'
        }
      >
        <FontAwesomeIcon className={'text-md'} icon={['fas', 'comment']} />
        <br />
        <span>{NumberService.formatNumber(feed.commentCount, 1)}</span>
      </button>
    </div>
  )
}

export default VideoStatistics
