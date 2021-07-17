
import { RouteList } from "../../../Utils/Constants";

export interface RouterContextType {
    isRoot: boolean,
    resetHistory: () => void,
    onRouteChange: (path: RouteList) => void,
}