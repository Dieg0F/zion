

import React from 'react';
import Menu from '../../Components/Menu';

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
                {children}
            </section>
        );
    }

    return isAuth
        ? authContent()
        : notAuthContent()
};

export default Main;
