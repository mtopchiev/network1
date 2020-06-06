import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'



const Profile = () => {
    return  (

        <div className={s.content}>
            <div className={s.ava}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200" alt=""/>
           </div>

            <div className={s.data}>
                <div className="Name">Name: Michael T</div>
                <div className="Birth">Date of Birth: 2 january</div>
                <div className="City">City: Krasnoyarsk</div>
                <div className="HSchool">Education: SFU'15</div>
            </div>
            <div className="myposts">
                <MyPosts />


            </div>

        </div>




    )
}

export default Profile;