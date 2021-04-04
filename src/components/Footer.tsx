import * as React from 'react';
import { useLanguage } from '../store/Store';

const Footer: React.SFC = () => {
  const [{lang}, {changeLanguage}] = useLanguage();

  const date = new Date().getFullYear()

  return (
    <div className="container">
      <h6 className="footer">© {date} K.F. Robotics Sp. z o.o. { lang ? "Wszystkie Prawa Zastrzeżone" : "All Rights Reserved"}</h6>
    </div>
   );
}
 
export default Footer;