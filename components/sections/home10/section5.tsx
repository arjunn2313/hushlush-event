import Link from "next/link";

export default function Section5() {
  return (
    <>
      <div className="team10-section-area sp3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="heading13 text-center space-margin60">
                <h5>
                  <img src="/assets/img/icons/sub-logo1.svg" alt="" />
                  Our Office
                </h5>
                <div className="space20" />
                <h2>Visit Our Hush Lush Headquarters</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-4">
							<div className="team10-widget-boxarea">
								<div className="img1 image-anime">
									<img src="/assets/img/all-images/team/of.png" alt="" />
								</div>
								<div className="text-area">
									<Link href="/speakers-single">Alex Carter</Link>
									<div className="space16" />
									<p>CEO, TechX Solution</p>
								</div>
							</div>
							<div className="space30" />
						</div> */}

            <div className="col-lg-4">
              {/* <div className="h-full">
                <div className="img1 image-anime bg-transparent">
                  <video
                    src="/assets/videos/office-tour.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="text-area  flex justify-center align-center text-light p-2 rounded-3">
                  <img src="/assets/img/logo/h-logo.png" alt="" />
                </div>


              </div> */}
<div className="h-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
      <div className="mb-4">
        <img
          src="/assets/img/logo/h-logo.png"
          alt="Hush Lush Logo"
          className="img-fluid"
          style={{ maxWidth: '400px' }}
        />
      </div>
    
    </div>


              <div className="space30" />
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="team10-widget-boxarea2">
                    <div className="img1 image-anime">
                      <img src="/assets/img/all-images/team/of-1.png" alt="" />
                    </div>
                    {/* <div className="text-area">
											<Link href="/speakers-single">Autumn Phillips</Link>
											<div className="space16" />
											<p>AI Research Lead</p>
										</div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team10-widget-boxarea2">
                    <div className="img1 image-anime">
                      <img src="/assets/img/all-images/team/of-2.png" alt="" />
                    </div>
                    {/* <div className="text-area">
											<Link href="/speakers-single">James Hall</Link>
											<div className="space16" />
											<p>Cybersecurity Expert</p>
										</div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team10-widget-boxarea2">
                    <div className="img1 image-anime">
                      <img src="/assets/img/all-images/team/of-4.png" alt="" />
                    </div>
                    {/* <div className="text-area">
											<Link href="/speakers-single">Alex Buckmaster</Link>
											<div className="space16" />
											<p>Branding</p>
										</div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team10-widget-boxarea2">
                    <div className="img1 image-anime">
                      <img src="/assets/img/all-images/team/of-5.png" alt="" />
                    </div>
                    {/* <div className="text-area">
											<Link href="/speakers-single">Jerry Helfer</Link>
											<div className="space16" />
											<p>Quantum Technologies</p>
										</div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team10-widget-boxarea2">
                    <div className="img1 image-anime">
                      <img src="/assets/img/all-images/team/of-6.png" alt="" />
                    </div>
                    {/* <div className="text-area">
											<Link href="/speakers-single">Dennis Callis</Link>
											<div className="space16" />
											<p>GreenTech Innovations</p>
										</div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team10-widget-boxarea2">
                    <div className="img1 image-anime">
                      <img src="/assets/img/all-images/team/of-3.png" alt="" />
                    </div>
                    {/* <div className="text-area">
											<Link href="/speakers-single">Chris Glasser</Link>
											<div className="space16" />
											<p>Head of User Experience</p>
										</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
