import React from 'react';
import Carousel from '../Carousel';
import compBackground from "../assets/compBackground.png";
import '../styles/portfolioStyle.css'

const BACKGROUND = {
    backgroundImage: `url(${compBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'fixed', 
    height: '97%',  
    width: '100%'
  }
export default function Portfolio(props) {
    return (
        <div style={BACKGROUND}>
            <div className="container justify-content-center">
                <div className="Row d-flex">
                    <div id="customDiv" className="col-sm-6 ">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    )
}
