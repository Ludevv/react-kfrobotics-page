import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../store/Store';

import englishFlag from '../images/eng.png'
import polishFlag from'../images/pl.png'
import logo from '../images/logo.png'


const Header: React.SFC = () => {
  const [showSubMenu, setShowSubMenu] = useState<Boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<Boolean>(false);
  const [{lang}, {changeLanguage}] = useLanguage();

  const mobileMenuHanlder = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const subMenuHanlder = () => {
    setShowSubMenu(!showSubMenu)
  }

  const hideMenuHanlder = () => {
    setShowSubMenu(false)
    setShowMobileMenu(false)
  }


  const dectiveRoute = (event: any): void => {
    event.preventDefault()
  }

  const changeLanguageOnPage = () => {
    changeLanguage()
    hideMenuHanlder();
  }

  return ( 
      <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                     <NavLink to="/" exact className="nav-link">
                    <div className="logoBox">
                        <img src={logo} alt="logo"/>
                        <span>K.F. Robotics</span> 
                    </div>
                    </NavLink>
                    <button onClick={mobileMenuHanlder} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end ${showMobileMenu ? "show" : null}`} id="navbarMenu">
                        <ul className="navbar-nav navbar-right">
                            <li onClick={hideMenuHanlder} className="nav-item">
                                <NavLink to="/" exact className="nav-link">
                                    {lang ? "Strona G????wna" : "Home"}
                                </NavLink>
                            </li>
                            <li onClick={hideMenuHanlder} className="nav-item">
                                <NavLink to="/aktualnosci" className="nav-link">
                                    {lang ? "Aktualno??ci" : "News"}
                                </NavLink>
                            </li>
                            <li onClick={subMenuHanlder} className={`nav-item dropdown ${showSubMenu ? `show` : null}`}>
                                <NavLink className="nav-link dropdown-toggle show" to="/dzialanosc" onClick={dectiveRoute} exact id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {lang ? "Dzia??ano????" : "Projects"}
                                </NavLink>
                                <div className={`dropdown-menu ${showSubMenu ? `show` : null}`} aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink onClick={mobileMenuHanlder} to="/gerrisasv" className="nav-link">
                                        Gerris ASV
                                    </NavLink>
                                    <NavLink onClick={mobileMenuHanlder} to="/gerrisasvsurveyor" className="nav-link">
                                        Gerris ASV Surveyor
                                    </NavLink>
                                    <NavLink onClick={mobileMenuHanlder} to="/gerris1200" className="nav-link">
                                        Gerris 1100 ASV
                                    </NavLink>
                                </div>
                            </li>
                            <li onClick={hideMenuHanlder} className="nav-item" >
                                <NavLink to="/kontakt" className="nav-link">
                                    {lang ? "Kontakt" : "Contact"}
                                </NavLink>
                            </li>
                            <li onClick={changeLanguageOnPage} className="nav-item">
                                <NavLink onClick={dectiveRoute} to="/lang" className="nav-link">
                                    {lang ? "English" : "Polski"}
                                    <img src={lang ? englishFlag : polishFlag} alt="flaga" className="flagBox"/>    
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                <div className="container">
                    <h1>K.F. <span>Robotics</span></h1>
                </div>
        </header>
    </>
   );
}
 
export default Header;