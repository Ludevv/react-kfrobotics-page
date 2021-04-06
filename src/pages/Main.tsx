import * as React from 'react';
import Slider from '../components/Slider'
import Title from '../components/Title';
import { useLanguage } from '../store/Store';


export interface MainProps {}
 
const Main: React.SFC<MainProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 

    <div className="container">
      <Title text={lang ? "O Firmie" : "Our Company"}/>

      <div className="aboutCompany">
          <p>
            { lang ? 
              "Firma zajmuje się projektowaniem i wykonywaniem rozwiązań inżynierskich. Tworzymy dedykowane rozwiązania dla klientów od projektu do realizacji. Naszą specjalnością są bezzałogowe łodzie do pomiarów batymetrycznych. Więcej informacji o zrealizowanych i trwających projektach zakładce Działalność"
              :
              "The company deals with the design and implementation of engineering solutions. We create dedicated solutions for clients from design to implementation. We specialize in unmanned boats for bathymetric measurements. More information about completed and ongoing projects in the Projects tab"
            }
          </p>
      </div>
      
      <Slider/>
    </div>
   );
}
 
export default Main;

