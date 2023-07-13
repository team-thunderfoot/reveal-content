# Reveal Content

The `reveal-content` package allows you to easily create reveal animations for specified elements

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
            timeline: "from",
            animationOptions: {
                autoAlpha: 0,
                y: 80,
                duration: 0.75,
                ease: "power2.out",
            },
            startFrom: "top 80%",
            markers: false,
    }
}

export default Index;

new Index();
```

## JS Options

• `element` (required): represents the element that will be animated. It's the only required option.

• `animationOptions`: Allows customizing the animation options for the element. It includes the following properties:

-   `autoAlpha`: The initial opacity of the element. It defaults to 0.
-   `y`: The displacement on the Y-axis for the animation. It defaults to 30.
-   `duration`: The duration of the animation in seconds. It defaults to 0.75.
-   `ease`: The easing function to control the animation's acceleration. It defaults to "power2.out".

• `startFrom`: Sets the starting point of the ScrollTrigger. It accepts a string value representing the ScrollTrigger's starting position. Defaults to "top 80%" if not provided.

• `markers`: Enables or disables ScrollTrigger markers. It accepts a boolean value. Defaults to false if not provided.

• `timeline`: Sets the timeline function (from(), to(), fromTo()) for animation. It accepts a string value. Defaults to "from" if not provided.

## Usefull Events

. destroy() : Kills the ScrollTrigger instance, immediately unpinning and restoring any pin-related changes made to the DOM by ScrollTrigger and removing all scroll-related listeners.

. refresh() : Recalculates the positioning of all of the ScrollTriggers on the page; this typically happens automatically when the window/scroller resizes
