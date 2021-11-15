import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Feed } from '../../models/Feed'
import './feedItem.css'

interface FeedItemProps {
  feed: Feed
}

const FeedItem: FC<FeedItemProps> = ({ feed }) => {
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
    <div className={'relative flex flex-col overflow-hidden mx-auto'}>
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
      <div className={'center'}>
        <div className={'h-96 w-52 bg-pink-200 dark:bg-gray-500'} />
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
