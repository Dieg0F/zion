
import Login from '../Pages/Login';
import { Switch } from 'react-router';
import Profile from '../Pages/Profile';
import Scheduled from '../Pages/Scheduled';
import RouterWrapper from './RouterWrapper';
import { RouteList } from '../Utils/Constants';
import AuthContext from '../Services/Contexts/AuthContext/AuthContext';


export default function Routes() {

	return (
		<Switch>
			<RouterWrapper exact path={RouteList.HOME} component={Profile} />
			<RouterWrapper exact path={RouteList.PROFILE} component={Profile} />
			<RouterWrapper exact path={RouteList.SCHEDULED} component={Scheduled} />
			<RouterWrapper exact path={RouteList.DEFAULT} component={Login} context={AuthContext} />
		</Switch>
	);
}
