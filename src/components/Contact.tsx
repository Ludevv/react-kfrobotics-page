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
        <p className="contactTitle">{lang ? "Kontakt" : "Contact"}</p>
        <span className="contactName">K.F. Robotics Sp. z o.o.</span>
        <div className="dispCol">
          <div className="person">
          <a href="tel:601989908"><i className="fas fa-phone-alt"></i>+48 601 989 908</a>
          <a href="mailto:r.g.kowalczyk@gmail.com"><i className="fas fa-envelope"></i>r.g.kowalczyk@gmail.com</a>
          <a href="https://www.facebook.com/AUTOManufaktura"><i className="fab fa-facebook"></i>Facebook</a>
          <a href="https://www.instagram.com/automanufaktura_skrzypczynski/"><i className="fab fa-instagram"></i>Instagram</a>
        </div>
        <div className="company">
            <p>ul. Rezedowa 60, 54-515 Wrocław</p>
            <p>KRS: 0000862246</p>
            <p>NIP: 8943159066</p>
            <p>Regon: 38712781200000</p>
            <p>Sąd Rejonowy Wrocław Fabryczna</p>
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;