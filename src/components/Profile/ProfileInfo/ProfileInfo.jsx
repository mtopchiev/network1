import React  from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (

        <React.Fragment>
            <div className={s.profileInfoWrapper}>
                <div className={s.ava}>
                    <img src={props.state.avaimg}
                         alt=""/>
                </div>

                <div className={s.data}>
                    <div className="Name">Name: {props.state.profileName}</div>
                    <div className="Birth">Date of Birth: {props.state.profileBirth}</div>
                    <div className="City">City: {props.state.profileCity}</div>
                    <div className="HSchool">Education: {props.state.profileHSchool}</div>
                </div>
            </div>

        </React.Fragment>


    )
}

export default ProfileInfo;

