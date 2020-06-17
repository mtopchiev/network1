import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    return (

                <div className={s.dialogItem}>
                    <ul>
                    <NavLink to={'/dialogs/' + props.id} > <img src={props.img} alt="" className={s.avatar}/> {props.name} </NavLink>
                    </ul>
            </div>






    )
}

export default DialogItem


