import { useState } from "react";

function ProjectCard({ imgSrc, imgAlt, title, subtitle, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ padding: "0", margin: "0" }}>
        <div className="col-xs-12" style={{ padding: "0", margin: "0" }}>
          <div className="card border-0" style={{ padding: "0", margin: "0" }}>
            <div className="position-relative overflow-hidden">
              <img className="w-100" src={imgSrc} alt={imgAlt} />
              <div
                className={`image-overlay ${isHovered ? "active" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered && (
                  <div className="overlay-content d-flex flex-column h-100 justify-content-center">
                    <h5 className="overlay-title text-white text-center" style={{fontSize:'42px'}}>
                      {title}
                    </h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
