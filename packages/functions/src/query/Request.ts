import { marked } from 'marked';

export class Request {
    /**
     * Create a new request.
     * @param path The path of the request.
     * @param ext The extension of the file requested.
     */
    constructor(
        public readonly path: string,
        public readonly ext: string,
    ) {

    }

    /**
     * Generate the url of the request.
     */
    public genUrl(): string {
        if (this.ext == "") return `${window.location.origin}/resources/${this.path}`;
        return `${window.location.origin}/resources/${this.path}.${this.ext}`;
    }

    /**
     * Get the content of the request.
     */
    public async getContent(): Promise<string> {
        const res = await fetch(this.genUrl()).then(res => res.text());
        if (this.ext == "md") {
            return marked.parse(res);
        }
        return res;
    }
}