import React from 'react'

const Display = () => {
  return (
    <div>
      <section className="vh-100" style={{backgroundColor: "#39C0ED"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7" style={{color:"#39C0ED"}}>
        <div className="card" style={{borderRadius: "15px"}}>
          <div className="card-body p-5">

            <div className="text-center mb-4 pb-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-quotes/bulb.webp"
                alt="Bulb" width="100"/>
            </div>

            <figure className="text-center mb-0">
              <blockquote className="blockquote">
                <p className="pb-3">
                  <i className="fas fa-quote-left fa-xs text-primary"></i>
                  <span className="lead font-italic">Many of life's failures are people who did not realize how
                    close they were to success when they gave up.</span>
                  <i className="fas fa-quote-right fa-xs text-primary"></i>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0">
                Thomas Edison
              </figcaption>
            </figure>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Display
