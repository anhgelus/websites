import './app.scss';
import Home from "./pages/Home.svelte";
import {Router} from "@anhgelus/functions/src/routing/Router";
import NotFound from "./pages/common/NotFound.svelte";
import Projects from "./pages/RPs.svelte";
import home from "../resources/pages/home.json";
import rps from "../resources/pages/rps.json";
import rules from "../resources/pages/rules.json";
import {genSlug, setupProjectEvents} from "@anhgelus/functions";
import RP from "./pages/rp/RP.svelte";
import Rules from "./pages/Rules.svelte";

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

router.createAndAddRoute("/rp", () => {
    document.title = newTitle("RP")
    new Projects({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
            projects: rps,
        }
    });
}, () => {
    if (!router.hasQueries()) {
        setupProjectEvents();
    }
});

router.createAndAddRoute("/rp/{slug}", (data) => {
    let slug = data.params.get("slug")!;
    let project = rps.find(p => genSlug(p.name) === slug);
    if (project === undefined) {
        router.notFound();
        return;
    }
    document.title = newTitle(`${project.name} - RP`)
    new RP({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
            project: project,
            routeData: data
        }
    });
});

router.createAndAddRoute("/rules", () => {
    document.title = newTitle(`Règles`)
    new Rules({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
            contents: rules,
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

