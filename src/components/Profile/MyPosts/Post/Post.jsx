import React from 'react';
import s2 from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s2.Post}>
            <div className={s2.circle}></div>
            {props.message}
            <div>         {props.liked} Like</div>
        </div>

    );


}

export default Post;