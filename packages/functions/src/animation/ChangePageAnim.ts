export class ChangePageAnim {
    public readonly colors = ["bg-primary", "bg-secondary", "bg-neutral", "bg-success"]

    private parent: HTMLDivElement;

    constructor(public readonly logo: string, public readonly showLogo = true, public readonly level = 3) {
        this.level = level;
        this.genDivs();
        document.body.appendChild(this.parent);
        setTimeout(() => {
            this.parent.remove();
        }, 2250);
    }

    private genDivs() {
        this.parent = document.createElement('div');
        this.parent.classList.add('fixed', 'w-screen', 'h-screen', 'z-50', 'top-0', 'animation-parent');
        for (let i = 0; i < this.level; i++) {
            const div = document.createElement('div');
            div.classList.add('w-full',
                'h-full',
                this.colors[i%this.colors.length],
                'animation',
                'delay-' + i,
                'z-'+i,
                'absolute');
            if (i == this.level - 1 && this.showLogo) {
                const img = document.createElement('img');
                img.classList.add();
                img.src = this.logo;
                img.alt = "Logo";
                div.classList.add('flex', 'flex-col', 'justify-center', 'items-center', )
                div.appendChild(img);
            }
            this.parent.appendChild(div);
        }
    }
}