import React from 'react';
import s2 from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsList = props.dataPosts.map(el => {
        return <Post message={el.postText} liked={el.likesCounter}/>

    });

    let messageBox = React.createRef();

    let addPost = () => {
        let text = messageBox.current.value;
        props.addPost(text);
        messageBox.current.value = '';
    }

    let onPostUpdate = () => {
        let currentText = messageBox.current.value;
        props.updateNewPostText(currentText);

    }


    return (
        <div className={s2.content}>
            <div className={s2.messanger}>
                My Posts
                <p/>
                <textarea ref={messageBox} value={props.newPostText} onChange={onPostUpdate} cols="30" rows="3"/>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={s2.posts}>
                {postsList}
            </div>

        </div>

    )
}

export default MyPosts;