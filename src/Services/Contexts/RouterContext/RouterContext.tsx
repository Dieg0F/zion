
import history from '../../../Routes/history';
import { RouteList } from '../../../Utils/Constants';
import { RouterContextType } from "./RouterContextType";
import { createContext, useRef, useState } from "react";

const rootPages = [RouteList.HOME, RouteList.PROFILE, RouteList.SCHEDULED];

interface RootManeger {
    isRoot: boolean;
}

function getDefaultRootManagerData() {
    return { isRoot: true };
}

export const RouterContextElement =
    createContext<RouterContextType>({
        isRoot: {} as boolean,
        onRouteChange: () => { },
        resetHistory: () => { },
    });

const RouterProvider = (props: any) => {

    const isRootRef = useRef<RootManeger>(getDefaultRootManagerData());
    const [isRoot, setIsRoot] = useState(true);

    const onRouteChange = (path: RouteList) => {
        updateRootRef(rootPages.includes(path));
    }

    const resetHistory = () => {
        history.push(RouteList.HOME);
    }

    const updateRootRef = (value: boolean) => {
        isRootRef.current = { isRoot: value };
        setIsRoot(value);
    }

    const providerValues = () => {
        return { ...isRootRef.current, onRouteChange, resetHistory };
    }

    return (
        <RouterContextElement.Provider value={providerValues()}>
            {props.children}
        </RouterContextElement.Provider>
    )
}

export default RouterProvider;