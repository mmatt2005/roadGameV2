import { context } from "./main.js";
import { Point } from "./point.js";

export class Line {
    constructor(point1: Point, point2: Point) {
        this.point1 = point1
        this.point2 = point2
    }

    point1: Point
    point2: Point

    draw() { 
        context.beginPath()
        context.moveTo(this.point1.centerX(), this.point1.centerY())
        context.lineTo(this.point2.centerX(), this.point2.centerY())
        context.lineWidth = 10

        context.stroke()
    }
}