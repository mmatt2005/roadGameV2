import { context, player } from "./main.js"

export class Player {
    constructor() { 
        this.listener()
    }

    x: number = 0
    y: number = 0

    listener() {
        window.addEventListener("keypress", event => {
            if (event.key === "w" ) {
                this.y -= 10
            } else if (event.key === "a") {
                this.x -= 10
            } else if (event.key === "s") {
                this.y += 10
            } else if (event.key === "d" ) {
                this.x += 10
            }
        })
    }

    draw() {
        context.fillStyle = "white"
        context.fillRect(this.x, this.y, 25, 25)
    }
}