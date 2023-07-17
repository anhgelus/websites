import './app.scss';
import Home from "./pages/Home.svelte";
import {Router} from "@anhgelus/functions/src/routing/Router";
import NotFound from "./pages/common/NotFound.svelte";
import Projects from "./pages/Projects.svelte";
import ProjectRender from "./pages/project/Project.svelte";

import home from "../resources/pages/home.json";
import rawProjects from "../resources/pages/projects.json";
import {genSlug, Project, setupProjectEvents} from "@anhgelus/functions";

const router = new Router()
// @ts-ignore
const projects: Project[] = rawProjects

const app = document.querySelector("#app")!;
const bgColor = 'bg-base-100';
const bgColorAccent = 'bg-base-200';

function newTitle(base: string): string {
    return base + " - anhgelus World Projects"
}

router.createAndAddRoute("/", () => {
    document.title = newTitle("Home")
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
    document.title = newTitle("Projects")
    new Projects({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
            projects: projects,
        }
    });
}, () => {
    if (!router.hasQueries()) {
        setupProjectEvents();
    }
});

router.createAndAddRoute("/projects/{slug}", (data) => {
    let slug = data.params.get("slug")!;
    let project = projects.find(p => genSlug(p.name) === slug);
    if (project === undefined) {
        router.notFound();
        return;
    }
    document.title = newTitle(`${project.name} - Projects`)
    new ProjectRender({
        target: app,
        props: {
            bgColor: bgColor,
            bgColorAccent: bgColorAccent,
            project: project,
        }
    });
});

router.createAndAddRoute("404", () => {
    document.title = newTitle("Oh no, 404")
    new NotFound({
        target: app
    });
});

router.automaticRouting();
