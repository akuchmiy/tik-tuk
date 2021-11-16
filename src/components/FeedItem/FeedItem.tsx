import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import { Feed } from '../../models/Feed'
import './feedItem.css'
import FeedDescription from './FeedDescription'
import VideoStatistics from './VideoStatistics'

interface FeedItemProps {
  feed: Feed
  size: number
  showDescription?: boolean
}

const FeedItem: FC<FeedItemProps> = ({ feed, showDescription = false }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo: MouseEventHandler<HTMLVideoElement> = useCallback(
    async (event) => {
      const video = event.target as HTMLVideoElement
      if (video.paused) {
        try {
          await video.play()
        } catch (e) {}
      } else video.pause()
      setIsPlaying(!video.paused)
    },
    [setIsPlaying]
  )

  return (
    <div className={'flex flex-col mx-auto'}>
      {showDescription && (
        <FeedDescription
          authorMeta={feed.authorMeta}
          hashtags={feed.hashtags}
          text={feed.text}
        />
      )}
      <div
        className={
          'center relative dark:ring-gray-100 ring-2 ring-pink-400 ring-offset-3 shadow-2xl drop-shadow-2xl rounded-xl overflow-hidden'
        }
      >
        {/*<div*/}
        {/*  className={`video-mock-${size} bg-pink-200 dark:bg-gray-500 rounded-xl`}*/}
        {/*/>*/}
        <video
          aria-label={feed.text}
          autoPlay={false}
          onClick={playVideo}
          className={`video object-cover`}
          {...feed.videoMeta}
        >
          <source src={feed.videoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <VideoStatistics feed={feed} />
      </div>
    </div>
  )
}

export default FeedItem
