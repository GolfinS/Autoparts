import React from "react";

import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>        
          A fuse is a small yet crucial component within electrical circuits, serving as a safeguard against overcurrent conditions. Comprising a metal wire or strip housed in a protective casing, the fuse is strategically placed within the circuit. Its primary function is to monitor the flow of electrical current.
        </p>
        <p>
          Regular inspection and maintenance of electrical systems, coupled with proper fuse selection, are pivotal for upholding safety and reliability in both residential and industrial settings.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
