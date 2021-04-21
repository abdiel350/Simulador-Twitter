import React from "react";
import "./Header.scss";
import Logo from '../../img/twitter.png';

export default function Header(){
    return(
        <div className="header"> 
            <img src={Logo} alt="Simulador"/>
            <h1>Simulacion Twitter</h1>
        </div>
    );
}