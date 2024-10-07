import React, { useEffect, useState, useRef } from "react";
import "./Tourist.css";
import "../../styles/global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usa from "../../assets/IMAGES/Flag/usa.png";
import canada from "../../assets/IMAGES/Flag/canada.png";
import italy from "../../assets/IMAGES/Flag/italy.png";
import australia from "../../assets/IMAGES/Flag/australia.png";
import dubai from "../../assets/IMAGES/Flag/dubai.png";
import france from "../../assets/IMAGES/Flag/france.png";
import germany from "../../assets/IMAGES/Flag/germany.png";
import newzealand from "../../assets/IMAGES/Flag/newzealand.png";
import swaziland from "../../assets/IMAGES/Flag/swaziland.png";




export default function Tourist() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4, // default for larger screens
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // for screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true, // Enable dots on smaller screens
        }
      },
      {
        breakpoint: 768, // for screens smaller than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Disable arrows for small screens
        }
      },
      {
        breakpoint: 480, // for screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false, // Disable autoplay on very small screens
        }
      }
    ]
  };
  
 return (

    <div className="main-container">
      <section className="section">
        <div className="tourist-container">
          <h1>Apply Tourist Visa To Following Countries through AbroadHub</h1> <br />
          <Slider {...settings}  className="mt-4">
            <div className="item text-center">
              <img src={usa} />
              <h5>USA</h5>
            </div>

            <div className="item text-center">
              <img src={canada} />
              <h5>Canada </h5>
            </div>
            <div className="item text-center">
              <img src={italy} />
              <h5>Italy </h5>
            </div>

            <div className="item text-center">
              <img src={australia} />
              <h5>Australia </h5>
            </div>
            <div className="item text-center">
              <img src={france} />
              <h5>France</h5>
            </div>

            <div className="item text-center">
              <img src={germany} />
              <h5>Germany </h5>
            </div>

            <div className="item text-center">
              <img src={newzealand} />
              <h5>Newzealand</h5>
            </div>

            <div className="item text-center">
              <img src={swaziland} />
              <h5>Swaziland</h5>
            </div>

            <div className="item text-center">
              <img src={france} />
              <h5>France</h5>
            </div>
            <div className="item text-center">
              <img src={dubai} />
              <h5>Dubai </h5>
            </div>
      </Slider>
    </div>
      </section >
    </div >
  );
}
