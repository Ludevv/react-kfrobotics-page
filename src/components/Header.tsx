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
                    <div className="logoBox">
                        <img src={logo} alt="logo"/>
                        <span>K.F. Robotics</span> 
                    </div>
                    <button onClick={mobileMenuHanlder} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-end ${showMobileMenu ? "show" : null}`} id="navbarMenu">
                        <ul className="navbar-nav navbar-right">
                            <li onClick={hideMenuHanlder} className="nav-item">
                                <NavLink to="/" exact className="nav-link">
                                    {lang ? "Strona Główna" : "Home"}
                                </NavLink>
                            </li>
                            <li onClick={hideMenuHanlder} className="nav-item">
                                <NavLink to="/aktualnosci" className="nav-link">
                                    {lang ? "Aktualności" : "News"}
                                </NavLink>
                            </li>
                            <li onClick={subMenuHanlder} className={`nav-item dropdown ${showSubMenu ? `show` : null}`}>
                                <NavLink className="nav-link dropdown-toggle show" to="/dzialanosc" onClick={dectiveRoute} exact id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {lang ? "Działaność" : "Projects"}
                                </NavLink>
                                <div className={`dropdown-menu ${showSubMenu ? `show` : null}`} aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink onClick={mobileMenuHanlder} to="/gerrisasv" className="nav-link">
                                        GerrarisASV
                                    </NavLink>
                                    <NavLink onClick={mobileMenuHanlder} to="/gerrisasvspecial" className="nav-link">
                                        GerrarisASV Special
                                    </NavLink>
                                    <NavLink onClick={mobileMenuHanlder} to="/gerris1200" className="nav-link">
                                        Gerraris 1200
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