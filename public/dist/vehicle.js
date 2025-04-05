import { context } from "./main";
export class Vehicle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 25;
        this.height = 25;
        this.color = "red";
        this.movingTo = null;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    moveTo(endPoint) {
        this.movingTo = endPoint;
    }
    move(endPoint) {
        if (this.x !== endPoint.x) {
            if (this.x > endPoint.x) {
                this.x -= 1;
            }
            else {
                this.x += 1;
            }
        }
        else {
            if (this.y > endPoint.y) {
                this.y -= 1;
            }
            else {
                this.y += 1;
            }
        }
    }
    draw() {
        if (this.movingTo) {
            this.move(this.movingTo);
        }
        context.beginPath();
        context.arc(this.x + 6, this.y + 6, 12, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
        // context.fillStyle = this.color
        // context.fillRect(this.x, this.y, this.width, this.height)
    }
}
