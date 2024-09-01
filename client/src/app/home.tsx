import Container from '@/components/container'

export default function Home() {
  return (
    <div className="pt-32">
      <Container>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UaaXEX-MGuk"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </Container>
    </div>
  )
}
