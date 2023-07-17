import {marked} from "marked";
// @ts-ignore
import {mangle} from "marked-mangle";
import {projectEvents} from "./listeners/project";

marked.use(mangle(), {
    //@ts-ignore
    headerIds: false
})

export function setupProjectEvents() {
    projectEvents()
}

export function genSlug(str: string): string {
    return str.toLowerCase()
        .replace(" ", "-")
        .replace('é', 'e')
        .replace('ô', 'o')
}

export function genLinkFromProject(name: string, path: string): string {
    return `/projects/${genSlug(name)}/${path}`
}

export function genPathFromProject(name: string, path: string): string {
    return `projects.${genSlug(name)}.${path}`
}

export type Content = {
    file: string
    image: string
    alt: string
    asImage: boolean
}

export type Link = {
    name: string
    href: string
    primary: boolean
    secondary: boolean
    external: boolean
}

export type ProjectContent = {
    presentation: Content
    faq: Content
    docs: Content
    credits: string
    links: Link[]
    specific: Content
}

export type Project = {
    name: string
    image: string
    description: string
    content: ProjectContent
}
