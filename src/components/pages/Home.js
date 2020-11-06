import React from 'react';
import '../styles/homeStyle.css';
import Background from "../assets/aboutBackground.jpg";
import GitHub from "../assets/GitHub.svg";
import LinkedIn from "../assets/Linkedin.svg";
import Email from "../assets/Gmail.svg";
import Resume from "../assets/CV.svg";

const BACKGROUND_IMG = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'fixed', 
    height: '97%',   
    width: '100%'
   
    }

export default function Home() {
    return (
        <div className="Container" style={BACKGROUND_IMG}> 
            <div id="aboutDiv" class="row no-gutters">
                <div class="col-sm-4 col-md-5 test">
                    <h4>| Location:</h4><p> Detroit-Metropolitan</p>
                    
                    <h4>| Professional Offering:</h4><p> Full-Stack Web Development </p>
                    
                   <h4>| About Me:</h4>  
                   <p> Since I was young, I've always enjoyed creating art and working on puzzles. Life has taught me to utilize my creativity as an advantage, allowing me to solve complex problems with 
                    unique solutions that are flexible and adaptable to any challenge presented. </p>
                </div>
                <div class="col-6 col-md-4 offset-md-2 test">
                    <p>
                       <img className="icons-img" src={GitHub} alt="GitHub" href="https://github.com/mja279" /> 
                       <img className="icons-img" src={LinkedIn} alt="LinkedIn"/>
                    </p>
                   
                   <p>
                        <img className="icons-img" src={Email} alt="Email"/>
                        <img className="icons-img" src={Resume} alt="Resume"/>  
                   </p>
                   
                </div>
            </div>
        </div>   
    )
}
