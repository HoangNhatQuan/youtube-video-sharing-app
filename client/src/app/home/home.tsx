import { useInfiniteQuery } from 'react-query'

import { getVideos } from '@/apis/video/video.api'
import Container from '@/components/container'
import VideoList from './videos'
import Notifications from './notifications'

export default function Home() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery(
    'videos',
    ({ pageParam = 1 }) => getVideos({ page: pageParam, pageSize: 10 }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.currentPage < lastPage.totalPages) {
          return lastPage.currentPage + 1
        }
        return undefined
      },
    },
  )

  const videos = data ? data.pages.flatMap((page) => page.items) : []

  if (isLoading) return <div className="m-auto">Loading...</div>
  if (isError) return <div className="m-auto">Error: unknown error</div>

  return (
    <Container
      isMaxWidth={false}
      bodyClassName="flex-col !px-0 gap-4 max-w-screen-md pt-4"
    >
      <div className="flex flex-row justify-between items-center ">
        <h3 className="font-bold">New Feeds</h3>
        <Notifications />
      </div>
      <VideoList
        videos={videos}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </Container>
  )
}
