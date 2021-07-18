

import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ProfileAvatar from '../Profile/ProfileAvatar';
import SettingsIcon from '@material-ui/icons/Settings';

import './styles.scss';

interface Props {
}

const Menu: React.FC<Props> = () => {

    return (
        <div className="main-menu">
            <div className="logo">
                <AcUnitIcon />
            </div>
            <div className="profiles">
                <ProfileAvatar />
            </div>
            <div className="configs">
                <div className="config-item">
                    <AddIcon />
                </div>
                <div className="config-item">
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
};

export default Menu;
