import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

class RevealContent {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
        }
        this.animation = payload.animation
            ? payload.animation
            : { autoAlpha: 0, y: 30, duration: 0.75, ease: "power2.out" }

        this.scrollTrigger = {}

        this.init()
    }
    init() {
        let tl = gsap.timeline()

        this.scrollTrigger = ScrollTrigger.create({
            trigger: this.DOM.element,
            start: "top 80%",
            animation: tl,
            // markers : this.markers
        })

        tl.from(this.DOM.element, this.animation)
    }

    events() {}

    refresh() {
        this.scrollTrigger.refresh()
    }
    destroy() {
        this.scrollTrigger.kill()
    }
}
export default RevealContent
