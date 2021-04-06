import * as React from 'react';
import Title from '../components/Title';
import Table from '../components/Table';
import SetIncludeASVSpecial from '../components/SetIncludeASVSpecial';
import Gerris from '../components/Gerris';
import { useLanguage } from '../store/Store';


export interface GerrisASVSpecialProps {
  
}
 
const GerrisASVSpecial: React.SFC<GerrisASVSpecialProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
  <>
    <div className="container">

      <Title text="Gerris ASV Surveyor"/>

      <Gerris
        text1={ lang ? 
          "Gerris ASV Surveyor - Jest to rozszerzona wersja katamaranu Gerris ASV ze zintegrowanym systemem do pomiarów batymetrycznych." 
          : 
          "Gerris ASV Surveyor - This is an extended version of the Gerris ASV catamaran with an integrated bathymetric measurement system."}

        text2={ lang ? 
          "W autonomicznym katamaranie zamontowane zostały dodatkowo echosonda, GPS RTK, komputer pokładowy z Windows 10 oraz cyfrowy system transmisji danych pomiarowych do stacji naziemnej. Taki zestaw pozwala na kompleksowe wykonywanie pomiarów batymetrycznych “out of the box” z podglądem danych na żywo w stacji naziemnej."
          : 
          "The autonomous catamaran also has an echo sounder, GPS RTK, on-board computer with Windows 10 and a digital measurement data transmission system to the ground station. Such a set allows for comprehensive“ out of the box ”bathymetric measurements with live data preview at the ground station. "}

        text3={ lang ? 
          "Wyposażony w zewnętrzne napędy zanurzone pod wodą."
          : 
          "Equipped with external submersible drives."}

        imgSrc1="gerrisTwoImgOdd1"
        imgSrc2="gerrisTwoImgEven"
        imgSrc3="gerrisTwoImgOdd3"
      />
    
      <Table 
        row1="1200 mm"
        row2="1000 mm"
        row3="320 mm"
        row4="15 kg"
        row5="15 kg"
        row6="1,5 m/s"
        row7={lang ? "2 pędniki BR T200" : "2 propellers BR T200"}
        row8={lang ? "poliwęglan" : "polycarbonate"}
        row9={lang ? "2x Li-ion 3S 36Ah lub 2x Li-ion 3S 72Ah" : "2x Li-ion 3S 36Ah or 2x Li-ion 3S 72Ah"}
        row10={lang ? "do 2h (@1,2 m/s z akumulatorem 36Ah)" : "to 2h (@1,2 m/s with battery 36Ah)"}
        row11={lang ? "kompozyt epoksydowo-szklany" : "epoxy-glass composite"}
        row12={lang ? "ręczne lub autonomiczne" : "manual or standalone"}
        row13="LED"
      />
    </div>
    <SetIncludeASVSpecial/>
  </>
   );
}
 
export default GerrisASVSpecial;