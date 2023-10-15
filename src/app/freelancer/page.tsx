import { Button } from '../../components'
import { linksTo } from '../../content'

function Freelancer() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero__container center">
          <h1 className="hero__title heading h1">
            Find missions easily and{' '}
            <span className="fc-primary-600">get paid quickly!</span>
          </h1>

          <h2 className="heading subtitle">
            Sign up for missions from our app and get paid within 2 weeks after
            we recievied your invoice
          </h2>

          <Button href={linksTo.app}>Download</Button>
        </div>
      </section>
    </div>
  )
}

export default Freelancer
