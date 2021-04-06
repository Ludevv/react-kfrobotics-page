import * as React from 'react';
import Title from '../components/Title';
import Table from '../components/Table';
import SetInclude from '../components/SetInclude';
import Gerris from '../components/Gerris';
import { useLanguage } from '../store/Store';


export interface Gerris1200Props {
  
}
 
const Gerris1200: React.SFC<Gerris1200Props> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
  <>
    <div className="container">
      <Title text="Gerris 1200"/>

      <Gerris
        text1={ lang ? 
          "Ciągły rozwój, optymalizacja procesu produkcji i doskonalenie konstrukcji doprowadziło nas do punktu, w którym tworzymy udoskonalonego Gerrisa ASV - Gerris ASV 1200. Praktyczniejszego, sprawniejszego i jeszcze bardziej niezawodnego."
          : 
         "Continuous development, optimization of the production process and design refinement have led us to the point where we are making the improved Gerris ASV - Gerris ASV 1200. More practical, efficient and even more reliable."}

        text2={ lang ? 
           "Projektujemy nowe pływaki o mniejszym współczynniku oporu dla wydłużenia czasu pracy na baterii. Również będzie wykonany z wytrzymałego kompozytu epoksydowo-szklanego, jednak w wykorzystaniem technologii infuzji dla uzyskania najwyższej wytrzymałości przy najniższej masie kompozytu."
          : 
          "We are designing new floats with a lower drag coefficient to extend battery life. It will also be made of durable epoxy-glass composite, but using infusion technology for the highest strength with the lowest composite weight." }

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
        row1=""
        row2=""
        row3=""
        row4=""
        row5=""
        row6=""
        row7=""
        row8=""
        row9=""
        row10=""
        row11=""
        row12=""
        row13=""
      />
    </div>
    <SetInclude/>
  </>
   );
}
 
export default Gerris1200;