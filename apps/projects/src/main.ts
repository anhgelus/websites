import './app.scss';
import Home from "./pages/Home.svelte";
import {Router} from "@anhgelus/functions/src/routing/Router";
import NotFound from "./pages/common/NotFound.svelte";

import home from "../resources/pages/home.json";
import Projects from "./pages/Projects.svelte";
import {events} from "./listeners/projectImage";

const router = new Router()

export const app = document.querySelector("#app")!;
export const bgColor = 'bg-base-100';
export const bgColorAccent = 'bg-base-200';

function newTitle(base: string): string {
    return base + " - anhgelus World Projects"
}

router.createAndAddRoute("/", () => {
    document.title = newTitle("Accueil")
    new Home({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
            contents: home,
        }
    });
});

router.createAndAddRoute("/projects", () => {
    document.title = newTitle("Projets")
    new Projects({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
        }
    });
}, () => {
    if (!router.hasQueries()) {
        events();
    }
});

router.createAndAddRoute("/projects/{slug}", () => {
    document.title = newTitle("Projets")
    new Projects({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
        }
    });
}, () => {
    if (!router.hasQueries()) {
        events();
    }
});

router.createAndAddRoute("404", () => {
    document.title = newTitle("Oh no, 404")
    new NotFound({
        target: app
    });
});

router.route(window.location.pathname)
