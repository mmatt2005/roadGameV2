import { POINT_SIZE } from "./constants.js";
import { context } from "./main.js";
import { uuidv4 } from "./utils.js";
export class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.color = "black";
        this.width = POINT_SIZE;
        this.height = POINT_SIZE;
        this.id = uuidv4();
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    centerX() {
        return this.x + (this.width / 2);
    }
    centerY() {
        return this.y + (this.height / 2);
    }
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
