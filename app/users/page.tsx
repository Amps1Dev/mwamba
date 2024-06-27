import React from 'react'


/*#didn't know what to type so....*/
const pages = () => {
  return (
    <>
  <title>MAPS | Civilized public transportation</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, user-scalable=no"
  />
  <link rel="stylesheet" href="assets/css/main.css" />
  <link rel="shortcut icon" href="images/favicon.ico" />


  {/* Header */}
  <header id="header">
    <div className="inner">
      <nav id="nav">
        <a href="index.html">Home</a>
        <a href="routes.html">Routes</a>
        <a href="parking.html" className="active">
          Parking
        </a>
      </nav>
    </div>
  </header>
  <a href="#menu" className="navPanelToggle">
    <span className="fa fa-bars" />
  </a>
  {/* Main */}
  <section id="main">
    <div className="inner">
      <header className="major special">
        <h1>Directions &amp; Maps</h1>
      </header>
    </div>
  </section>
  <section id="one" className="light-gray">
    <div className="inner">
      <header>
        <h2>Directions to your destination</h2>
      </header>
      <p>Check-in, Packet Pick-up, Start Line, and finish </p>
    </div>
  </section>
  <section id="one">
    <div className="inner">
      <header className="major special">
        <h2>Where to Drop off from</h2>
      </header>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1TCjsHTTjO30n4QlxjJt2D_q6nFxvzCk&ehbc=2E312F"
        width="100%"
        height={640}
      />
    </div>
  </section>
  {/* Footer */}
  <section id="footer" className="houndstooth">
    <div className="inner">
      <p className="right">
        The "Civilized public transportation" is here to change the public
        transportation{" "}
        <a href="https://www.meetup.com/Redwood-Shores-Cycling-Meetup/">
          Redwood Shores Cycling Meetup
        </a>
        .
      </p>
    </div>
  </section>
  {/* Scripts */}
</>

  )
}

export default pages