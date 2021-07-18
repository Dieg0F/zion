

import React, { useState, useEffect } from 'react';
import Feed from '../../Components/Profile/Feed';

import './styles.scss';

interface Props {
}

const Profile: React.FC<Props> = () => {

    return (
        <section className="main-profile-page">
            <Feed />
        </section>
    )
};

export default Profile;
