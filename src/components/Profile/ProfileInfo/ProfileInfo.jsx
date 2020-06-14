import React  from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (

        <React.Fragment>
            <div className={s.profileInfoWrapper}>
                <div className={s.ava}>
                    <img src="https://avatars.mds.yandex.net/get-pdb/1751508/5ce53352-7bf5-4b8b-801c-a4f1a7e06a0d/s1200"
                         alt=""/>
                </div>

                <div className={s.data}>
                    <div className="Name">Name: Michael T</div>
                    <div className="Birth">Date of Birth: 2 january</div>
                    <div className="City">City: Krasnoyarsk</div>
                    <div className="HSchool">Education: SFU'15</div>
                </div>
            </div>

        </React.Fragment>


    )
}

export default ProfileInfo;