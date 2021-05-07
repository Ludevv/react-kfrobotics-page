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
            <li>{lang ? "zdalnie sterowaną jednostkę typu katamaran" : "catamaran"}</li>
            <li>{lang ? "autopilot z telemetrią" : "autopilot with telemetry"}</li>
            <li>{lang ? "kontroler z drążkami do sterowania ręcznego" : "controller for manual control"}</li>
            <li>{lang ? "zestaw akumulatorów napędowych 36Ah (2h pływania @1,2m/s)" : "36Ah drive battery set (2h of swimming @ 1.2m / s)"}</li>
            <li>{lang ? "skrzynie transportowe" : "transport crates"}</li>
            <li>{lang ? "dwie ładowarki 10A do akumulatorów napędowych" : "two 10A chargers for driving batteries"}</li>
            <li>{lang ? "ładowarka 2A kontrolera sterującego" : "control controller 2A charger"}</li>
            <li>{lang ? "uchwyt echosondę i odbiornik GNSS" : "sonar holder and GNSS receiver"}</li>
            <li>{lang ? "narzędzia do obsługi" : "maintenance tools"}</li>
          </ul>
        </div>
        <div className="optional">
          <p>{lang ? "Dodatkowe opcjonalne wyposażenie:" : "Additional optional equipment:"}</p>
          <ul>
            <li>{lang ? "system wizyjny" : "vision system"}</li>
            <li>{lang ? 
            "komputer pokładowy z komunikacją ze stacją naziemną" 
            : 
            "on-board computer communication with the ground station"}</li>
            <li>{lang ? "GPS RTK" : "GPS RTK"}</li>
            <li>{lang ? "echosonda" : "echosounder"}</li>
            <li>{lang ? "system omijania przeszkód" : "obstacle avoidance system"}</li>
            <li>{lang ? "system komunikcji GSM" : "GSM communication system"}</li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default SetInclude;