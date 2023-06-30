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
