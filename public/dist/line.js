import { context } from "./main.js";
export class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }
    draw() {
        context.beginPath();
        context.moveTo(this.point1.centerX(), this.point1.centerY());
        context.lineTo(this.point2.centerX(), this.point2.centerY());
        context.lineWidth = 10;
        context.stroke();
    }
}
