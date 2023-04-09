import Header from "../layout/header";
import Footer from '../layout/footer';
import Link from 'next/link';


function BlogLargeRightSidebar() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Blog</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Blog</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner bg-img-fix" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4 m-b50">
						<div className="dlab-blog style-1 bg-white text-center m-b50">
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/default/thum1.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title">
									<a href="/blog-details-1">An Internship at Digitopia for Marketing Solutions is a Rewarding Experience</a>
								</h4>
								<p className="m-b0">An internship at Digitopia Marketing Solutions is a valuable experience for anyone looking to break into the industry</p>
								{/* <div className="dlab-meta meta-bottom">
									<ul>
										<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
										<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
										<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
										<li className="post-share"><i className="flaticon-share"></i>
											<ul>
												<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
												<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
												<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
											</ul>
										</li>
									</ul>
								</div> */}
							</div>
						</div>
						</div>
						{/* <div className="col-xl-4 col-lg-4 m-b50">

						<div className="dlab-blog style-1 bg-white text-center m-b50">
							<div className="dlab-media dlab-img-effect zoom">
								<img src="images/blog/default/thum2.jpg" alt=""/>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title">
									<a href="/blog-details-1">Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec.</a>
								</h4>
								<p className="m-b0">Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa.</p>
							
							</div>
						</div>
						</div> */}
					
						
			
				</div>
			</div>
		</section>
		
		{/* <!-- Call To Action --> */}
		{/* <section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Showcase Your Website In Top Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
					</div>
				</div>
			</div>
		</section> */}
		
	</div>
	<Footer/>
    </>
  )
}

export default BlogLargeRightSidebar;