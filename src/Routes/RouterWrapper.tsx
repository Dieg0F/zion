
import Main from '../Pages/Main';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { RouteList } from '../Utils/Constants';
import { RouterContextElement } from '../Services/Contexts/RouterContext/RouterContext';
import { RouterContextType } from '../Services/Contexts/RouterContext/RouterContextType';

type TParams = { component: any, exact: boolean, path: string, isPrivate?: boolean, context?: any };

const RouterWrapper: React.FC<TParams> = ({ component: Component, isPrivate, context, path, ...rest }) => {

  const { onRouteChange } = useContext<RouterContextType>(RouterContextElement);

  onRouteChange(path as RouteList);

  const MainContext = context
    ? (context)
    : (<></>)

  const mainLayout = (props: any) => {
    return (
      <MainContext>
        <Main isAuth={true}>
          <Component {...props} />
        </Main>
      </MainContext>
    )
  }

  return (<Route {...rest} render={props => (mainLayout({ ...props }))} />
  );
};

RouterWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};

export default RouterWrapper;