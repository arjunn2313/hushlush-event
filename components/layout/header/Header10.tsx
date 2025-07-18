import Link from 'next/link'

export default function Header10({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	return (
		<>
			<header>
				<div className={`header-area homepage10 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo ">
										<Link href="/"><img className='' src="/assets/img/logo/h-logo.png" alt="" /></Link>
									</div>
									{/* <div className="main-menu">
										<ul>
											<li>
												<Link href="/#">Home <i className="fa-solid fa-angle-down" /></Link>
												<div className="tp-submenu">
													<div className="row">
														<div className="col-lg-12">
															<div className="all-images-menu">
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img1.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/">Eventify-Homepage 01</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img2.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index2"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index2">Eventify-Homepage 02</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img3.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index3"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index3">Eventify-Homepage 03</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img4.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index4"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index4">Eventify-Homepage 04</Link>
																	</div>
																</div>
																<div className="homemenu-thumb" style={{ margin: 0 }}>
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img5.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index5"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index5">Eventify-Homepage 05</Link>
																	</div>
																</div>
															</div>
															<div className="all-images-menu">
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img6.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index6"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index6">Eventify-Homepage 06</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img7.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index7"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index7">Eventify-Homepage 07</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img8.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index8"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index8">Eventify-Homepage 08</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img9.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index9"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index9">Eventify-Homepage 09</Link>
																	</div>
																</div>
																<div className="homemenu-thumb" style={{ margin: 0 }}>
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img10.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn10" href="/index10"><span className="demo">View Demo <img src="/assets/img/icons/arrow2.svg" alt="" /></span></Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index10">Eventify-Homepage 10</Link>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li><Link href="/about">About Event</Link></li>
											<li>
												<Link href="/#">Speakers <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/speakers">Speakers</Link></li>
													<li><Link href="/speakers-single">Speakers Details</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/#">Schedule <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/event">Our Event</Link></li>
													<li><Link href="/event-schedule">Event Schedule</Link></li>
													<li><Link href="/event-single">Event Details</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/#">Blogs <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/blog">Our Blog</Link></li>
													<li><Link href="/blog-single">Blog Details</Link></li>
												</ul>
											</li>
											<li>
												<Link href="/#">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/memories">Our Memories</Link></li>
													<li><Link href="/pricing-plan">Pricing Plan</Link></li>
													<li><Link href="/faq">FAQ,s</Link></li>
													<li><Link href="/contact">Contact Us</Link></li>
												</ul>
											</li>
										</ul>
									</div> */}
									<div className="btn-area">
										{/* <div className="search-icon header__search header-search-btn" onClick={handleSearch}>
											<a><img src="/assets/img/icons/search1.svg" alt="" /></a>
										</div> */}
										<ul>
											<li>
												<Link href="https://www.facebook.com/people/Hush-Lush-Events/61577939084079/"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/hushlushevents/"><i className="fa-brands fa-instagram" /></Link>
											</li>
											<li>
												<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
											</li>
										</ul>
									</div>
									<div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
										<div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
										<div className="header-search-container">
											<form role="search" className="search-form">
												<input type="search" className="search-field" placeholder="Search …" name="s" />
												<button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
											</form>
										</div>
									</div>
									{isSearch && <div className="body-overlay active" onClick={handleSearch} />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header >

		</>
	)
}
