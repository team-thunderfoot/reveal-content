import RevealContent from "./RevealContent"

class Page {
    constructor() {
        this.init()
        this.events()
    }

    init() {
        document.querySelectorAll(".js--reveal-content").forEach((element) => {
            const content = new RevealContent({
                element: element,
                animation: {
                    autoAlpha: 0,
                    y: 80,
                    duration: 0.75,
                    ease: "power2.out",
                },
            })
        })
    }

    events() {
        // Otros eventos de la página...
    }
}

export default Page

new Page()
