import {marked} from "marked";
// @ts-ignore
import {mangle} from "marked-mangle";

marked.use(mangle(), {
    //@ts-ignore
    headerIds: false
})

export function genSlug(str: string): string {
    return str.toLowerCase()
        .replace(" ", "-")
        .replace('é', 'e')
        .replace('ô', 'o')
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
