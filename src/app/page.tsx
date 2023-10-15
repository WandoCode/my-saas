import Image from 'next/image'
import { Button } from '../components'
import { linksTo } from '../content'

export default function Home() {
  return (
    <div className="container center">
      <section className="hero">
        <div className="hero__container center">
          <h1 className="hero__title heading h1">
            Find quickly the{' '}
            <span className="fc-primary-600">healthcare worker</span> you need !
          </h1>
          <h2 className="heading subtitle">
            The effortless way to find the worker who fit your current need
          </h2>
          <div className="align hero__ctas">
            <Button
              href={linksTo.facilitiesHospitals}
              variant="primary"
              className="hero__btn-a"
            >
              Discover
            </Button>
            <Button
              href={linksTo.facilitiesScheduleDemo}
              variant="secondary"
              className="hero__btn-a"
            >
              Schedule a demo
            </Button>
          </div>
          <div className="hero__image hero-image">
            <div className="hero-image__container">
              <Image
                src="/placeholder.svg"
                alt="image demo"
                height={800}
                width={1200}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
