import { IVideo } from '@/apis/video/video.type'

export default function VideoCard({ video }: { video: IVideo }) {
  return (
    <div className="card flex flex-row justify-between items-start p-4 bg-white shadow-lg rounded-lg mb-4">
      <div className="w-1/3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-40 rounded-md"
        />
      </div>
      <div className="w-2/3 pl-4">
        <h5 className="font-bold mb-2">{video.title}</h5>
        <p className="text-secondary text-base">Shared by: {video.videoId}</p>
        <div className="flex items-center mt-2"></div>
      </div>
    </div>
  )
}
