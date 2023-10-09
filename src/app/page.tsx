import { Button } from './components'

export default function Home() {
  return (
    <main>
      <div className="container center">
        <section className="hero">
          <div className="hero__container center">
            <h1 className="hero__title heading h1">
              Discover&nbsp;
              <span className="fc-primary-600">Fleximed</span>
            </h1>
            <h2 className="heading subtitle">
              Find easily healthcare worker you can trust!
            </h2>
            <div className="align hero__ctas">
              <Button as="next-link" variant="primary" className="hero__btn-a">
                Discover
              </Button>
              <Button
                as="next-link"
                variant="secondary"
                className="hero__btn-a"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
