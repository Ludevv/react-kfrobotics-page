import * as React from 'react';
import { useLanguage } from '../store/Store';

export interface SetIncludeProps {
  
}
 
const SetInclude: React.SFC<SetIncludeProps> = () => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <div className="bgSetBox">
      <div className="setBoxSpecial">
        <div className="setInclude">
          <p>{lang ? "Zestaw zawiera" : "Set contains"}</p>
          <ul>
            <li>{lang ? "zdalnie sterowaną jednostkę typu katamaran" : "remotely controlled catamaran type unit"}</li>
            <li>{lang ? "autopilot z telemetrią" : "autopilot with telemetry"}</li>
            <li>{lang ? "echosonda jednowiązkową – Echologger EU400" : "echosounder – Echologger EU400"}</li>
            <li>{lang ? "•	GPS RTK – Emlid Reach M2" : "•	GPS RTK – Emlid Reach M2"}</li>
            <li>{lang ? 
              "komputer pokładowy z systemem Windows 10" 
              : 
              "on-board computer"}
            </li>
            <li>{lang ? "cyfrowy system transmisji danych pomiarowych" : "digital measurement data transmission system"}</li>
            <li>{lang ? "kontroler z drążkami do sterowania ręcznego" : "controller for manual control"}</li>
            <li>{lang ? "zestaw akumulatorów napędowych 72 Ah" : "72 Ah drive battery pack"}</li>
            <li>{lang ? "skrzynie transportowe" : "transport crates"}</li>
            <li>{lang ? "ładowarka 10A akumulatorów napędowych" : "drive battery 10A charger"}</li>
            <li>{lang ? "ładowarka 2A kontrolera sterującego" : "control controller 2A charger"}</li>
            <li>{lang ? "uchwyt echosondę i odbiornik GNSS" : "sonar holder and GNSS receiver"}</li>
            <li>{lang ? "narzędzia do obsługi" : "maintenance tools"}</li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default SetInclude;