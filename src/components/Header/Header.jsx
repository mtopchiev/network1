import React from 'react';
import Logo from "../img/logo2.png";
import s from './Header.module.css';


const Header = () => {
return  (

    <header className={s.header}>

        <img src={Logo} alt=""/>

        <div className={s.logotext}>FriendsBook</div>




    </header>
)
}

export default Header;