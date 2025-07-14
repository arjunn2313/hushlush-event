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
                        <Link href="/pricing-plan" className="vl-btn10 bg-gold">
                         Plan Your Wedding{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </Link>
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
                        <Link href="/pricing-plan" className="vl-btn10 bg-gold">
                         Celebrate With Us{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </Link>
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
                          <Link href="#"><img src="/assets/img/icons/clock1.svg" alt="" />Half & Full Day Packages</Link>
                        </li>
                        <li className="space14" />
                        <li>
                          <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Hotels, Halls & Retreats</Link>
                        </li>
                      </ul>
                      <div className="space32" />
                      <div className="btn-area1">
                        <Link href="/pricing-plan" className="vl-btn10 bg-gold">
                           Enquire Now{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </Link>
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
