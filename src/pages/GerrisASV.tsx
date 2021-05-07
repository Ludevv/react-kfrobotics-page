import * as React from 'react';
import Title from '../components/Title';
import Table from '../components/Table';
import SetIncludeASV from '../components/SetIncludeASV';
import Gerris from '../components/Gerris';
import { useLanguage } from '../store/Store';

import box from '../images/box.jpg'



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
          "Gerris ASV to bezzałogowy katamaran z funkcją ręcznego i autonomicznego sterowania, stworzony z myślą o dokonywaniu pomiarów batymetrycznych przy wykorzystaniu montowanego na nim sprzętu. Zastosowane rozwiązania konstrukcyjne mają na celu ułatwienie obsługi, a wysokiej jakości podzespoły maksymalizację niezawodności. System uniwersalnego mocowania sprzętu pomiarowego pozwala w prosty sposób zamontować na katamaranie dowolny odbiornik GNSS i echosondę." 
          : 
          "Gerris ASV is an unmanned catamaran with manual and autonomous control function, designed to perform bathymetric measurements using the equipment mounted on it. The applied design solutions are designed to facilitate service, and high-quality components to maximize reliability. The universal mounting system for measuring equipment allows you to easily mount any GNSS receiver and echo sounder on the catamaran."}

        text2={ lang ? 
          "Gerris ASV ze zintegrowanym autopilotem szybciej i dokładniej wykona za nas żmudne pomiary na dużych akwenach. Wystarczy w aplikacji zaznaczyć interesujący nas obszar, a dalej sterowaniem zajmie się autopilot płynąc precyzyjnie wzdłuż zadanej trasy."
          : 
          "Gerris ASV with an integrated autopilot will perform tedious measurements on large waters faster and more accurately. It is enough to mark the area of interest in the application, and then the autopilot will take care of the control, flowing precisely along the given route."}

        text3={ lang ? 
          "Przetestowaliśmy Gerris’a w najróżniejszych warunkach pogodowych i terenowych, aby mieć pewność, że te czynniki nie będą stanowiły przeszkody do jego pracy. Niestraszne mu są niskie i wysokie temperatury, piasek, żwir, roślinność oraz deszcz. Kadłub wykonany z kompozytu epoksydowo-szklanego cechuje się wysoką odpornością na uderzenia. Katamaran został od podstaw zaprojektowany w Polsce, a jego podzespoły wytwarzane są w naszym warsztacie. Dzięki temu możemy go dowolnie modyfikować."
          : 
          "We have tested Gerris in a wide variety of weather and terrain conditions to ensure that these factors do not obstruct his operation. It is not afraid of low and high temperatures, sand, gravel, vegetation and rain. The hull made of epoxy-glass composite is characterized by high impact resistance. The catamaran has been designed from scratch in Poland, and its components are manufactured in our workshop. Thanks to this, we can freely modify it."}

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
      <br/>
      <p>
        { lang ? 
          "W przypadku łodzi bezzałogowych w razie awarii szybka reakcja jest kluczowa do bezpiecznego sprowadzenia jednostki do brzegu. Dlatego wyposażyliśmy Gerris’a w zestaw sensorów, które monitorują napięcie zasilania, pracę silników, temperaturę najważniejszych podzespołów oraz zasięg sterowania. Wszystkie te dane operator może śledzić na ekranie kontrolera. W razie nieprawidłowości włączy się alarm, aby operator mógł zatrzymać jednostkę, sprawdzić co się dzieje i podjąć decyzję o powrocie do brzegu." 
          : 
          "In the case of unmanned boats, in the event of a failure, quick response is key to bringing the vessel safely to shore. That is why we equipped Gerris with a set of sensors that monitor the supply voltage, engine operation, temperature of the most important components and control range. All these data can be tracked by the operator on the controller screen. In the event of an abnormality, an alarm will sound so that the operator can stop the vessel, check what is happening and decide to return to shore."}
      </p>
    </div>
    <SetIncludeASV/>
     <p className="computerControll">
        { lang ? 
          "Do wykonywania autonomicznych misji niezbędny jest tylko własny laptop lub tablet z systemem operacyjnym Windows 10 lub nowszym." 
          : 
          "All you need to do autonomous missions is your own laptop or tablet with Windows 10 or newer operating system."}
      </p>
    <img src={box} alt="zestaw" className="setBoxImg"/>
</>
   );
}
 
export default GerrisASV;