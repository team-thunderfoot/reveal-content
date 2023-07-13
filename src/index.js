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
                animation: {
                    autoAlpha: 0,
                    y: 80,
                    duration: 0.75,
                    ease: "power2.out",
                },
            })
        })

        document.querySelector(".js--refresh").addEventListener("click", (e) => {
            e.preventDefault()
            this.refresh()
        })

        document.querySelector(".js--destroy").addEventListener("click", (e) => {
            e.preventDefault()
            this.destroy()
        })
    }

    events() {
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
