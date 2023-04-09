import { Container } from "react-bootstrap";
import ClientSlider from "./../component/clientSlider";

function Clients() {
    return (
        <>
            <div className="content-inner-2" >
  

            <div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Our Partners</h6>
					{/* <h2 className="title">Latest Blog & News</h2> */}
				</div>

                    <div className="clients-carousel owl-none owl-carousel owl-loaded owl-drag">
                    <ClientSlider />
            </div>
        </div>

        </>
    );
}

export default Clients;
