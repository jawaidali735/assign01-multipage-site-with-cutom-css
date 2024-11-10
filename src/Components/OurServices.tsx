import React from "react";
import "../styles/ourservices.css";

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          Explore the various services we offer to make your travel experience
          seamless and unforgettable. From luxurious stays to personalized
          tours, we have everything to make your trip memorable.
        </p>
      </div>


      <div className="services-rows">
        <div className="service-item">
          <h3 className="service-title">Accommodation</h3>
          <p className="service-description">
            Comfortable stays at the best hotels and resorts. We offer a range
            of options for every budget.
          </p>
          <button className="buttonStyle">
            <a href="#">Read More</a>
          </button>
        </div>
        <div className="service-item">
          <h3 className="service-title">Guided Tours</h3>
          <p className="service-description">
            Explore cities with expert guides who provide insights into history,
            culture, and attractions.
          </p>
          <button className="buttonStyle">
            <a href="#">Read More</a>
          </button>
        </div>
        <div className="service-item">
          <h3 className="service-title">Transportation</h3>
          <p className="service-description">
            Convenient transport options, including airport transfers, private
            cars, and more for your comfort.
          </p>
          <button className="buttonStyle">
            <a href="#">Read More</a>
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default OurServices;
