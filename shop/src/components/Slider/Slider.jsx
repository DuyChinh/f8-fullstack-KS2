"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  handleVideoEnded = (e) => {
    // console.log(e.target);

    e.target.play();
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="slick">
          <Slider {...settings}>
            <div>
              <video autoPlay muted onEnded={this.handleVideoEnded}>
                <source
                  src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div>
              <video autoPlay muted onEnded={this.handleVideoEnded}>
                <source
                  src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div>
              <video autoPlay muted onEnded={this.handleVideoEnded}>
                <source
                  src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Slider>
        </div>

        <div class="content-first">
          <h3>Mọi chuyến đi đều đáng giá</h3>
          <p>Khám phá các vùng đất mới cùng chúng tôi</p>
          <p>Những chuyến đi đang chờ đợi bạn</p>
          <a href="#packages" class="btn">
            Khám phá ngay
          </a>
        </div>
      </div>
    );
  }
}
