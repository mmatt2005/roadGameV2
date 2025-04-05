import { CALL_SIZE } from "./constants.js"
import { context } from "./main.js"



export class Call { 
    x: number = 0
    y: number = 0

    setPosition(x: number, y: number) {
        this.x = x
        this.y = y
    }

    draw() {
        context.fillStyle = "white"
        context.fillRect(this.x, this.y, CALL_SIZE, CALL_SIZE)
    }
}