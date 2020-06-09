import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {
    return (

        <div className={s.wrapperMessages}>

            <div className={s.dialogList}>
                <DialogItem name="Mikhail" id={1}/>
                <DialogItem name="Dmitriy" id={2}/>
                <DialogItem name="Mariya" id={3}/>
                <DialogItem name="Diana" id={4}/>
                <DialogItem name="Alex" id={5}/>
                <DialogItem name="Petr" id={6}/>
            </div>

            <div className={s.chat}>
                Message 1
                Message 2
                Message 3

            </div>

        </div>


    )
}

export default Dialogs


