
import BrandSlider from '@/components/slider/BrandSlider'
import Link from 'next/link'

export default function Section8() {
	return (
		<>

			<div className="brands10-section-area sp8">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 m-auto">
							<div className="brand-header heading4 space-margin60 text-center">
							 {/* <h3>HushLush Group — 4 Brands. One Legacy of Excellence.</h3> */}
 
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
						{/* <BrandSlider /> */}
						</div>
					</div>
				</div>
				<div className="space60" />
				<div className="contact10-bg-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="space48" />
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="contact-boxarea   " data-aos="zoom-in" data-aos-duration={900}>
											<div className="icons bg-gold ">
												<img src="/assets/img/icons/mail1.svg" alt=""   />
											</div>
											<div className="text">
												<h5>Our Email</h5>
												<div className="space14" />
												<Link href="/hushlushevents@gmail.com">hushlush@gmail.com</Link>
											</div>
										</div>
										<div className="space18" />
										<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
											<div className="icons">
												<img src="/assets/img/icons/location1.svg" alt="" />
											</div>
											<div className="text">
												<h5>our location</h5>
												<div className="space14" />
												<Link href="/#">UAE</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="space20 d-md-none d-block" />
										<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
											<div className="icons">
												<img src="/assets/img/icons/phn1.svg" alt="" />
											</div>
											<div className="text">
												<h5>Call/Message</h5>
												<div className="space14" />
												<Link href="/tel:+11234567890">+1 123 456 7890</Link>
											</div>
										</div>
										<div className="space18" />
										<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
											<div className="icons">
												<img src="/assets/img/icons/instagram.svg" alt="" />
											</div>
											<div className="text">
												<h5>Instagram</h5>
												<div className="space14" />
												<Link href="/#">hushlushevents</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="space48" />
							</div>
						</div>
					</div>
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.806660140149!2d55.3864222!3d25.344268000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b4ad1f84c95%3A0x905e1932b1c879a2!2sAfaq%20Alkhaleej%20Management%20Consultants!5e0!3m2!1sen!2sin!4v1752236298790!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
