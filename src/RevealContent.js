import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

class RevealContent {
    constructor(payload) {
        console.log('reveal content 0.0.10')
        this.DOM = {
            element: payload.element,
            pinnedContainer: payload.pinnedContainer ? payload.pinnedContainer : null,
        }
        this.animationOptions = payload.animationOptions
            ? payload.animationOptions
            : { autoAlpha: 0, y: 30, duration: 0.75, ease: "power2.out" }
        this.intitialTrigger = payload.intitialTrigger ? payload.intitialTrigger : "top 80%"
        this.markers = payload.markers ? payload.markers : false
        this.type = payload.type ? payload.type : "from"

        if (!this.DOM.element || this.DOM.element.length === 0) {
            console.warn("No elements provided.")
        } else {
            this.init()
        }
    }

    init() {
        this.tl = gsap.timeline({
            scrollTrigger: {
                trigger: this.DOM.element, // Element to trigger animation
                pinnedContainer: this.DOM.pinnedContainer,
                start: this.intitialTrigger, // Start when the element is at the center of the viewport
                markers: this.markers,
            },
        })

        switch (this.type) {
            case "from":
                this.tl.from(this.DOM.element, this.animationOptions)
                break

            case "to":
                this.tl.to(this.DOM.element, this.animationOptions)
                break

            case "fromTo":
                this.tl.fromTo(this.DOM.element, this.animationOptions[0], this.animationOptions[1])
                break
        }
    }

    refresh() {
        if (this.tl) {
            this.tl.scrollTrigger.refresh()
        }
    }

    destroy() {
        if (this.tl) {
            this.tl.scrollTrigger.kill()
        }
    }
}

export default RevealContent
