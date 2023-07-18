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
    str = str.toLowerCase()
        .replace(/ /g, "-")
        .replace(/é/g, 'e')
        .replace(/è/g, 'e')
        .replace(/ê/g, 'e')
        .replace(/à/g, 'a')
        .replace(/ô/g, 'o')
        .replace(/[^a-z-]+/g, '-')
        .replace(/\?/g, '')
    while (str.endsWith("-")) {
        str = str.substring(0, str.length - 1)
    }
    return str
}

export function genLinkFromProject(name: string, path: string): string {
    return `/projects/${genSlug(name)}/${genSlug(path)}`
}

export function genPathFromProject(name: string, path: string): string {
    return `projects.${genSlug(name)}.${genSlug(path)}`
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
