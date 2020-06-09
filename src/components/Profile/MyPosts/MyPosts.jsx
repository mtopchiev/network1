import React from 'react';
import s2 from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s2.content}>


            <div className={s2.messanger}>
                My Posts
                <p/>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>add post</button>

            </div>


            <div className={s2.posts}>

                <Post message='Hello Mike!' liked={5}/>
                <Post message="Message 1" liked="3"/>
                <Post message="Message 2" liked="3"/>
                <Post message="Message 3" liked="3"/>



            </div>

        </div>

    )
}

export default MyPosts;