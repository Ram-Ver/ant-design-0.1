import React from "react";
import { Carousel } from "antd";

function MyCarousel(props) {
  return (
    <Carousel autoplay className="carosuel">
      {props.carosuelImages.map((image) => (
        <div key={image.id}>
          <img
            src={image.image}
            alt="carosuel-pic"
            className={props.carouselImageStyle}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
