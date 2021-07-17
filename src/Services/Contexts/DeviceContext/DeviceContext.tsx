
import { createContext, useEffect, useState } from "react";
import RouterContext from "../RouterContext/RouterContext";
import { DeviceContextType, ViewType } from "./DeviceContextType";

const WEB_MINUMUM_WIDTH = 900;

export const DeviceContextElement =
    createContext<DeviceContextType>({
        viewType: {} as ViewType,
    });

function getViewType() {
    if (window.screen.width <= WEB_MINUMUM_WIDTH) {
        return ViewType.MOBILE;
    } else {
        return ViewType.WEB;
    }
}

const DeviceProvider = (props: any) => {

    const [viewType, setViewType] = useState<ViewType>(getViewType());

    useEffect(() => {
        resizeListener();
    }, []);

    const resizeListener = () => {
        const listener = () => {
            setViewType(getViewType());
        }

        window.addEventListener("resize", listener, false);
    }

    const providerValues = () => {
        return { viewType };
    }

    return (
        <DeviceContextElement.Provider value={providerValues()}>
            <RouterContext>
                {props.children}
            </RouterContext>
        </DeviceContextElement.Provider>
    )
}

export default DeviceProvider;