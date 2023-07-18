import {Router} from "./Router";

/**
 * A route.
 */
export class Route {
    private parameters = /\{[a-zA-Z0-9-]+}/g
    /**
     * Create a new route.
     * @param path The path of the route.
     * @param fn The function called when the route is reached.
     * @param exec The function called after the route's render.
     */
    constructor(public readonly path: string,
                public readonly fn: (arg0: RouteData) => void,
                public readonly exec: (arg0: RouteData) => void|null = () => null) {
        this.fn = fn;
        this.exec = exec
    }

    public isPathValid(path: string): boolean {
        const exec = this.genRegex().exec(path)
        return exec !== null && exec[0] === path
    }

    public getParams(location: string): Map<string, string> {
        const regex = this.genRegex()
        const paramNames = this.getParamNames()
        const params = new Map<string, string>()
        location.match(regex)?.forEach((param, i) => {
            if (i === paramNames.length+1) {
                throw new Error("Too many parameters")
            }
            if (i !== 0) {
                params.set(paramNames[i-1], param.replace("{", "").replace("}", ""))
            }
        });
        return params
    }

    private genRegex(): RegExp {
        return new RegExp(this.path.replace(this.parameters, "([a-zA-Z0-9-]+)").replace("/", "\/"))
    }

    private getParamNames(): string[] {
        const paramNames: string[] = []
        this.path.match(this.parameters)?.forEach(param => {
            paramNames.push(param.replace("{", "").replace("}", ""))
        })
        return paramNames
    }
}

export class RouteData {
    constructor(public readonly router: Router, public readonly params: Map<string, string>) {}

    public getQuery(id: string): string|undefined {
        const params = new URLSearchParams(window.location.search);
        const val = params.get(id)
        if (val === null) return undefined
        return val
    }
}
