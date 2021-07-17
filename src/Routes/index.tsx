
import Login from '../Pages/Login';
import { Switch } from 'react-router';
import RouterWrapper from './RouterWrapper';
import { RouteList } from '../Utils/Constants';
import AuthContext from '../Services/Contexts/AuthContext/AuthContext';

export default function Routes() {

	return (
		<Switch>
			<RouterWrapper exact path={RouteList.HOME} component={Login} context={AuthContext} />
			<RouterWrapper exact path={RouteList.DEFAULT} component={Login} context={AuthContext} />
		</Switch>
	);
}
