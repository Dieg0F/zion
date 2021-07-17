
import Routes from './Routes';
import ReactDOM from 'react-dom';
import History from './Routes/history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './Utils/Web/reportWebVitals';
import { store, persistor } from './Services/store';
import { PersistGate } from 'redux-persist/integration/react';
import DeviceContext from './Services/Contexts/DeviceContext/DeviceContext';

import './assets/styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <DeviceContext>
        <Router history={History}>
          <Routes />
          <ToastContainer />
        </Router>
      </DeviceContext>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
