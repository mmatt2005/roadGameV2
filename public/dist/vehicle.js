import { context } from "./main.js";
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
    moveTo(path) {
        this.movingTo = path;
    }
    /** @description runs when the vehicle has reached its endingPoint */
    onMovingToComplete() { }
    move(targetPoint) {
        var _a, _b;
        console.log("Ruinning.");
        if (((_a = this.movingTo) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            this.movingTo = null;
            console.log("Reached final point");
            return this.onMovingToComplete();
        }
        const tolerance = 1;
        // Use tolerance because sometimes if the target is (100, 100) the vehicle will get stuck at (99, 100)
        if ((Math.abs(this.x - targetPoint.x)) <= tolerance && Math.abs(this.y - targetPoint.y) <= tolerance) {
            console.log("Moving to next point...");
            console.log(this.movingTo);
            (_b = this.movingTo) === null || _b === void 0 ? void 0 : _b.shift();
        }
        if (this.x > targetPoint.x) {
            this.x -= 1;
        }
        else {
            this.x += 1;
        }
        if (this.y > targetPoint.y) {
            this.y -= 1;
        }
        else {
            this.y += 1;
        }
    }
    draw() {
        if (this.movingTo) {
            this.move(this.movingTo[0]);
        }
        context.beginPath();
        context.arc(this.x + 6, this.y + 6, 12, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
        // context.fillStyle = this.color
        // context.fillRect(this.x, this.y, this.width, this.height)
    }
}
