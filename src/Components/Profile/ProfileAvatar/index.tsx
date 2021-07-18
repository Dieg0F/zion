

import React, { useState, useEffect } from 'react';
import profileImg from '../../../assets/images/default_profile.png';

import './styles.scss';

interface Props {
}

const ProfileAvatar: React.FC<Props> = () => {

    return (
        <div className="profile profile-cover">
            <div className="profile-img">
                <img src={profileImg} />
            </div>
        </div>
    )
};

export default ProfileAvatar
