import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import dbuildingImg from "../assets/building.jpg";
import dofficeImg from "../assets/office.jpg";
import dskyscraperImg from "../assets/skyscraper.jpg";
import "../Pages/CaruselBox.css";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item className='position'>
          <img className="d-block w-100" src={dbuildingImg} alt="Building" />
          <Carousel.Caption className='caption-position'>
            <div>
              <h1>Welcome to the site</h1>
              <p>
                This site is my profile, where I post my projects, share
                information about various technologies in the field of web
                development, and here you can see my resume.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dofficeImg} alt="Building" />
          <Carousel.Caption className='caption-position'>
            <div>
              {" "}
              <h1>Building image</h1>
              <p>
                JSONPlaceholder is a free online REST API that you can use
                whenever you need some fake data. It's great for tutorials,
                testing new libraries, sharing code examples,
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dskyscraperImg} alt="Building" />
          <Carousel.Caption className='caption-position'>
            <div>
              <h1> image</h1>
              <p>
                JSONPlaceholder is a free online REST API that you can use
                whenever you need some fake data. It's great for tutorials,
                testing new libraries, sharing code examples,
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
