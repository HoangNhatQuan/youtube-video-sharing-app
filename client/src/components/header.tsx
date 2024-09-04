import { useNavigate } from 'react-router-dom'

import Container from './container'
import { HeroIconSolid } from './icons'

const Logo = ({ onNavigate }: { onNavigate: () => void }) => (
  <div onClick={onNavigate} className="flex flex-row gap-2 items-center">
    <HeroIconSolid.VideoCameraIcon className="text-default w-16 h-16" />
    <h5 className="text-default font-bold">Next.js Blog</h5>
  </div>
)

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="sticky top-0 z-50 bg-[#EFD8D0] p-4">
      <Container bodyClassName="flex-row  justify-between !px-0">
        <Logo onNavigate={() => navigate('/')} />
        <div className="flex flex-row items-center gap-4">
          <h5>Welcome, Guest</h5>
          <button
            onClick={() => navigate('/sharing')}
            className="btn btn-primary bg-[#816557]"
          >
            Share a movie
          </button>
          <button className="btn btn-warning">Logout</button>
        </div>
      </Container>
    </div>
  )
}
