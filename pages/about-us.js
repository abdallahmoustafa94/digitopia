import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function AboutUs1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white">
            {/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>About us</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">About us</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- About Us --> */}
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 mb-4">
							<h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
							<h2 className="title">Digitopia Marketing Solutions</h2>
						</div>
						<p>A full-service marketing agency that helps businesses of all sizes achieve their marketing goals.</p>
						<p className="m-b30">We have been in the industry for over 8 years and have a team of experienced professionals who specialize in a wide range of marketing services.</p>
						{/* <div className="row">
							<div className="col-lg-6">
								<ul className="list-arrow primary">
									<li>Nulla dict posuere veliitae.</li>
									<li>Etiam orci magna, accumsan.</li>
									<li>Donec fringilla velit risusquis.</li>
									<li>Aliquam pulvinar tempor.</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul className="list-arrow primary">
									<li>Nulla dict posuere veliitae.</li>
									<li>Etiam orci magna, accumsan.</li>
									<li>Donec fringilla velit risusquis.</li>
									<li>Aliquam diam tempor.</li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Counter --> */}
		{/* <Counter/> */}

		{/* <!-- About Us --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Our Story</h6>
							<h2 className="title m-b15">It All Started with a Dream</h2>
							<p>to craft a new lease of experience for any business based on cost-effective steps.</p>
						</div>
					
					</div>
					<div className="col-lg-6  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
				
				</div>
			</div>
		</section>
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 mb-4">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Vision</h6>
							<h2 className="title">And a Vision</h2>
						</div>
						<p>to help our clients grow faster <br/> by combining innovative marketing strategies with measured tactics <br/>And to maximize their customer acquisition and retention opportunities.</p>
					</div>
				</div>
			</div>
		</section>
		
		<section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Mission</h6>
							<h2 className="title m-b15">With a Mission</h2>
							<p>Of assisting organizations and individuals in growing by providing them with a better company existence, a better brand image, and, of course, better statistics and success stories.</p>
						</div>
					
					</div>
					<div className="col-lg-6  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
				
				</div>
			</div>
		</section>
		<section className="content-inner">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6  wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media">
							<img src="images/about/img4.png" className="move-3" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 mb-4">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Values</h6>
							<h2 className="title">And a Vision</h2>
						</div>
						<p>While maintaining Our Core Values <br/> Loyalty<br/>Transparency<br />Creativity and Innovation<br />Flexibility and adaptability<br />Commitment to ethics and integrity</p>
					</div>
				</div>
			</div>
		</section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs1;
