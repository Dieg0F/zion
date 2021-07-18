

import React from 'react';
import Menu from '../../Components/Menu';
import PageSelector from '../../Components/PageSelector';

interface Props {
    isAuth: boolean
}

const Main: React.FC<Props> = ({ children, isAuth }) => {

    const notAuthContent = () => {
        return (
            <section className="center-container">
                {children}
            </section>
        );
    }

    const authContent = () => {
        return (
            <section className="center-container">
                <Menu />
                <div className="main-page">
                    <PageSelector />
                    {children}
                </div>
            </section>
        );
    }

    return isAuth
        ? authContent()
        : notAuthContent()
};

export default Main;
