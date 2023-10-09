import { Button } from './components'

export default function Home() {
  return (
    <main>
      <div className="container center">
        <section className="hero">
          <div className="hero__container center">
            <h1 className="heading h1">
              Exemple d'un site web avec le branding de&nbsp;
              <span className="fc-primary-600">Fleximed</span>
            </h1>
            <h2 className="heading subtitle">
              Find easily healthcare worker you can trust!
            </h2>
            <div className="align hero__ctas">
              <Button as="next-link" variant="primary" className="hero__btn-a">
                Découvrir
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
