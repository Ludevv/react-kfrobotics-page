import * as React from 'react';


export interface MediaProps {
  
}
 
const Media: React.SFC<MediaProps> = () => {
  return ( 
    <div className='media'>
      <div className='facebook'>
        <a href="https://www.facebook.com/GerrisUSV">
          <i className="fab fa-facebook"></i>
        </a>
      </div>

      <div className='instagram'>
        <a href="https://www.instagram.com/gerris_usv/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
   );
}
 
export default Media;