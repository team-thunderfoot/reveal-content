import RevealContent from "./RevealContent"

class Page {
    constructor() {
        this.content = []
        this.init()
        this.events()
    }

    init() {
        document.querySelectorAll(".js--rc").forEach((element, index) => {
            this.content[index] = new RevealContent({
                element: element,
                timeline: "from",
                animationOptions: {
                    autoAlpha: 0,
                    y: 80,
                    duration: 0.75,
                    ease: "power2.out",
                },
                startFrom: "top 80%",
                // pinnedContainer: document.querySelector(""),
                markers: false,
            })
        })
    }

    events() {
        document.querySelector(".js--refresh").addEventListener("click", (e) => {
            e.preventDefault()
            this.refresh()
        })

        document.querySelector(".js--destroy").addEventListener("click", (e) => {
            e.preventDefault()
            this.destroy()
        })
    }

    refresh() {
        document.querySelectorAll(".js--rc").forEach((element, index) => {
            this.content[index].refresh()
        })
    }

    destroy() {
        document.querySelectorAll(".js--rc").forEach((element, index) => {
            this.content[index].destroy()
        })
    }
}

export default Page

new Page()
