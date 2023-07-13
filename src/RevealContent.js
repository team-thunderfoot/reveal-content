import JSUTIL from "@andresclua/jsutil"

class RevealContent {
    constructor(payload) {
        this.DOM = {}

        this.JSUTIL = new JSUTIL()
        this.init()
        this.events()
    }

    init() {}

    events() {}

    // Clears the click event and removes all added classes
    destroy() {}
}
export default RevealContent
