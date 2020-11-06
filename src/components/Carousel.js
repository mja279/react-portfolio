import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import projOne from "./assets/project_one.gif";
import projTwo from "./assets/project_two.gif";

import './styles/carouselStyle.css'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img 
                className="d-block img-carousel"
                src={projOne} 
                alt="Project One" />
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className="d-block img-carousel"
                src={projTwo} 
                alt="Project Two" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block img-carousel"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
    );
  }
  