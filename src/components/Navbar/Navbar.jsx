import React from 'react';
import s from './Navbar.module.css'



const Navbar = () => {
    return  (
        <nav className={s.nav}>
            <div>
                <ul>
            <li><a href="" className={s.active}>Profile</a></li>
            <li><a href="">Messages</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Music</a></li>
            <li><a href="">Settings</a></li>
                </ul>
            </div>
            <div className={s.line}></div>
        </nav>

    )
}

export default Navbar;