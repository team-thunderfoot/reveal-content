import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

class RevealContent {
    constructor(payload) {
        this.DOM = {
            element: payload.element,
        }
        this.animationOptions = payload.animationOptions
            ? payload.animationOptions
            : { autoAlpha: 0, y: 30, duration: 0.75, ease: "power2.out" }

        this.startFrom = payload.startFrom ? payload.startFrom : "top 80%"
        this.markers = payload.markers ? payload.markers : false
        this.scrollTrigger = {}
        this.timeline = payload.timeline ? payload.timeline : "from"

        this.init()
    }
    init() {
        let tl = gsap.timeline()

        this.scrollTrigger = ScrollTrigger.create({
            trigger: this.DOM.element,
            start: this.startFrom,
            animation: tl,
            markers: this.markers,
        })

        if (this.timeline === "from") tl.from(this.DOM.element, this.animationOptions)

        if (this.timeline === "to") tl.to(this.DOM.element, this.animationOptions)

        if (this.timeline === "fromTo") tl.fromTo(this.DOM.element, this.animationOptions)
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
