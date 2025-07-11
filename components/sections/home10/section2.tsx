"use client";
import CountUp from "react-countup";
import Link from "next/link";

export default function Section2() {
  return (
    <>
      <div className="about10-section-area sp1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about10-images">
                <img
                  src="/assets/img/all-images/about/author-img2.png"
                  alt=""
                  className="about-img10 aniamtion-key-1"
                />
                <div
                  className="img1"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <img
                    src="/assets/img/all-images/about/1.png"
                    alt=""
                  />
                </div>
                <div
                  className="img2"
                  data-aos="zoom-in"
                  data-aos-duration={1100}
                >
                  <img
                    src="/assets/img/all-images/about/5.png"
                    alt=""
                  />
                </div>
                <div
                  className="img3"
                  data-aos="zoom-in"
                  data-aos-duration={1200}
                >
                  <img
                    src="/assets/img/all-images/about/2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-header heading13">
                <h5 data-aos="fade-left" data-aos-duration={800}>
                  <img src="/assets/img/icons/sub-logo1.svg" alt="" /> About
                  Hush Lush
                </h5>
                <div className="space18" />
                <h2 className="text-anime-style-3">
                  Crafting Elegant & Unforgettable Weddings
                </h2>
                <div className="space18" />
                <p data-aos="fade-left" data-aos-duration={900}>
                  At Hush Lush Wedding Planners, we specialize in curating
                  bespoke wedding experiences that blend cultural richness with
                  timeless elegance. From lavish celebrations to intimate
                  gatherings, our expert team turns your dream day into a
                  beautifully orchestrated reality—designed with precision,
                  passion, and luxury in every detail.
                </p>
                <div className="space12" />
                <div
                  className="counter-area"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <div className="counter-box">
                    <h3>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={100}
                      />
                      +
                    </h3>
                    <div className="space18" />
                    <p>Weddings Planned</p>
                  </div>
                  <div className="counter-box">
                    <h3>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={30}
                      />
                      +
                    </h3>
                    <div className="space18" />
                    <p>Luxury Venues</p>
                  </div>
                  <div className="counter-box" style={{ border: "none" }}>
                    <h3>
                      <CountUp
                        className="odometer"
                        enableScrollSpy={true}
                        end={500}
                      />
                      +
                    </h3>
                    <div className="space18" />
                    <p>Happy Couples</p>
                  </div>
                </div>
                <div className="space32" />
                <div
                  className="btn-area1"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  {/* <Link href="/about" className="vl-btn10 bg-gold">
                    Discover More{" "}
                    <img src="/assets/img/icons/arrow2.svg" alt="" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
