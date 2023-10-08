import { Button } from './components'

export default function Home() {
  return (
    <main>
      <div className="container center">
        <section className="hero">
          <h1 className="heading">
            Exemple d'un site web avec le branding de&nbsp;
            <span className="fc-primary-600">Fleximed</span>
          </h1>
          <Button as="next-link" variant="primary">
            Découvrir
          </Button>
        </section>
      </div>
    </main>
  )
}
