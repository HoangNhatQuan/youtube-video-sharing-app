import { useEffect, useRef } from 'react'

import { IVideo } from '@/apis/video/video.type'
import VideoCard from './card'

type VideoListProps = {
  videos: IVideo[]
  isFetchingNextPage: boolean
  hasNextPage?: boolean
  fetchNextPage: () => void
}

export default function VideoList({
  videos,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: VideoListProps) {
  const loader = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 },
    )

    if (loader.current) {
      observer.observe(loader.current)
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!videos.length) {
    return <div className="m-auto">No videos</div>
  }

  return (
    <div className="flex flex-col items-center">
      {videos.length &&
        videos.map((video) => (
          <VideoCard key={video.videoYtbId} video={video} />
        ))}
      {hasNextPage && (
        <div ref={loader} className="loading">
          Loading more...
        </div>
      )}
    </div>
  )
}
