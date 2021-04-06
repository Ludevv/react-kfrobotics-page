import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Main from '../pages/Main';
import News from '../pages/News';
import GerrisAVS from '../pages/GerrisASV';
import GerrisAVSSpecial from '../pages/GerrisASVSpecial';
import Gerris1200 from '../pages/Gerris1200';
import Map from '../pages/Map';
import ScrollToTop from '../components/ScrollToTop';

export interface RoutingProps {}
 
const Routing: React.SFC<RoutingProps> = () => {
  return ( 
    <>
    <ScrollToTop/>
    <Switch>
      <Route exact path="/" render={()=> <Main/>}/>
      <Route exact path="/aktualnosci" render={()=> <News/>}/>
      <Route exact path="/gerrisasv" render={()=> <GerrisAVS/>}/>
      <Route exact path="/gerrisasvsurveyor" render={()=> <GerrisAVSSpecial/>}/>
      <Route exact path="/gerris1200" render={()=> <Gerris1200/>}/>
      <Route exact path="/kontakt" render={()=> <Map/>}/>
      <Redirect to="/"/>
    </Switch>
    </>
   );
}
 
export default Routing;

