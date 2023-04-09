
import Counterup from '../component/counterup';
function Counter() {
    return (
      <>
        <section className="content-inner bg-primary" style={{"backgroundImage":"url(images/background/bg3.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="icon-bx-wraper style-4 text-center">
							<div className="icon-bx-sm radius  m-b20"> 
								<a href="javascript:void(0);" className="icon-cell">
									<img src='/images/icons/Artboard 1.png' style={{height:'70px'}}/>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Outstanding Campigns</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={9875}/></h2>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="icon-bx-wraper style-4 text-center m-tb30">
							<div className="icon-bx-sm   m-b20"> 
								<a href="javascript:void(0);" className="icon-cell">
								<img src='/images/icons/Artboard 4.png' style={{height:'70px'}}/>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Delighted Clients</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={8765}/></h2>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="icon-bx-wraper style-4 text-center">
							<div className="icon-bx-sm    m-b20"> 
								<a href="javascript:void(0);" className="icon-cell">
								<img src='/images/icons/Artboard 3.png' style={{height:'70px'}}/>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Meritorious Workdays</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={7894}/></h2>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="icon-bx-wraper style-4 text-center m-tb30">
							<div className="icon-bx-sm    m-b20"> 
								<a href="javascript:void(0);" className="icon-cell">
								<img src='/images/icons/Artboard 2.png' style={{height:'70px'}}/>
								</a> 
							</div>
							<div className="icon-content">
								<span className="title">Super Delicious <br /> Coffee Cups</span>
								<h2 className="counter m-b0 text-primary"><Counterup  count={65}/></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Counter;