import Image from 'next/image'

function App() {
  return (
    <div className="container">
      <section className="app">
        <div className="app__header">
          <h1 className="heading h1 h1--small">
            Find missions: where and when you want!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <Image
          className="app__img"
          src={'/placeholder.svg'}
          width={400}
          height={400}
          alt=""
        />

        <div className="app__stores-links center">
          <a href="https://play.google.com/store/apps?hl=fr&gl=US">
            <Image
              className="app__badge"
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              height={100}
              width={200}
            />
          </a>
          <a href="https://www.apple.com/app-store/">
            <Image
              className="app__badge app__badge--apple"
              src="/Download_on_the_App_Store_Badge_US.svg"
              alt="Download on the App Store"
              height={100}
              width={200}
            />
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
