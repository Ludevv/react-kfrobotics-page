import * as React from 'react';
import Title from '../components/Title';
import Table from '../components/Table';
import SetInclude from '../components/SetIncludeASV';
import Gerris from '../components/Gerris';
import { useLanguage } from '../store/Store';


export interface Gerris1200Props {
  
}
 
const Gerris1200: React.SFC<Gerris1200Props> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
  <>
    <div className="container">
      <Title text="Gerris 1100 ASV"/>

      <Gerris
        text1={ lang ? 
          "Ciągły rozwój, optymalizacja procesu produkcji i doskonalenie konstrukcji doprowadziło nas do punktu, w którym tworzymy udoskonalonego Gerrisa ASV - Gerris ASV 1100. Praktyczniejszego, sprawniejszego i jeszcze bardziej niezawodnego."
          : 
         "Continuous development, optimization of the production process and design refinement have led us to the point where we are making the improved Gerris ASV - Gerris ASV 1200. More practical, efficient and even more reliable."}

        text2={ lang ? 
           "Projektujemy nowe pływaki o mniejszym współczynniku oporu dla wydłużenia czasu pracy na jednym ładowaniu. Tak jak jego poprzednik, również wykonany z wytrzymałego kompozytu epoksydowo-szklanego z wykorzystaniem technologii infuzji dla uzyskania najwyższej wytrzymałości przy najniższej możliwej masie elementu."
          : 
          "We design new floats with a lower drag coefficient to extend the working time on a single charge. Like its predecessor, it is also made of durable epoxy-glass composite using infusion technology for the highest strength with the lowest possible weight of the element." }

        text3={ lang ? 
           "Nowe osłony napędowe - wytrzymalsze i łatwiejsze w utrzymaniu. Łatwe dostosowanie różnego rodzaju napędów. Niezatapialność - cecha jaką może pochwalić się niewiele tego typu jednostek. Mamy świadomość, że sprzęt pomiarowy jest cenny, stąd chcemy mieć pewność, że “nie pójdzie on na dno”."
          : 
          'New drive covers - more durable and easier to maintain. Easy adaptation of various types of drives. Unsinkability - a feature that few such units can boast. We know that measuring equipment is valuable, so we want to be sure that" it will not go to the bottom ".'}
        imgSrc1="gerrisThreeImgOdd1"
        imgSrc2="gerrisThreeImgEven"
        imgSrc3="gerrisThreeImgOdd3"
      />

       <em className="gerrisMoreSoon">{lang ? "Wkrótce więcej informacji!" : "More info coming soon!"}</em>
   
         <Table 
        row1="1100 mm"
        row2="900-1000 mm"
        row3="320 mm"
        row4="14 kg"
        row5="15 kg"
        row6="2 m/s"
        row7={lang ? "2 lub 4 silniki bezszczotkowe, 2 napędy zewnętrzne" : "2 or 4 brushless motors, 2 external drives"}
        row8={lang ? "mosiężne lub poliwęglan" : "brass or polycarbonate"}
        row9="12V Li-ion"
        row10="> 2h"
        row11={lang ? "kompozyt epoksydowo-szklany" : "epoxy-glass composite"}
        row12={lang ? "ręczne lub autonomiczne" : "manual or standalone"}
        row13={lang ? "LED - prawo, lewo, przód + dookólna  lampa błyskowa" : "LED - right, left, front + omni-directional flash"} 
      />
    </div>
    <SetInclude/>
  </>
   );
}
 
export default Gerris1200;