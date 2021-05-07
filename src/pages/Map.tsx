import * as React from 'react';
import Title from '../components/Title';
import { useLanguage } from '../store/Store';

export interface MapProps {
  
}
 
const Map: React.SFC<MapProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <div className="map">
      <div className="container">
        <Title text={ lang ? "Kontakt" : "Contact"}/>
        <span className="contactName">K.F. Robotics Sp. z o.o.</span>
        <div className="person">
          <a href="tel:601989908"><i className="fas fa-phone-alt"></i>+48 601 989 908</a>
          <a href="mailto:r.g.kowalczyk@gmail.com"><i className="fas fa-envelope"></i>r.g.kowalczyk@gmail.com</a>
          <a href="https://www.facebook.com/GerrisUSV"><i className="fab fa-facebook"></i>Facebook</a>
          <a href="https://www.instagram.com/gerris_usv/"><i className="fab fa-instagram"></i>Instagram</a>
          <p>ul. Rezedowa 60, 54-515 Wrocław</p>
          <p><b>KRS:</b> 0000862246</p>
          <p><b>NIP:</b> 8943159066</p>
          <p><b>Regon:</b> 38712781200000</p>
          <p>Sąd Rejonowy dla Wrocławia-Fabrycznej, VI Wydział Gospodarczy Krajowego Rejestru Sądowego</p>
        </div>
      </div>
    </div>
   );
}
 
export default Map;