import ReactPlayer from "react-player";

function Slider1 () {
 
	
  return (
    <>
      <div className="banner-one" style={{"backgroundImage":"url(images/main-slider/slider1/pic2.png)"}}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=AAaXniQ0ESY"
            width="100%"
            height="100%"
						muted
						playing={true}
						loop
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  modestbranding: 1,
                  showinfo: 0,
                  rel: 0,
									disabledkb: 1,
									loop: 1
                },
              },
              file: {
                attributes: {
                  disablepictureinpicture: 'true', // disable full screen on double click
                },
              },
            }}
						style={{ pointerEvents: 'none' }}
          />
      </div>
    </>
  )
}

export default Slider1;
