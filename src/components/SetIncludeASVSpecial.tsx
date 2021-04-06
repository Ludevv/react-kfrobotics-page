import * as React from 'react';
import { useLanguage } from '../store/Store';

export interface SetIncludeProps {
  
}
 
const SetInclude: React.SFC<SetIncludeProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <div className="bgSetBox">
      <div className="setBox">
        <div className="setInclude">
          <p>{lang ? "Zestaw zawiera" : "Set contains"}</p>
          <ul>
            <li>{lang ? "katamaran z akumulatorami 36Ah" : "catamaran with 36Ah batteries"}</li>
            <li>{lang ? "autopilot z telemetrią" : "autopilot with telemetry"}</li>
            <li>{lang ? "kontroler do sterowania ręcznego" : "controller for manual control"}</li>
            <li>{lang ? "skrzynie transportowe" : "transport crates"}</li>
            <li>{lang ? "ładowarka akumulatorów napędowych" : "drive battery charger"}</li>
            <li>{lang ? "ładowarka kontrolera sterującego" : "control controller charger"}</li>
            <li>{lang ? "uchwyt echosondę i odbiornik GNSS" : "sonar holder and GNSS receiver"}</li>
            <li>{lang ? "narzędzia do obsługi" : "maintenance tools"}</li>
            <li>{lang ? 
            "komputer pokładowy z komunikacją ze stacją naziemną" 
            : 
            "on-board computer communication with the ground station"}</li>
            <li>{lang ? "GPS RTK" : "GPS RTK"}</li>
            <li>{lang ? "system komunikcji GSM" : "GSM communication system"}</li>
            <li>{lang ? "echosonda" : "echosounder"}</li>
          </ul>
        </div>
        <div className="optional">
          <p>{lang ? "Dodatkowe opcjonalne wyposażenie:" : "Additional optional equipment:"}</p>
          <ul>
            <li>{lang ? "system wizyjny" : "vision system"}</li>
            <li>{lang ? "system omijania przeszkód" : "obstacle avoidance system"}</li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default SetInclude;