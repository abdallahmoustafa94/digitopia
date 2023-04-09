import Slider from "react-slick";

function ClientSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
    };
    return (
        <>
				<div style={{background:'#34a5e0'}}>

            <Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/1.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/2.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/3.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/4.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/5.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/6.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/7.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/8.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/9.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/10.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/11.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/12.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/13.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/14.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/15.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/16.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/17.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/18.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/19.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/20.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/21.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/22.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/23.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/24.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/25.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/26.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/27.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/28.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/29.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/30.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/31.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/32.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/33.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/34.png"
							alt=""
						/>
					
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/Logos/35.png"
							alt=""
						/>
					
					</div>
				</div>
			</Slider>
				</div>
        </>
    );
}

export default ClientSlider;
