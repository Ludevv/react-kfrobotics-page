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
              "Firma zajmuje się projektowaniem i wykonywaniem rozwiązań inżynierskich, ze szczególnym naciskiem na bezzałogowe łodzie do pomiarów batymetrycznych. Tworzymy dedykowane rozwiązania dla wymagających klientów od projektu do realizacji. Zapraszamy do zapoznania się z zakładką zrealizowanych oraz trwających projektów."
              :
              "A company dealing with design and engineering expectation, with particular emphasis on unmanned boats for bathymetric measurements. We create dedicated solutions for clients from design to implementation. We invite you to see the completed tab and the ongoing projects."
            }
          </p>
      </div>
      
      <Slider/>
    </div>
   );
}
 
export default Main;

