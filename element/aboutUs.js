import Link from 'next/link';

function AboutUs() {
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                          <div className="dz-media">
                              <img src="images/ceo.png" className="move-1" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6>
                              <h2 className="title">CEO Message:</h2>
                          </div>
                          <p>As the CEO of Digitopia Marketing Solutions, I am thrilled to be at the forefront of helping our clients achieve their business goals through innovative and impactful marketing strategies. We understand the ever- changing nature of the industry and are dedicated to staying ahead of the curve to deliver exceptional results for our clients.</p>
                          <p className="m-b30">Our team is comprised of experts, who bring a wealth of experience and creativity to every project. We are passionate about what we do, and we are committed to delivering measurable results that help our clients succeed. As we continue to grow and evolve, we remain focused on providing unparalleled service and delivering results that make a real difference for our clients.</p>
                          <img src="images/sign.png" alt=""/>
                          <h4 className="m-b30">Mohamed Hossni</h4>
                         {/* <Link href="about-us-1"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Learn More</a></Link>  */}
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;