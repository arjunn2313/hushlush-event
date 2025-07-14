import Link from "next/link";

export default function Section4() {
  return (
    <>
      <div className="event10-section-area sp3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="event-heading heading13 text-center space-margin60">
                <h5>
                  <img src="/assets/img/icons/sub-logo1.svg" alt="" />
                  What We Offer
                </h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">
                  Celebrate Life’s Finest Moments with Us
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="event6-widget-boxarea"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="img1 image-anime reveal">
                      <img
                        src="/assets/img/all-images/event/event 2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="content-area">
                      <h3 className="text-anime-style-3">
                        {" "}
                        “Timeless Weddings Tailored with Elegance and Emotion.””
                      </h3>
                      <div className="space24" />
                      <ul>
                        <li>
                          <Link href="#">
                            <img src="/assets/img/icons/clock1.svg" alt="" />
                            Full-day Planning
                          </Link>
                        </li>
                        <li className="space14" />
                        <li>
                          <Link href="#">
                            <img src="/assets/img/icons/location1.svg" alt="" />
                            Luxury Venues Across UAE
                          </Link>
                        </li>
                      </ul>
                      <div className="space32" />
                      <div className="btn-area1">
                        <a
                          href="https://wa.me/971551084366?text=Hi%2C%20I%27d%20like%20to%20plan%20my%20wedding%20with%20your%20team.%20Please%20share%20your%20packages%20and%20pricing."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vl-btn10 bg-gold"
                        >
                          Plan Your Wedding{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space50" />
              <div
                className="event6-widget-boxarea"
                data-aos="fade-right"
                data-aos-duration={1100}
              >
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="img1 image-anime reveal">
                      <img
                        src="/assets/img/all-images/event/event 5.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="content-area">
                      <h3 className="text-anime-style-3">
                        “Creative Birthday Parties Full of Joy & Personal
                        Touches.”
                      </h3>
                      <div className="space24" />
                      <ul>
                        <li>
                          <Link href="#">
                            <img src="/assets/img/icons/clock1.svg" alt="" />
                            Custom Themes & Decor
                          </Link>
                        </li>
                        <li className="space14" />
                        <li>
                          <Link href="#">
                            <img src="/assets/img/icons/location1.svg" alt="" />
                            Indoor & Outdoor Options
                          </Link>
                        </li>
                      </ul>
                      <div className="space32" />
                      <div className="btn-area1">
                        <a
                          href="https://wa.me/971551084366?text=Hi%2C%20I%27m%20excited%20to%20celebrate%20a%20special%20occasion%20with%20your%20team.%20Please%20share%20more%20details%20about%20your%20event%20services."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vl-btn10 bg-gold"
                        >
                          Celebrate With Us{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space50" />
              <div
                className="event6-widget-boxarea"
                data-aos="fade-left"
                data-aos-duration={1200}
              >
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="img1 image-anime reveal">
                      <img
                        src="/assets/img/all-images/event/cop-ev.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="content-area">
                      <h3 className="text-anime-style-3">
                        “Professional Corporate Events with Flawless Execution.”
                      </h3>
                      <div className="space24" />
                      <ul>
                        <li>
                          <Link href="#">
                            <img src="/assets/img/icons/clock1.svg" alt="" />
                            Half & Full Day Packages
                          </Link>
                        </li>
                        <li className="space14" />
                        <li>
                          <Link href="#">
                            <img src="/assets/img/icons/location1.svg" alt="" />
                            Hotels, Halls & Retreats
                          </Link>
                        </li>
                      </ul>
                      <div className="space32" />
                      <div className="btn-area1">
                        <a
                          href="https://wa.me/971551084366?text=Hi%2C%20I%27d%20like%20to%20make%20an%20inquiry%20about%20your%20services.%20Please%20let%20me%20know%20the%20details."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vl-btn10 bg-gold"
                        >
                          Enquire Now{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space30" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
