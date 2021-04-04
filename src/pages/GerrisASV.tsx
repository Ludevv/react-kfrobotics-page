import * as React from 'react';
import Title from '../components/Title';
import Table from '../components/Table';
import SetInclude from '../components/SetInclude';
import Gerris from '../components/Gerris';
import { useLanguage } from '../store/Store';



export interface GerrisASVProps {
  
}
 
const GerrisASV: React.SFC<GerrisASVProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <>
    <div className="container">
      <Title text="Gerris ASV"/>
      <Gerris

        text1={ lang ? 
          "Gerris ASV - bezzałogowy katamaran z funkcją autonomicznego sterowania. Głównym przeznaczeniem Gerris’a są pomiary batymetryczne w trudnym terenie. Zastosowane rozwiązania konstrukcyjne mają na celu ułatwienie obsługi, a wysokiej jakości podzespoły podniesienie trwałości i niezawodności." 
          : 
          "Gerris ASV - unmanned catamaran with autonomous control function. Gerris's main purpose is bathymetric measurements in difficult terrain. The design solutions used are intended to facilitate service, and high-quality components increase durability and reliability."}

        text2={ lang ? 
          "Zintegrowany autopilot umożliwia na autonomiczne mapowania, które są dokładniejsze i szybsze w realizacji."
          : 
          "The integrated autopilot enables autonomous mappings that are more accurate and faster to implement."}

        text3={ lang ? 
          "Przetestowaliśmy Gerris’a w najróżniejszych warunkach pogodowych i terenowych, aby mieć pewność, że nie zawiedzie nas w terenie. Niestraszne mu są niskie i wysokie temperatury, piasek, żwir, roślinność oraz deszcz. System uniwersalnego mocowania sprzętu pomiarowego pozwala w prosty sposób zamontować dowolny odbiornik GNSS i echosondę."
          : 
          "We have tested Gerris in a wide variety of weather and terrain conditions to make sure that it will not disappoint us in the field. It is not afraid of low and high temperatures, sand, gravel, vegetation and rain. The universal mounting system for measuring equipment allows you to easily mount any GNSS receiver and sonar. "}

   
        imgSrc1="gerrisOneImgOdd1"
        imgSrc2="gerrisOneImgEven"
        imgSrc3="gerrisOneImgOdd3"
      />


      <Table 
        row1="1200 mm"
        row2="1000 mm"
        row3="320 mm"
        row4="15 kg"
        row5="15 kg"
        row6="1,5 m/s"
        row7={lang ? "4 silniki bezszczotkowe" : "4 brushless motors"}
        row8={lang ? "mosiężne" : "brass"}
        row9={lang ? "2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah" : "2x Li-ion 3S 36Ah or 2x Li-ion 3S 72Ah"}
        row10={lang ? "do 2h (@1,2 m/s z akumulatorem 36Ah)" : "to 2h (@1,2 m/s with battery 36Ah)"}
        row11={lang ? "kompozyt epoksydowo-szklany" : "epoxy-glass composite"}
        row12={lang ? "ręczne lub autonomiczne" : "manual or standalone"}
        row13="LED"
      />
    </div>
    <SetInclude/>
</>
   );
}
 
export default GerrisASV;