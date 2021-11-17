import React, { forwardRef, useCallback, useState } from 'react'
import { Feed } from '../../models/Feed'
import './feedItem.css'
import FeedDescription from './FeedDescription'
import VideoStatistics from './VideoStatistics'

interface FeedItemProps {
  feed: Feed
  size: number
  showDescription?: boolean
  onVideoEnd: (index: number) => void
  index: number
}

const FeedItem = forwardRef<HTMLVideoElement, FeedItemProps>(
  ({ feed, showDescription = false, onVideoEnd, index }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const playVideo = useCallback(
      async (
        event:
          | React.MouseEvent<HTMLVideoElement>
          | React.KeyboardEvent<HTMLVideoElement>
      ) => {
        if (
          event.nativeEvent instanceof KeyboardEvent &&
          event.nativeEvent?.key !== 'Enter'
        )
          return

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
            'group center relative ring-2 ring-offset-3 ring-pink-400 dark:ring-gray-100 shadow-2xl rounded-xl overflow-hidden'
          }
        >
          <span id={`${feed.createTime}`} className={'visually-hidden'}>
            {feed.text}
          </span>
          <video
            onEnded={() => onVideoEnd(index)}
            ref={ref}
            tabIndex={0}
            aria-label={
              isPlaying
                ? 'Press enter to stop the video'
                : 'Press enter to resume the video'
            }
            aria-describedby={`${feed.createTime}`}
            autoPlay={false}
            onClick={playVideo}
            onKeyPress={playVideo}
            className={`video object-cover cursor-pointer`}
            {...feed.videoMeta}
          >
            <source src={feed.videoUrl} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <VideoStatistics
            className={
              'absolute bottom-5 right-2 transform translate-x-20 group-hover:translate-x-0 transition-transform'
            }
            feed={feed}
          />
        </div>
      </div>
    )
  }
)

export default FeedItem
