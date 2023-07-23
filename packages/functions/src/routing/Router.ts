import {Route, RouteData} from "./Route";
import {ChangePageAnim} from "../animation/ChangePageAnim";

/**
 * Router is a class that allows you to manage the routes of your application.
 */
export class Router {
    private routes: Route[] = [];
    private queries: Map<string,string> = new Map<string,string>();

    constructor() {
        document.addEventListener("click", (e) => {
            if (!(e.target instanceof HTMLAnchorElement) &&
                (e.target instanceof HTMLElement && !e.target.classList.contains("clickable") && !e.target.classList.contains("no-load"))) {
                return
            }
            let link: HTMLElement = <HTMLElement>e.target;
            while (!(link instanceof HTMLAnchorElement)) {
                if (link == document.body) {
                    throw Error("No link found");
                }
                link = link.parentElement!;
            }
            link.classList.add("is-clicked");
            const href = link.href;
            const fileRegex = /(.*)(\.[a-z]+$)/;
            if ((href.startsWith("https") && !href.startsWith(window.location.origin)) ||
                href.startsWith("mailto:") ||
                fileRegex.test(href)) {
                return
            }
            e.preventDefault();
            if (href.replace("#", "") != href) {
                const selector = href.split("#")[1];
                let top = document.querySelector(`#${selector}`)!.getBoundingClientRect().top
                const navbar = document.getElementById("navbar");
                if (navbar != null) {
                    top -= navbar.getBoundingClientRect().height + 10;
                }
                scrollTo({
                    top: top,
                    behavior: "smooth"
                })
                window.history.pushState({}, "", href);
                return
            }
            this.changePage(href, !link.classList.contains("no-load"));
        })
    }

    private changePage(href: string, anim: boolean) {
        this.queries = new Map<string,string>();
        if (!anim) {
            window.history.pushState({}, "", href);
            this.route(href)
            return
        }
        new ChangePageAnim("/logo.jpg", false)
        setTimeout(() => {
            window.scrollTo({
                top: 0,
            });
            window.history.pushState({}, "", href);
            this.route(href)
        }, 1000);
    }

    /**
     * Add a route to the router.
     * @param route The route to add.
     */
    public addRoute(route: Route): void {
        this.routes.push(route);
    }

    public createAndAddRoute(path: string, fn: (arg0: RouteData) => void, exec: (arg0: RouteData) => void|null = () => null): void {
        this.routes.push(new Route(path, fn, exec));
    }

    /**
     * Get all routes.
     */
    public getRoutes(): Route[] {
        return this.routes;
    }

    /**
     * Get a route by its path.
     * @param path The path of the route.
     */
    public getRoute(path: string): Route | null {
        let r = null;
        this.routes.forEach(route => {
            if (route.isPathValid(path)) {
                r = route;
            }
        });
        return r;
    }

    /**
     * Route to the right route.
     * @param path The path to route.
     */
    public route(path: string): any {
        document.title = "La FaBrick";
        document.getElementById('app')!.innerHTML = "";
        const route = this.getRoute(this.trimPath(path));
        if (route === null) {
            this.notFound();
            return
        }
        const data = new RouteData(this, route.getParams(path));
        route.fn(data);
        route.exec(data);

        document.querySelectorAll("meta").forEach(meta => {
            const property = meta.getAttribute("property")
            if (property === null) {
                return
            }
            if (property === "og:url") {
                meta.setAttribute("og:url", window.location.href)
            } else if (property === "og:title") {
                meta.setAttribute("og:title", document.title)
            }
        });
    }

    public automaticRouting(): void {
        this.route(window.location.pathname)
    }

    /**
     * Get all queries.
     */
    public getQueries(): Map<string,string> {
        if (this.queries.size > 0) {
            return this.queries;
        }
        const queriesLocation = window.location.search.substring(1).split('&');
        if (queriesLocation.length == 0 || queriesLocation[0] == '') {
            this.queries = new Map<string,string>();
            return this.queries;
        }
        queriesLocation.forEach(query => {
            const [key, value] = query.split('=');
            this.queries.set(key, value);
        })
        return this.queries;
    }

    /**
     * Check if there are queries.
     */
    public hasQueries(): boolean {
        return this.getQueries().size > 0;
    }

    /**
     * Get a query by its key.
     * @param key The key of the query.
     */
    public getQuery(key: string): string | null {
        return this.getQueries().get(key) || null;
    }

    public notFound(): void {
        const notFound = this.getRoute('404');
        if (notFound == null) {
            throw new Error(`Impossible to find the route for the error 404.`);
        }
        notFound.fn(new RouteData(this, new Map<string,string>()));
    }

    /**
     * Trim the path.
     * @param path The path to trim.
     * @private
     */
    private trimPath(path: string): string {
        return path.split('?')[0].split('#')[0].replace(window.location.origin, '');
    }
}