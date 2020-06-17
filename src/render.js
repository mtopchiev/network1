import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import state, {addPost}  from "./redux/state";
import  {updateNewPostText} from "./redux/state";
import  {updateNewMessage} from "./redux/state";
import  {addMessage} from "./redux/state";




export let rerenderEntireTree =(state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewMessage={updateNewMessage}
                 addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
