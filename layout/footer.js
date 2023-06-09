

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="footer-logo">
								<a href="/"><img src="images/logo.png" alt="" style={{width:'30%'}}/></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>+91 987-654-3210<br/>info@digitopia.com</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-location"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>Alexandria, Egypt</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">About Us</h5>
							<p>A full-service marketing agency that helps businesses of all sizes achieve their marketing goals.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://www.facebook.com/digitopiamarketingsolutions"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/digitopiamarketingsolutions"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/digitopia_eg"></a></li>
									<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/digitopiamarketingsolutions"></a></li>
									<li><a className="fa fa-youtube" href="https://www.youtube.com/@digitopiamarketingsolutions"></a></li>
									<li><a className="fa fa-pinterest" href="https://www.pinterest.com/digitopiamarketingsolutions"></a></li>
									<li><a className="fa fa-behance" href="https://www.behance.net/digitopiamarketing"></a></li>
									<li><a className="fa fa-vimeo" href="https://vimeo.com/digitopiamarketing"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/about-us">About Us</a></li>
								<li><a href="/contact-us">Contact us</a></li>
								<li><a href="/blog">Blog</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="javascript:void(0);">Strategy & Research</a></li>
								<li><a href="javascript:void(0);">Web Development</a></li>
								<li><a href="javascript:void(0);">Web Solution</a></li>
								<li><a href="javascript:void(0);">Digital Marketing</a></li>
								<li><a href="javascript:void(0);">App Design </a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Other links</h5>
						   <ul>
								<li><a href="/our-works">Work</a></li>
								<li><a href="/coming-soon">Digitopia Academy</a></li>
								<li><a href="/careers">Careers</a></li>
							</ul>
						</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2023 <a href="https://dexignzone.com/" target="_blank">Digitopia</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;