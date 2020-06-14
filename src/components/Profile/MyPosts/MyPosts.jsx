import React from 'react';
import s2 from './MyPosts.module.css'
import Post from "./Post/Post";






const MyPosts = (props) => {
    let  postsList =props.dataPosts.map(el => {
        return <Post message={el.postText} liked={el.likesCounter}/>

    } );


    return (
        <div className={s2.content}>
            <div className={s2.messanger}>
                My Posts
                <p/>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>add post</button>

            </div>


            <div className={s2.posts}>
                {postsList}


            </div>

        </div>

    )
}

export default MyPosts;