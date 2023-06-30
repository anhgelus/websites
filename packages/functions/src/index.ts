export function genSlug(str: string): string {
    return str.toLowerCase()
        .replace(" ", "-")
        .replace('é', 'e')
        .replace('ô', 'o')
}
