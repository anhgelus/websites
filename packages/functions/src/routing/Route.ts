import {Router} from "./Router";

/**
 * A route.
 */
export class Route {
    public readonly path: string;
    public readonly fn: (arg0: Router) => void;
    public readonly exec: (arg0: Router) => void|null;

    /**
     * Create a new route.
     * @param path The path of the route.
     * @param fn The function called when the route is reached.
     * @param exec The function called after the route's render.
     */
    constructor(path: string, fn: (arg0: Router) => void, exec: (arg0: Router) => void|null = () => null) {
        this.path = path;
        this.fn = fn;
        this.exec = exec
    }
}