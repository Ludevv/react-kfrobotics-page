import * as React from 'react';

export interface TitleProps {
  text: string;
}
 
const Title: React.SFC<TitleProps> = ({text}) => {

  return ( 
      <div className="titleBox">
        <p className="titleText">{text}</p>
      </div>
   );
}
 
export default Title;