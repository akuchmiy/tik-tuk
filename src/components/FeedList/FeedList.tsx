import React, { FC, memo, useEffect, useRef, useState } from 'react'
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
  showDescription?: boolean
}

const FeedList: FC<FeedListProps> = memo(
  ({
    feedList,
    className,
    currentColumns = 1,
    minColumns = 1,
    maxColumns = 3,
    showDescription = false,
  }) => {
    const [columns, setColumns] = useState<number>(currentColumns)
    const itemSize = columns - 1
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const videoRefs = useRef<HTMLVideoElement[]>([])

    const onVideoEnd = async (index: number) => {
      if (index + 1 >= videoRefs.current.length) return
      const nextVideo = videoRefs.current[index + 1]

      try {
        await nextVideo.play()
      } catch (e) {}

      const rect = nextVideo.getBoundingClientRect()
      window.scrollTo({
        top: rect.top + window.scrollY - rect.height / 5,
        left: 0,
        behavior: 'smooth',
      })
    }

    useEffect(() => {
      const callback = async (entries: IntersectionObserverEntry[]) => {
        if (columns !== 1) return
        const entry = entries[0]
        const video = entry.target as HTMLVideoElement
        if (entry.isIntersecting) {
          videoRefs.current.forEach((vid) => vid.pause())
          try {
            await video.play()
          } catch (e) {}
        } else {
          video.pause()
        }
      }
      const observer = new IntersectionObserver(callback, {
        threshold: 0.5,
      })
      videoRefs.current.forEach((videoElem) => {
        if (videoElem instanceof Element) {
          observer.observe(videoElem)
        }
      })
      return () => observer.disconnect()
    }, [feedList, columns])

    useEffect(() => {
      videoRefs.current = videoRefs.current.slice(0, feedList.length)
    }, [feedList])

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
            {/*<button onClick={() => console.log(videoRefs.current)}>Lol</button>*/}
            {feedList.map((feed, index) => (
              <FeedItem
                ref={(el) =>
                  (videoRefs.current[index] = el as HTMLVideoElement)
                }
                showDescription={
                  showDescription ? true : columns !== maxColumns
                }
                size={itemSize}
                key={feed.id}
                feed={feed}
                index={index}
                onVideoEnd={onVideoEnd}
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
)

export default FeedList
