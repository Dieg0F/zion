

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RouteList } from '../../Utils/Constants';

import './styles.scss';

interface Props {
}

const PageSelector: React.FC<Props> = () => {

    return (
        <section className="main-page-selector">
            <div className="page-selector-links">
                <NavLink to={RouteList.PROFILE}>Postagens no perfil</NavLink>
                <NavLink to={RouteList.SCHEDULED}>Postagens agendadas</NavLink>
            </div>
        </section>
    )
};

export default PageSelector;
