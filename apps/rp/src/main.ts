import './app.scss';
import Home from "./pages/Home.svelte";
import {Router} from "@anhgelus/functions/src/routing/Router";
import NotFound from "./pages/common/NotFound.svelte";
// import {events} from "./listeners/projectImage";

// import {genSlug, Project} from "@anhgelus/functions";

import home from "../resources/pages/home.json";

const router = new Router()

export const app = document.querySelector("#app")!;
export const bgColor = 'bg-base-100';
export const bgColorAccent = 'bg-base-200';

function newTitle(base: string): string {
    return base + " - anhgelus World RP"
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

router.createAndAddRoute("404", () => {
    document.title = newTitle("Oh non, 404")
    new NotFound({
        target: app
    });
});

router.automaticRouting();

