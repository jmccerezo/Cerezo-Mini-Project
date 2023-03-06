import React from "react";
import ImageCarousel from "../component/ImageCarousel";

const About = () => {
  return (
    <div className="page-container">
      <div className="h-one-container">
        <h1>About Us</h1>
      </div>
      <div className="about-text-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia, nunc ac tristique malesuada, augue erat tempus augue, non
          blandit est massa vel leo. Morbi et aliquam lectus. Donec a vestibulum
          ipsum. Nam eget velit ac orci ornare rutrum. Nulla id arcu ipsum.
          Proin sit amet ullamcorper ipsum. Nullam ac luctus enim. Sed sit amet
          sapien rutrum, feugiat metus ac, ultricies ipsum. Aliquam at vulputate
          risus. Integer eros ipsum, mattis nec suscipit nec, imperdiet non
          velit.
        </p>
      </div>
      <div className="about-text-content">
        <p>
          Nunc id mi vitae erat vehicula fringilla. Nam venenatis luctus ligula,
          id rhoncus augue efficitur sed. Sed condimentum, mauris nec auctor
          fermentum, sem erat finibus est, vitae euismod nunc libero sit amet
          nisl. Morbi faucibus auctor elit. Aliquam varius imperdiet diam vel
          facilisis. Ut fermentum id leo quis tempus. Mauris vitae ipsum nec
          elit venenatis congue. Integer fringilla neque eu nulla pulvinar
          facilisis. Proin sit amet lorem mauris. Praesent eget nulla egestas,
          gravida ante dapibus, euismod lorem. Donec libero ante, venenatis eget
          erat euismod, commodo euismod magna. Aenean id tristique libero.
          Maecenas eu risus felis. Vivamus dictum nunc nec metus consectetur, eu
          vestibulum justo semper. Vivamus facilisis magna ut tortor maximus,
          vitae accumsan sapien aliquam. Integer nunc lacus, tincidunt mollis
          ligula et, rutrum porttitor magna.
        </p>
      </div>
      <div className="carousel-wrapper">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default About;
