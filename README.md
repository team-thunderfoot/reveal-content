# Reveal Content

The RevealContent class allows you to easily create scroll-triggered animations for HTML elements. It leverages GSAP and ScrollTrigger to provide smooth and customizable animations when elements enter the viewport.

[Here's an example](https://team-thunderfoot.github.io/reveal-content/)

## Installation

```sh
npm install @teamthunderfoot/reveal-content
```

## Usage

```sh
import RevealContent from "@teamthunderfoot/reveal-content";

class Index {
    constructor() {
        this.init();
    }

    init() {
        const content = new RevealContent({
            element: document.querySelector(".js--rc"),
            type: "from",
            animationOptions: {
                ease: 'power2.inOut',
                opacity: 0
            },
            intitialTrigger: "top 80%",
            markers: false,
    })
}

export default Index;
```

## Options

• `element` (required): represents the element that will be animated. It's the only required option.

• `animationOptions`: (Object or Array): Animation options. If the type is 'fromTo', this should be an array of two objects defining the initial and final states. Otherwise, it's a single object defining the animation properties. Default: { autoAlpha: 0, y: 30, duration: 0.75, ease: "power2.out" }.


• `intitialTrigger` (String): The trigger point for the animation to start when the element enters the viewport. Default: "top 80%".

•  `markers` (Boolean): Whether to display markers for ScrollTrigger. Default: false.

• `type` (String): Animation type. Can be 'from', 'to', or 'fromTo'. Default: "from".

## Usefull Events

. destroy() : Kills the ScrollTrigger instance, immediately unpinning and restoring any pin-related changes made to the DOM by ScrollTrigger and removing all scroll-related listeners.

. refresh() : Recalculates the positioning of all of the ScrollTriggers on the page; this typically happens automatically when the window/scroller resizes
