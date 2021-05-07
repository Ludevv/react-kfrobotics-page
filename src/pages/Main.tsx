import * as React from 'react';
import Slider from '../components/Slider'
import Title from '../components/Title';
import { useLanguage } from '../store/Store';


export interface MainProps {}
 
const Main: React.SFC<MainProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 

    <div className="container">
      <Title text={lang ? "O Nas" : "About As"}/>

      <div className="aboutCompany">
          <p>
            { lang ? 
              "Projektujemy i wykonujemy dedykowane rozwiązania inżynierskie, kompleksowo obsługując zlecenia naszych Klientów. Specjalizujemy się w tworzeniu gotowych bezzałogowych jednostek pływających do pomiarów batymetrycznych jak i prostych podzespołów na zamówienie. Ponieważ większość komponentów powstaje w naszym warsztacie, oferujemy szerokie pole do personalizacji parametrów zamawianego sprzętu równocześnie gwarantując profesjonalne doradztwo w tym zakresie. Prowadzimy także serwis, gdzie wykonujemy przeglądy i naprawy wyprodukowanych jednostek. Więcej informacji o zrealizowanych i trwających projektach w zakładce Działalność."
              :
              "We design and manufacture dedicated engineering solutions, comprehensively handling our clients' orders. We specialize in creating ready-made unmanned watercraft for bathymetric measurements as well as simple components on request. As most of the components are made in our workshop, we offer a wide field for personalizing the parameters of the ordered equipment, at the same time guaranteeing professional advice in this area. We also run a service where we carry out inspections and repairs of manufactured units. More information about completed and ongoing projects in the Projects tab."
            }
          </p>
          <br/>
          <h5><b>
            { lang ? 
              "Stosowane technologie:"
              :
              "Used technologies:"
            }
          </b></h5>
          <p>
            { lang ? 
              "Kompozyty - wykonujemy formy i gotowe elementy kompozytowe z żywic epoksydowych metodą laminowania ręcznego i infuzji."
              :
              "Composites - we make molds and ready-made composite elements from epoxy resins by hand lamination and infusion."
            }
          </p>
          <p>
            { lang ? 
              "Druk 3D - od prostych prototypów do zaawansowanych podzespołów z materiałów odpornych na promieniowanie UV i wysokie temperatury."
              :
              "3D printing - from simple prototypes to advanced components made of materials resistant to UV radiation and high temperatures."
            }
          </p>
          <p>
            { lang ? 
              "Obróbka CNC - precyzyjne wykonywanie podzespołów na tokarkach i frezarkach sterowanych numerycznie."
              :
              "CNC machining - precise production of components on numerically controlled lathes and milling machines."
            }
          </p>
      </div>
      
      <Slider/>
    </div>
   );
}
 
export default Main;

