import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useLanguage } from '../store/Store';
import { NavLink } from 'react-router-dom';

import carusel1 from '../images/carusel1.jpg';
import carusel2 from'../images/carusel2.jpg';
import carusel3 from '../images/carusel3.jpg';

export interface SliderProps {
  
}
 
const Slider: React.SFC<SliderProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
     <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carusel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <NavLink to="/gerrisasv" className="nav-link"><h3 className="caruselTitle">GERRIS ASV</h3></NavLink>
            <p className="caruselDesc">{lang ? "Uniwersalny bezzałogowy katamaran z funkcją autopilota." : "A universal unmanned catamaran with an autopilot function."}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carusel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <NavLink to="/gerrisasvsurveyor" className="nav-link"><h3 className="caruselTitle">GERRIS ASV Surveyor</h3></NavLink>
            <p  className="caruselDesc">{lang ? "Zintegrowany system do pomiarów batymetrycznych." : "Integrated system for bathymetric measurements."}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carusel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <NavLink to="/gerris1200" className="nav-link"><h3 className="caruselTitle">GERRIS 1200</h3></NavLink>
            <p  className="caruselDesc">{lang ? "Nowoczesny bezzałogowy katamaran z funkcją autopilota (w trakcie testów)." : "A modern unmanned catamaran with an autopilot function (under testing)."}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   );
}
 
export default Slider;