import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Feed } from '../../models/Feed'
import './feedItem.css'

interface FeedItemProps {
  feed: Feed
  size: number
}

const FeedItem: FC<FeedItemProps> = ({ feed, size }) => {
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
      {/*instead of video*/}
      <div className={'flex flex-grow'}>
        <Link to={`/user/${feed.authorMeta.name}`}>
          <img
            className={'w-14 h-14 object-cover rounded-full'}
            src={feed.authorMeta.avatar}
            alt={`${feed.authorMeta.name}'s avatar`}
          />
          <span>{feed.authorMeta.name}</span>
        </Link>
      </div>
      <div className={'center relative'}>
        {/*<div className={`w-full h-96 bg-pink-200 dark:bg-gray-500`} />*/}
        <div className={`video-mock-${size} bg-pink-200 dark:bg-gray-500`} />
        {/*<div>*/}
        {/*  {feed.commentCount} {feed.diggCount} {feed.createTime}*/}
        {/*</div>*/}
      </div>
      {/*<video*/}
      {/*  controls*/}
      {/*  autoPlay={false}*/}
      {/*  onClick={playVideo}*/}
      {/*  className={'rounded-xl object-cover'}*/}
      {/*  {...feed.videoMeta}*/}
      {/*>*/}
      {/*  <source src={feed.videoUrl} type="video/mp4" />*/}
      {/*  Sorry, your browser doesn't support embedded videos.*/}
      {/*</video>*/}
    </div>
  )
}

export default FeedItem
