import * as React from 'react';
import { useLanguage } from '../store/Store';

export interface GerrisProps {
  text1: string;
  text2: string;
  text3: string;
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
}
 
const Gerris: React.SFC<GerrisProps> = ({text1, text2, text3, imgSrc1, imgSrc2, imgSrc3}) => {
  const [{lang}, {changeLanguage}] = useLanguage();
  return ( 
    <>
      <div className="gerrisBoxOdd">
        <p className="gerrisTextOdd">{text1}</p>
        <div className="gerrisImgBoxOdd">
          <div className="gerrisTriangleOdd"></div>
          <div className={imgSrc1}></div>
          <div className="gerrisTriangle2Odd"></div>
        </div>
        </div>


           <div className="gerrisBoxEven">


              <div className="gerrisImgBoxEven">
          <div className="gerrisTriangleEven"></div>
          <div className={imgSrc2}></div>
          <div className="gerrisTriangle2Even"></div>
        </div>
        
        <p className="gerrisTextEven">{text2}</p>
      </div>



      <div className="gerrisBoxOdd">
        <p className="gerrisTextOdd">{text3}</p>
        <div className="gerrisImgBoxOdd">
          <div className="gerrisTriangleOdd"></div>
          <div className={imgSrc3}></div>
          <div className="gerrisTriangle2Odd"></div>
        </div>
      </div>
      <em className="gerrisDesign">{lang ? "Zaprojektowany i budowany w Polsce przez zespół inżynierów i modelarzy." : "Designed and built in Poland by a team of engineers and modelers."}</em>
      <p className="gerrisHelp">{lang ? "Oferujemy wsparcie w pomiarach batymetrycznych." : "We offer support in bathymetric measurements."}</p>
      </>
   );
}
 
export default Gerris;