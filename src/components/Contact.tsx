import * as React from 'react';
import { useLanguage } from '../store/Store';

export interface ContactProps {
  
}
 
const Contact: React.SFC<ContactProps> = () => {
    const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <div className="contact">
      <div className="triangle-topleft"></div>
      <div className="container">
        <p className="contactTitle">K.F. Robotics Sp. z o.o.</p>
          <div className="person">
            <a href="tel:601989908"><i className="fas fa-phone-alt"></i>+48 601 989 908</a>
            <a href="mailto:r.g.kowalczyk@gmail.com"><i className="fas fa-envelope"></i>r.g.kowalczyk@gmail.com</a>
            <a href="https://www.facebook.com/GerrisUSV"><i className="fab fa-facebook"></i>Facebook</a>
            <a href="https://www.instagram.com/gerris_usv/"><i className="fab fa-instagram"></i>Instagram</a>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;