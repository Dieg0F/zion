
import { AuthContextType, ViewType } from "./AuthContextType";
import { createContext, useEffect, useState } from "react";

const WEB_MINUMUM_WIDTH = 900;

export const AuthContextElement =
    createContext<AuthContextType>({
        viewType: {} as ViewType,
    });

const DeviceProvider = (props: any) => {

    const providerValues = () => {
        const viewType = ViewType.WEB;
        return { viewType };
    }

    return (
        <AuthContextElement.Provider value={providerValues()}>
            {props.children}
        </AuthContextElement.Provider>
    )
}

export default DeviceProvider;