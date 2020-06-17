import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {

    let dialogsList = props.state.dialogsData.map(el => (
            <DialogItem id={el.id} name={el.name} img={el.avaimg}/>
        )
    )

    let messsagesList = props.state.messagesData.map(
        el => (<li>
            <div>{el.message}</div>
        </li>)
    );

    let addMessageElement = React.createRef();


    let addMessageToChat = () => {
        props.addMessage();


    }

    let onMessageUpdate = ()=> {
        let text = addMessageElement.current.value;
        props.updateNewMessage(text);
    }


    return (
        <div className={s.wrapperMessages}>

            <div className={s.dialogList}>
                {dialogsList}
            </div>

            <div className={s.chat}>
                <ul>
                    {messsagesList}
                </ul>
                <textarea ref={addMessageElement} cols="50" rows="2" onChange={onMessageUpdate} value={props.state.newMessageText}/>

                <button onClick={addMessageToChat}>send</button>
            </div>
        </div>
    )
}

export default Dialogs


