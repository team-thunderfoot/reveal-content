# Reveal Content

The translate-on-scroll package allows you to create translation animations on scroll for an specified element, with options for customizing the displacement, start position, and responsiveness based on viewport width.

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
        document.querySelectorAll(".js--tos").forEach((element) => {
            new RevealContent({
                element: element,
                defaultStart: "70%",
                breakpoint: 1024,
                breakpointMod: 0.1, //if data-tos=400 -> from 1024px of window.width, the distance of displacement will be 40px (400 * 0.1)
            });
        });
    }
}

export default Index;
new Index();
```

## HTML attributes

-   `data-tos` (required): represents the displacement factor for the translation animation.. It's the only required option. The value is the Y axis in pixels. Allowed value: integer (positive or negative).

-   `data-tos-bg`: it sets the element's height to 100% + displacement pixels. This is useful when the element is a background element that needs to expand along with the translation. Allowed value: "true"

-   `data-tos-start`: It determines the starting point of scrolling the screen for the animation. If the element has a data-tos-start attribute, it uses that value; otherwise, it uses the defaultStart (see JS Options) value. Allowed values: "top" / "center" / "bottom" / "X%"" / "Xpx"

-   `data-tos-movement`: If data-tos-movement is set to "from," the animation starts from the displacement pixels and moves to its original position when the user reaches the center of the screen. If not, the animation starts from the original position and moves by the displacement pixels when the user scrolls. Allowed values: "from" / "to" (by default)

```
<div data-tos="-200" data-tos-start="top" data-tos-bg="true" data-tos-movement="from" />
```

## JS Options

• element (required): represents the element that will be translated. It's the only required option.

• defaultStart: determines the default starting position of the translation if the data-tos-start attribute is not defined in the HTML. It defaults to "80%" if not provided.

• breakpoint: determines the width breakpoint for applying a modifier to the translation distance. If the viewport width is greater than or equal to this breakpoint, the modifier is 1. It defaults to 810 if not provided.

• breakpointMod: determines the modifier applied to the translation distance when the viewport width is below the breakpoint. It defaults to 0.4 (40% of the distance) if not provided.

## Usefull Events

. destroy () : Kills the ScrollTrigger instance, immediately unpinning and restoring any pin-related changes made to the DOM by ScrollTrigger and removing all scroll-related listeners.

. refresh () : Recalculates the positioning of all of the ScrollTriggers on the page; this typically happens automatically when the window/scroller resizes
