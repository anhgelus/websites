export function events() {
    document.querySelectorAll(".project-image").forEach((e) => {
        setupEvents(e)
    })
}

function setupEvents(e: Element) {
    e.addEventListener("mouseenter", onMouseEnter)
    e.addEventListener("mouseleave", onMouseLeave)
}

function onMouseEnter(e: Event) {
    if (!(e.target instanceof HTMLDivElement)) return;
    e.target.classList.add("is-active")
}

function onMouseLeave(e: Event) {
    if (!(e.target instanceof HTMLDivElement)) return;
    let link: HTMLElement = e.target
    while (!(link instanceof HTMLAnchorElement)) {
        if (link == document.body) throw Error("No link found")
        link = e.target.parentElement!
    }
    if (link.classList.contains("is-clicked")) return
    e.target.classList.remove("is-active")
}
