import React, { FC, MouseEventHandler, useState } from 'react'
import { Feed } from '../../models/Feed'

interface FeedItemProps {
  feed: Feed
}

const FeedItem: FC<FeedItemProps> = ({ feed }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo: MouseEventHandler<HTMLVideoElement> = (event) => {
    const video = event.target as HTMLVideoElement
    if (video.paused) video.play()
    else video.pause()
    setIsPlaying(!video.paused)
  }

  return (
    <div className={'relative overflow-hidden'}>
      <video
        onClick={playVideo}
        className={'rounded-md object-cover'}
        width={feed.videoMeta.width}
        height={feed.videoMeta.height}
      >
        <source src={feed.videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      {isPlaying && feed.text}
    </div>
  )
}

export default FeedItem
