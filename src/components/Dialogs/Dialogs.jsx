import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsList = props.state.dialogsData.map( el =>(
        <DialogItem id ={el.id} name={el.name} />
        )
    )



    let messsagesList = props.state.messagesData.map(
        el => (<div>{el.message}</div>)
    );

    return (
        <div className={s.wrapperMessages}>

            <div className={s.dialogList}>
                {dialogsList}
            </div>

            <div className={s.chat}>
                {messsagesList}
            </div>
        </div>
    )
}

export default Dialogs


