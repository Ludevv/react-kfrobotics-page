import * as React from 'react';
import { useLanguage } from '../store/Store';


export interface TableProps {
  row1?: string;
  row2?: string;
  row3?: string;
  row4?: string;
  row5?: string;
  row6?: string;
  row7?: string;
  row8?: string;
  row9?: string;
  row10?: string;
  row11?: string;
  row12?: string;
  row13?: string;
}
 
const Table: React.SFC<TableProps> = ({row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13}) => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
        <div className="tableBox">
        <p>{lang ? "Parametry techniczne:" : "Parameters:"}</p>
        <div className="table">
          <div className="row">
            <div className="columnName">{lang ? "Długość" : "Length"}:</div>
            <div className="columnValue">{row1}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Szerokość" : "Width"}:</div>
            <div className="columnValue">{row2}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Wysokość" : "Height"}:</div>
            <div className="columnValue">{row3}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Masa własna" : "Own weight"}:</div>
            <div className="columnValue">{row4}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Maksymalna ładowność" : "Maximum payload"}:</div>
            <div className="columnValue">{row5}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Prędkość maksymalna" : "Max Speed"}:</div>
            <div className="columnValue">{row6}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Napęd" : "Drive"}:</div>
            <div className="columnValue">{row7}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Śruby napędowe" : "Propellers"}:</div>
            <div className="columnValue">{row8}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Zasilanie" : "Power Supply"}:</div>
            <div className="columnValue">{row9}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Czas pływania" : "Swimming time"}:</div>
            <div className="columnValue">{row10}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Kadłub" : "Hull"}:</div>
            <div className="columnValue">{row11}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Sterowanie" : "Control"}:</div>
            <div className="columnValue">{row12}</div>
          </div>
          <div className="row">
            <div className="columnName">{lang ? "Oświetlenie" : "Lighting"}:</div>
            <div className="columnValue">{row13}</div>
          </div>
        </div>
      </div>
   );
}
 
export default Table;