import Link from "next/link";

export default function Section3() {
  return (
    <>
      <div className="attent10-section-area sp3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="heading13 text-center space-margin60">
                <h5>
                  <img src="/assets/img/icons/sub-logo1.svg" alt="" />
                  WHY CHOOSE US
                </h5>
                <div className="space20" />
                <h2 className="text-anime-style-3">
                  Experience the Art of Effortless Elegance
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
                  <div className="col-lg-5">
                    <div className="content-area">
                      <h3 className="text-anime-style-3">
                        “Celebrate your love story at the most breathtaking
                        wedding destinations.”
                      </h3>
                      <div className="space16" />
                      <p>
                        At Hush Lush, we turn your vision into a luxurious,
                        personalized experience. From venue styling to cultural
                        rituals and entertainment, every element is tailored to
                        perfection. Let us design your big day with elegance,
                        tradition, and flair — stress-free.
                      </p>
                      <div className="space32" />
                      <div className="btn-area1 ">
                        <Link href="/weddings" className="vl-btn10 bg-gold">
                          Explore Our Weddings{" "}
                          <img src="/assets/img/icons/arrow2.svg" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1" />
                  <div className="col-lg-6">
                    <div className="img1 image-anime reveal">
                      <img
                        src="/assets/img/all-images/event/event2.jpg"
                        alt="Luxury Wedding Scene"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

		 

          {/* <div className="space30" />
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="schedule-boxarea">
                <h4>15 - 17 January</h4>
                <div className="space40" />
                <div className="images">
                  <img
                    src="/assets/img/elements/elements39.png"
                    alt=""
                    className="elements37"
                  />
                  <img
                    src="/assets/img/elements/elements39.png"
                    alt=""
                    className="elements38"
                  />
                  <img
                    src="/assets/img/elements/elements39.png"
                    alt=""
                    className="elements39"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="schedule-boxarea">
                <h4>20 Speakers</h4>
                <div className="space16" />
                <div className="images2">
                  <img
                    src="/assets/img/elements/elements40.png"
                    alt=""
                    className="elements37"
                  />
                  <img
                    src="/assets/img/elements/elements40.png"
                    alt=""
                    className="elements38"
                  />
                  <img
                    src="/assets/img/elements/elements40.png"
                    alt=""
                    className="elements39"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="schedule-boxarea">
                <h4>550 Tickets</h4>
                <div className="space74" />
                <div className="images3">
                  <img
                    src="/assets/img/elements/elements41.png"
                    alt=""
                    className="elements37"
                  />
                  <img
                    src="/assets/img/elements/elements41.png"
                    alt=""
                    className="elements38"
                  />
                  <img
                    src="/assets/img/elements/elements41.png"
                    alt=""
                    className="elements39"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
