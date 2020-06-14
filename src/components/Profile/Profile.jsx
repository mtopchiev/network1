import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {



    return (

        <div className={s.content}>
            <div className={s.profileInfo}>
                <ProfileInfo/>
            </div>

            <div className={s.myposts}>

                <MyPosts dataPosts={props.state.dataPosts}/>
            </div>

        </div>


    )
}

export default Profile;
