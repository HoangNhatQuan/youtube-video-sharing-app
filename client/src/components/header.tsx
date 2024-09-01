import Container from './container'
import { HeroIconSolid } from './icons'

const Logo = () => (
  <div className="flex flex-row gap-2 items-center">
    <HeroIconSolid.VideoCameraIcon className="text-default w-16 h-16" />
    <h5 className="text-default font-bold">Next.js Blog</h5>
  </div>
)

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-[#EFD8D0] p-4">
      <Container bodyClassName="flex-row  justify-between !px-0">
        <Logo />
        <div className="flex flex-row items-center gap-4">
          <h5>Welcome, Guest</h5>
          <button className="btn btn-primary bg-[#816557]">
            Share a movie
          </button>
          <button className="btn btn-warning">Logout</button>
        </div>
      </Container>
    </div>
  )
}
