import * as React from 'react';
import Title from '../components/Title';
import { useLanguage } from '../store/Store';

export interface MapProps {
  
}
 
const Map: React.SFC<MapProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <div className="container">
      <Title text={ lang ? "Znajdź nas..." : "Find Us..."}/>
      <div className="map">
          <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24523.896586687366!2d16.913686229961073!3d51.12002075569369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc02fd988a371%3A0x4eeacf52241b19c2!2sRezedowa%2060%2C%2054-515%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1617541408014!5m2!1spl!2spl" width="800" height="600"></iframe>
      </div>
    </div>
   );
}
 
export default Map;