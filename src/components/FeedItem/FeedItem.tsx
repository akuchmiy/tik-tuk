import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import { Feed } from '../../models/Feed'
import './feedItem.css'
import FeedDescription from './FeedDescription'

interface FeedItemProps {
  feed: Feed
  size: number
  showDescription?: boolean
}

const FeedItem: FC<FeedItemProps> = ({
  feed,
  size,
  showDescription = false,
}) => {
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
    <div className={'w-full flex flex-col overflow-hidden mx-auto'}>
      {showDescription && (
        <FeedDescription
          authorMeta={feed.authorMeta}
          hashtags={feed.hashtags}
          text={feed.text}
        />
      )}
      <div className={'center relative'}>
        <div
          className={`video-mock-${size} bg-pink-200 dark:bg-gray-500 rounded-xl`}
        />
        {/*<video*/}
        {/*  controls*/}
        {/*  autoPlay={false}*/}
        {/*  onClick={playVideo}*/}
        {/*  className={`video-mock-${size} rounded-xl object-cover`}*/}
        {/*  {...feed.videoMeta}*/}
        {/*>*/}
        {/*  <source src={feed.videoUrl} type="video/mp4" />*/}
        {/*  Sorry, your browser doesn't support embedded videos.*/}
        {/*</video>*/}
        {/*<div>*/}
        {/*  {feed.commentCount} {feed.diggCount} {feed.createTime}*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default FeedItem
