import { CALL_SIZE } from "./constants.js";
import { context } from "./main.js";
export class Call {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, CALL_SIZE, CALL_SIZE);
    }
}
